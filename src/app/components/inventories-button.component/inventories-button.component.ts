import { Component } from '@angular/core';
import { Store } from 'ngx-state-store';
import { AppState } from '../../services/state-store/app-state';
import { ActionFactory, LoadIndicator } from '../../services/state-store/action-factory';
import { catchError, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-inventories-button',
  templateUrl: './inventories-button.component.html',
  styleUrls: ['./inventories-button.component.scss']
})
export class InventoriesButtonComponent {

  lastDownloadAt: string;

  constructor(private store: Store<AppState>,
              private factory: ActionFactory) {
  }

  loadInventory() {
    this.store.dispatch(this.factory.showLoadIndicator(LoadIndicator.LOAD_INVENTORIES)).pipe(
      mergeMap(() => this.store.dispatch(this.factory.loadInventories())),
      catchError(error => {
        console.log(error);
        return of(error);
      })
    ).subscribe((state: AppState) => {
        this.lastDownloadAt = state.LastDownloadAt;
        this.store.dispatch(this.factory.hideLoadIndicator(LoadIndicator.LOAD_INVENTORIES));
      }
    );
  }
}
