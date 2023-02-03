import { Inject, Injectable } from '@angular/core';
import { catchError, distinctUntilChanged, map, take } from 'rxjs/operators';
import { Action } from './action';
import { StateContext } from './state-context';
import { StateHelper } from './state-helper';
import { StoreLogPlugin } from './store-log-plugin';
import { StorePlugin } from './store-plugin';
import { StateConfig } from './state-config';
import { STATE_CONFIG } from './state-config.token';
import { StorePerformancePlugin } from './store-performance-plugin';
import { BehaviorSubject, isObservable, Observable, of, Subject, throwError } from 'rxjs';

export type ObjectComparator = (oldObject: any, newObject: any) => boolean;

@Injectable()
export class Store<S> {

  private actionCounter = 0;
  private plugins: StorePlugin[] = [];
  private currentState: S;
  private stateStream: BehaviorSubject<S>;

  constructor(@Inject(STATE_CONFIG) private config: StateConfig) {
    this.plugins.push(new StoreLogPlugin(this.config.storeName, this.config.log));
    this.plugins.push(new StorePerformancePlugin(this.config.storeName, this.config.timekeeping));
    this.currentState = config.initialState || {};
    this.stateStream = new BehaviorSubject<S>(this.currentState);
  }

  private static getErrorState(action: Action, error: Error | any): any {
    const state = StateHelper.getEmptyObject();
    state.error = error;
    state.action = action.Type;
    return state;
  }

  dispatch(action: Action): Observable<S> {
    const currentCounter = this.actionCounter++;
    this.dispatchBefore(action, this.currentState, currentCounter);

    let actionResult$;
    try {
      actionResult$ = action.handleState(this.getStateContext());
    } catch (error) {
      this.dispatchAfter(action, this.currentState, currentCounter);
      console.error(error);

      return throwError(error);
    }

    const result = new Subject<S>();

    // Otherwise it will run sync.
    // And the result observable is
    // complete before return statement.
    setTimeout(() => {
      if (isObservable(actionResult$)) {
        (actionResult$ as Observable<void>)
          .pipe(take(1),
            map((some) => {
              this.dispatchAfter(action, this.currentState, currentCounter);
              result.next(this.currentState);
              result.complete();
              return some;
            }),
            catchError((error) => {
              const errorState = Store.getErrorState(action, error);
              this.dispatchAfter(action, errorState, currentCounter);
              console.error(error);
              result.error(error);
              return of(error);
            })).subscribe();
      } else {
        this.dispatchAfter(action, this.currentState, currentCounter);
        result.next(this.currentState);
        result.complete();
      }
    });
    return result.asObservable();
  }

  /**
   * Select observable to subscribe to the state.
   *
   * @param key state name to select
   * @param objectComparator optional comparator for advanced state change detection
   */
  select<keyString extends keyof S>(key: keyString, objectComparator?: ObjectComparator): Observable<S[keyString]> {
    return this.selectState(key, undefined, undefined, objectComparator);
  }

  /**
   * Select observable to subscribe to the state.
   *
   * @param key state name to select
   * @param defaultValue default value to return if the state is undefined or null
   * @param objectComparator optional comparator for advanced state change detection
   */
  selectOrDefault<keyString extends keyof S>(key: keyString, defaultValue: S[keyString], objectComparator?: ObjectComparator): Observable<S[keyString]> {
    return this.selectState(key, undefined, defaultValue, objectComparator);
  }

  /**
   * Select observable to subscribe to the state's sub-property. The parameter subPropertyPath is a string representation of the path.
   * For example: if some state identified by 'key1' has property object with name 'prop1', and this object has an array of other objects
   * saved in property 'prop2', and it is the property 'prop3' of the second element (index 1) of the object from array is needed then
   * the subPropertyPath would be: 'prop1/prop2/1/prop3'
   *
   * @param key state name to select the sub-property
   * @param subPropertyPath path to the sub-property of the state
   * @param objectComparator optional comparator for advanced property change detection
   */
  selectSubProperty<keyString extends keyof S, T>(key: keyString, subPropertyPath: string, objectComparator?: ObjectComparator): Observable<T> {
    return this.selectState(key, subPropertyPath, undefined, objectComparator);
  }

  /**
   * Select observable to subscribe to the state's sub-property. The parameter subPropertyPath is a string representation of the path.
   * For example: if some state identified by 'key1' has property object with name 'prop1', and this object has an array of other objects
   * saved in property 'prop2', and it is the property 'prop3' of the second element (index 1) of the object from array is needed then
   * the subPropertyPath would be: 'prop1/prop2/1/prop3'
   *
   * @param key state name to select the sub-property
   * @param subPropertyPath path to the sub-property of the state
   * @param defaultValue default value to return if the property is undefined or null
   * @param objectComparator optional comparator for advanced property change detection
   */
  selectSubPropertyOrDefault<keyString extends keyof S, T>(key: keyString, subPropertyPath: string, defaultValue: T, objectComparator?: ObjectComparator): Observable<T> {
    return this.selectState(key, subPropertyPath, defaultValue, objectComparator);
  }

