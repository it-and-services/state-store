import { Observable } from 'rxjs';
import { StateContext } from './state-context';
import { StateHelper } from './state-helper';

export abstract class Action {

  public get Type(): string {
    return this.actionId;
  }

  constructor(private actionId: string) {
  }

  abstract handleState(stateContext: StateContext<any>): Observable<void> | void;

  protected clone<T>(o: T): T {
    return StateHelper.cloneObject(o);
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
