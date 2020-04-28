import { Action, StateContext } from 'ngx-state-store';
import { ActionIds } from '../action-ids';
import { AppState } from '../app-state';
import { InventoryConnector } from '../../connectors/inventory.connector';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export class LoadInventoriesAction extends Action {

  constructor(private inventoryConnector: InventoryConnector) {
    super(ActionIds.LoadInventories);
  }

  handleState(stateContext: StateContext<AppState>): Observable<any> {
    return this.inventoryConnector.loadInventory()
      .pipe(
        tap(inventories => {
          const newState: AppState = this.getEmptyState();
          newState.Inventories = inventories;
          newState.LastDownloadAt = (new Date()).toISOString();
          stateContext.patchState(newState);
        })
      );
  }
}
