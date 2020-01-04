import { StateContext } from '../../../../../projects/ngx-state-store/src/lib/state/state-context';
import { Action } from '../../../../../projects/ngx-state-store/src/lib/state/action';
import { ActionIds } from '../action-ids';
import { AppState } from '../app-state';

export class IncrementCounterAction extends Action {

  constructor() {
    super(ActionIds.UpdateCounter);
  }

  handleState(stateContext: StateContext<AppState>): void {
    const newValue = this.getEmptyState();
    newValue.Counter = stateContext.getState().Counter + 1;
    stateContext.patchState(newValue);
  }
}
