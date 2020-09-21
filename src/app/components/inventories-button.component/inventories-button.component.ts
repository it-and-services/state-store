import { Component, OnInit } from '@angular/core';
import { Store } from 'ngx-state-store';
import { AppState } from '../../services/state-store/app-state';
import { ActionFactory, LoadIndicator } from '../../services/state-store/action-factory';
import { catchError, mergeMap, skip } from 'rxjs/operators';
import { of } from 'rxjs';
import { Inventory } from '../../models/inventory';

export interface Changes {
  addedEntries: Inventory[];
  removedEntries: Inventory[];
}

@Component({
  selector: 'app-inventories-button',
  templateUrl: './inventories-button.component.html',
  styleUrls: ['./inventories-button.component.scss']
})
export class InventoriesButtonComponent implements OnInit {

  lastDownloadAt: string;
  changes: Changes = {addedEntries: [], removedEntries: []} as Changes;

  constructor(private store: Store<AppState>,
              private factory: ActionFactory) {
  }

  ngOnInit(): void {
    this.store.select('Inventories',
      (oldInventories: Inventory[], newInventories: Inventory[]) => {
        if (oldInventories === newInventories
          || oldInventories && newInventories
          && !this.calcDiff(oldInventories, newInventories).length
          && !this.calcDiff(newInventories, oldInventories).length) {
          return true;
        }
        this.changes.addedEntries = this.calcDiff(oldInventories, newInventories);
        this.changes.removedEntries = this.calcDiff(newInventories, oldInventories);
        return false;
      }).pipe(skip(1))
      .subscribe(() => {
        console.log('the log is present only if there are some changes');
      });
  }

  private calcDiff(source: Inventory[], target: Inventory[]): Inventory[] {
    return (target || []).filter(t => !(source || []).find(s => s.id === t.id));
  }

  loadInventory() {
    this.changes.addedEntries = [];
    this.changes.removedEntries = [];
    this.store.dispatch(this.factory.showLoadIndicator(LoadIndicator.LOAD_INVENTORIES))
      .pipe(
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

  inventoriesToString(inventories: Inventory[]): string {
    return inventories.map(e => e.id).join(', ');
  }
}
