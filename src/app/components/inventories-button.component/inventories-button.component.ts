import { Component } from '@angular/core';
import { Store } from '../../../../projects/ngx-state-store/src/lib/state/store.service';
import { AppState } from '../../services/state-store/app-state';
import { ActionFactory, LoadIndicator } from '../../services/state-store/action-factory';
import { catchError, flatMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-inventories-button',
  templateUrl: './inventories-button.component.html',
  styleUrls: ['./inventories-button.component.scss']
})
export class InventoriesButtonComponent {

  constructor(private store: Store<AppState>,
              private factory: ActionFactory) {
  }

  loadInventory() {
    this.store.dispatch(this.factory.showLoadIndicator(LoadIndicator.LOAD_INVENTORIES)).pipe(
      flatMap(() => this.store.dispatch(this.factory.loadInventories())),
      catchError(error => {
        console.log(error);
        return of(error);
      })
    ).subscribe(() =>
      this.store.dispatch(this.factory.hideLoadIndicator(LoadIndicator.LOAD_INVENTORIES))
    );
  }
}
