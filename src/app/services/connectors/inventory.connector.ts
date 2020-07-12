import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Inventory } from '../../models/inventory';
import { delay, mergeMap } from 'rxjs/operators';

@Injectable()
export class InventoryConnector {

  constructor(private http: HttpClient) {
  }

  loadInventory(): Observable<Inventory[]> {
    // delay(2000) to imitate the network throttling
    return this.http.get<Inventory[]>('assets/mock-data/inventories.json').pipe(
      delay(2000),
      mergeMap(inventories => {
        inventories.splice(this.getRandomInt(inventories.length), 1);
        return of(inventories);
      })
    );
  }

  getRandomInt(max): number {
    return Math.floor(Math.random() * Math.floor(max));
  }
}
