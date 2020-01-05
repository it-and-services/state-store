import { Component, OnInit } from '@angular/core';
import { Store } from '../../../../projects/ngx-state-store/src/lib/state/store.service';
import { AppState } from '../../services/state-store/app-state';
import { Inventory } from '../../models/inventory';
import { Observable, of } from 'rxjs';
import { flatMap } from 'rxjs/operators';
import { LoadIndicator } from '../../services/state-store/action-factory';

@Component({
  selector: 'app-inventories',
  templateUrl: './inventories.component.html',
  styleUrls: ['./inventories.component.scss']
})
export class InventoriesComponent implements OnInit {

  inventories: Inventory[];
  loading$: Observable<boolean>;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.loading$ = this.store.select('ShowLoadingIndicator').pipe(
      flatMap(indicators => of(indicators.filter(i => i === LoadIndicator.LOAD_INVENTORIES).length > 0))
    );
    this.store.select('Inventories').subscribe(inventories => {
      this.inventories = inventories;
    });
  }
}
