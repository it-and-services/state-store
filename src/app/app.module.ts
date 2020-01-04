import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { NgxStateStoreModule } from 'ngx-state-store/lib/ngx-state-store.module';
import { AppInitialState } from './services/state-store/initial-state';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxStateStoreModule.forRoot({
      appName: 'NgxStateStoreDemo',
      log: environment.state.log,
      timekeeping: environment.state.timekeeping,
      initialState: AppInitialState
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
