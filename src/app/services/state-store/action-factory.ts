import { Injectable } from '@angular/core';
import { HideLoadingIndicatorAction, IncrementCounterAction, LoadInventoriesAction, ShowLoadingIndicatorAction } from './actions';
import { Action } from '../../../../projects/ngx-state-store/src/lib/state/action';
import { InventoryConnector } from '../connectors/inventory.connector';

export enum LoadIndicator {
  DEFAULT = 'DEFAULT',
  LOAD_INVENTORIES = 'LOAD_INVENTORIES'
}

@Injectable()
export class ActionFactory {

  constructor(private inventoryConnector: InventoryConnector) {
  }

  incrementCounter(): Action {
    return new IncrementCounterAction();
  }

  showLoadIndicator(identifier: string = LoadIndicator.DEFAULT): Action {
    return new ShowLoadingIndicatorAction(identifier);
  }

  hideLoadIndicator(identifier: string = LoadIndicator.DEFAULT): Action {
    return new HideLoadingIndicatorAction(identifier);
  }

  loadInventories(): Action {
    return new LoadInventoriesAction(this.inventoryConnector);
  }
}
