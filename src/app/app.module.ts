import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { AppInitialState } from './services/state-store/initial-state';
import { NgxStateStoreModule } from '../../projects/ngx-state-store/src/lib/ngx-state-store.module';
import { TopAreaContainerComponent } from './components/top-area.component/top-area.component';
import { BottomAreaContainerComponent } from './components/bottom-area.component/bottom-area.component';
import { ActionFactory } from './services/state-store/action-factory';

@NgModule({
  declarations: [
    AppComponent,
    TopAreaContainerComponent,
    BottomAreaContainerComponent
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
  providers: [ActionFactory],
  bootstrap: [AppComponent]
})
export class AppModule {
}