  /**
   * Select observable to subscribe to the state.
   * The Observable is complete after forward one value.
   *
   * @param key state name to select
   */
  selectOnce<keyString extends keyof S>(key: keyString): Observable<S[keyString]> {
    return this.selectState(key, undefined, undefined, undefined).pipe(take(1));
  }

  /**
   * Select observable to subscribe to the state.
   * The Observable is complete after forward one value.
   *
   * @param key state name to select
   * @param defaultValue default value to return if the state is undefined or null
   */
  selectOnceOrDefault<keyString extends keyof S>(key: keyString, defaultValue: S[keyString]): Observable<S[keyString]> {
    return this.selectState(key, undefined, defaultValue, undefined).pipe(take(1));
  }

  /**
   * Select observable to subscribe to the state's sub-property. The parameter subPropertyPath is a string representation of the path.
   * For example: if some state identified by 'key1' has property object with name 'prop1', and this object has an array of other objects
   * saved in property 'prop2', and it is the property 'prop3' of the second element (index 1) of the object from array is needed then
   * the subPropertyPath would be: 'prop1/prop2/1/prop3'
   * The Observable is complete after forward one value.
   *
   * @param key state name to select the sub-property
   * @param subPropertyPath path to the sub-property of the state
   */
  selectOnceSubProperty<keyString extends keyof S, T>(key: keyString, subPropertyPath: string): Observable<T> {
    return this.selectState(key, subPropertyPath, undefined, undefined).pipe(take(1));
  }

  /**
   * Select observable to subscribe to the state's sub-property. The parameter subPropertyPath is a string representation of the path.
   * For example: if some state identified by 'key1' has property object with name 'prop1', and this object has an array of other objects
   * saved in property 'prop2', and it is the property 'prop3' of the second element (index 1) of the object from array is needed then
   * the subPropertyPath would be: 'prop1/prop2/1/prop3'
   * The Observable is complete after forward one value.
   *
   * @param key state name to select the sub-property
   * @param subPropertyPath path to the sub-property of the state
   * @param defaultValue default value to return if the property is undefined or null
   */
  selectOnceSubPropertyOrDefault<keyString extends keyof S, T>(key: keyString, subPropertyPath: string, defaultValue: T): Observable<T> {
    return this.selectState(key, subPropertyPath, defaultValue, undefined).pipe(take(1));
  }

  private selectState<keyString extends keyof S, T>(key: keyString, subPropertyPath: string, defaultValue: S[keyString] | T, objectComparator: ObjectComparator): Observable<any> {
    const result = this.stateStream.pipe(map(s => this.valueOrDefault(this.getPropertyValue(s[key as string], subPropertyPath), defaultValue)));
    if (objectComparator) {
      return result.pipe(distinctUntilChanged<any>(objectComparator));
    }
    return result.pipe(distinctUntilChanged<any>());
  }

  private getPropertyValue<keyString extends keyof S, T>(target: S[keyString], path: string): T {
    if (!target || !path) {
      return target as T;
    }
    const properties = path.split('/').filter(p => !!p);
    const length = properties.length;
    let currentProp = target as T;
    for (let i = 0; i < length; i++) {
      const p = currentProp?.[properties[i]];
      if (typeof p !== 'undefined') {
        currentProp = p;
      } else {
        return undefined;
      }
    }
    return currentProp;
  }

  private valueOrDefault<T>(value: T, defaultValue: T): T {
    if (value) {
      return value;
    } else if (typeof value === 'string' || typeof value === 'number') {
      return value;
    }
    return defaultValue;
  }

  private getStateContext(): StateContext<S> {
    return {
      getState: () => this.currentState,
      setState: (state) => {
        this.updateState(state);
      },
      patchState: (partOfState) => {
        const isArray = Array.isArray(partOfState);
        const isPrimitive = typeof partOfState !== 'object';
        if (isArray) {
          throw new Error('Patching arrays is not supported.');
        } else if (isPrimitive) {
          throw new Error('Patching primitives is not supported.');
        }
        const newState = StateHelper.combine(this.currentState, partOfState);
        this.updateState(newState);
      }
    };
  }

  private updateState(state: S): void {
    this.currentState = StateHelper.deepFreeze(state);
    this.dispatchState(this.currentState);

    // next-sync. Otherwise, the state change will trigger all other changes.
    setTimeout(() => {
      this.stateStream.next(this.currentState);
    }, 0);
  }

  private dispatchBefore(action: Action, state: any, order: number): void {
    this.plugins.forEach((plugin) => {
      plugin.dispatchBefore(action.Type, state, order);
    });
  }

  private dispatchAfter(action: Action, state: any, order: number): void {
    this.plugins.forEach((plugin) => {
      plugin.dispatchAfter(action.Type, state, order);
    });
  }

  private dispatchState(state: any): void {
    this.plugins.forEach((plugin) => {
      plugin.newState(state);
    });
  }
}
