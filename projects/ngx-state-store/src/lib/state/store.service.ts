import { Inject, Injectable } from '@angular/core';
import { distinctUntilChanged, pluck, take } from 'rxjs/operators';
import { Action } from './action';
import { StateContext } from './state-context';
import { StateHelper } from './state-helper';
import { StoreLogPlugin } from './store-log-plugin';
import { StorePlugin } from './store-plugin';
import { StateConfig } from './state-config';
import { STATE_CONFIG } from './state-config.token';
import { StorePerformancePlugin } from './store-performance-plugin';
import { BehaviorSubject, Observable, Subject, throwError } from 'rxjs';

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
    const currentCounter = ++this.actionCounter;
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
      if (actionResult$ == null) {
        this.dispatchAfter(action, this.currentState, currentCounter);
        result.next(this.currentState);
        result.complete();
      } else {
        (actionResult$ as Observable<void>)
          .pipe(take(1)).subscribe(
          () => {
            this.dispatchAfter(action, this.currentState, currentCounter);
            result.next(this.currentState);
            result.complete();
          }, (error) => {
            const errorState = Store.getErrorState(action, error);
            this.dispatchAfter(action, errorState, currentCounter);
            console.error(error);
            result.error(error);
          });
      }
    });
    return result.asObservable();
  }

  select<keyString extends keyof S>(prop: keyString, objectComparator?: ObjectComparator): Observable<S[keyString]> {
    if (objectComparator) {
      return this.stateStream.pipe(pluck(prop as string), distinctUntilChanged<any>(objectComparator));
    }
    return this.stateStream.pipe(pluck(prop as string), distinctUntilChanged<any>());
  }

  /**
   * The Observable is complete after forward one value.
   *
   * @param prop property to select
   */
  selectOnce<keyString extends keyof S>(prop: keyString): Observable<S[keyString]> {
    return this.select(prop).pipe(take(1));
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

  private updateState(state: S) {
    this.currentState = StateHelper.deepFreeze(state);
    this.dispatchState(this.currentState);

    // next-sync. Otherwise the state change will trigger all other changes.
    setTimeout(() => {
      this.stateStream.next(this.currentState);
    }, 0);
  }

  private dispatchBefore(action: Action, state: any, order: number) {
    this.plugins.forEach((plugin) => {
      plugin.dispatchBefore(action.Type, state, order);
    });
  }

  private dispatchAfter(action: Action, state: any, order: number) {
    this.plugins.forEach((plugin) => {
      plugin.dispatchAfter(action.Type, state, order);
    });
  }

  private dispatchState(state: any) {
    this.plugins.forEach((plugin) => {
      plugin.newState(state);
    });
  }
}
