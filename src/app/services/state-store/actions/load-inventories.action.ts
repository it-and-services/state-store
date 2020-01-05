import { StateContext } from '../../../../../projects/ngx-state-store/src/lib/state/state-context';
import { Action } from '../../../../../projects/ngx-state-store/src/lib/state/action';
import { ActionIds } from '../action-ids';
import { AppState } from '../app-state';
import { InventoryConnector } from '../../connectors/inventory.connector';
import { Observable, of } from 'rxjs';
import { delay, flatMap } from 'rxjs/operators';

export class LoadInventoriesAction extends Action {

  constructor(private inventoryConnector: InventoryConnector) {
    super(ActionIds.LoadInventories);
  }

  handleState(stateContext: StateContext<AppState>): Observable<any> {
    return this.inventoryConnector.loadInventory()
      .pipe(
        delay(2000),
        flatMap(inventories => {
          const newState: AppState = this.getEmptyState();
          newState.Inventories = inventories;
          stateContext.patchState(newState);
          return of(inventories);
        })
      );
  }
}
