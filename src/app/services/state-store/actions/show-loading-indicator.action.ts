import { Action, StateContext } from 'ngx-state-store';
import { ActionIds } from '../action-ids';
import { AppState } from '../app-state';

/**
 * Shows loading indicator to blocks the page, so the user can not
 * use the ui.
 */
export class ShowLoadingIndicatorAction extends Action {

  constructor(private identifier: string) {
    super(ActionIds.ShowLoadingIndicator + ': ' + identifier);
  }

  handleState(stateContext: StateContext<AppState>): void {

    const newState = this.getEmptyState();
    newState.ShowLoadingIndicator = stateContext.getState().ShowLoadingIndicator.slice();
    newState.ShowLoadingIndicator.push(this.identifier);
    stateContext.patchState(newState);
  }
}
