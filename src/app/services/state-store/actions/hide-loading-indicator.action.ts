import { Action, StateContext } from 'ngx-state-store/lib/ngx-state-store.module';
import { ActionIds } from '../action-ids';
import { AppState } from '../app-state';

/**
 * Hide loading indicator which block the page.
 */
export class HideLoadingIndicatorAction extends Action {

  constructor(private identifier: string) {
    super(ActionIds.HideLoadingIndicator + ': ' + identifier);
  }

  handleState(stateContext: StateContext<AppState>): void {

    if (stateContext.getState().ShowLoadingIndicator == null) {
      return;
    }

    const index = stateContext.getState().ShowLoadingIndicator.indexOf(this.identifier);

    if (index < 0) {
      return;
    }

    const newState: AppState = this.getEmptyState();
    newState.ShowLoadingIndicator = stateContext.getState().ShowLoadingIndicator.slice();
    newState.ShowLoadingIndicator.splice(index, 1);
    stateContext.patchState(newState);
  }
}
