import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { AppInitialState } from './services/state-store/app-initial-state';
import { CounterButtonComponent } from './components/counter-button.component/counter-button.component';
import { CounterComponent } from './components/counter.component/counter.component';
import { ActionFactory } from './services/state-store/action-factory';
import { InventoryConnector } from './services/connectors/inventory.connector';
import { HttpClientModule } from '@angular/common/http';
import { InventoriesButtonComponent } from './components/inventories-button.component/inventories-button.component';
import { InventoriesComponent } from './components/inventories.component/inventories.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxStateStoreModule } from 'ngx-state-store';

@NgModule({
  declarations: [
    AppComponent,
    CounterButtonComponent,
    CounterComponent,
    InventoriesButtonComponent,
    InventoriesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    NgxStateStoreModule.forRoot({
      storeName: 'store-demo',
      log: environment.state.log,
      timekeeping: environment.state.timekeeping,
      initialState: AppInitialState
    }),
  ],
  providers: [ActionFactory, InventoryConnector],
  bootstrap: [AppComponent]
})
export class AppModule {
}
