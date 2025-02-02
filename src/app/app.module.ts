import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxStateStoreModule } from 'ngx-state-store';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { CounterButtonComponent } from './components/counter-button.component/counter-button.component';
import { CounterComponent } from './components/counter.component/counter.component';
import { InventoriesButtonComponent } from './components/inventories-button.component/inventories-button.component';
import { InventoriesComponent } from './components/inventories.component/inventories.component';
import { InventoryConnector } from './services/connectors/inventory.connector';
import { ActionFactory } from './services/state-store/action-factory';
import { AppInitialState } from './services/state-store/app-initial-state';

@NgModule({
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    NgxStateStoreModule.forRoot({
      storeName: 'store-demo',
      log: environment.state.log,
      timekeeping: environment.state.timekeeping,
      initialState: AppInitialState
    }),
    CounterButtonComponent,
    CounterComponent,
    InventoriesButtonComponent,
    InventoriesComponent
  ], providers: [ActionFactory, InventoryConnector, provideHttpClient(withInterceptorsFromDi())]
})
export class AppModule {
}
