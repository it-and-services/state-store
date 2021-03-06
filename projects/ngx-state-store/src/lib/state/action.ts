import { Observable } from 'rxjs';
import { StateContext } from './state-context';
import { StateHelper } from './state-helper';

export abstract class Action {

  public get Type(): string {
    return this.actionId;
  }

  protected constructor(private actionId: string) {
  }

  abstract handleState(stateContext: StateContext<any>): Observable<void> | void;

  protected clone<T>(o: T, cloneFunctions = true): T {
    return StateHelper.cloneObject(o, cloneFunctions);
  }

  protected getEmptyState(): any {
    return StateHelper.getEmptyObject();
  }

  protected getEmptyObject<T>(): T {
    return StateHelper.getEmptyObject();
  }

  protected combine<S>(state: S, newValue: Partial<S>): S {
    return StateHelper.combine(state, newValue);
  }
}
