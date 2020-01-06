import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Inventory } from '../../models/inventory';
import { delay } from 'rxjs/operators';

@Injectable()
export class InventoryConnector {

  constructor(private http: HttpClient) {
  }

  loadInventory(): Observable<Inventory[]> {
    // delay(2000) to imitate the network throttling
    return this.http.get<Inventory[]>('assets/mock-data/inventories.json').pipe(delay(2000));
  }
}
