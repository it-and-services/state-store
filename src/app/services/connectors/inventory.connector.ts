import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Inventory } from '../../models/inventory';

@Injectable()
export class InventoryConnector {

  constructor(private http: HttpClient) {
  }

  loadInventory(): Observable<Inventory[]> {
    return this.http.get<Inventory[]>('assets/mock-data/inventories.json');
  }
}
