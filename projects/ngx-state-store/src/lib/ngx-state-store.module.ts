import { ModuleWithProviders, NgModule } from '@angular/core';
import { NgxStateStoreComponent } from './ngx-state-store.component';
import { StateConfig } from './state/state-config';
import { Store } from './state/store.service';
import { STATE_CONFIG } from './state/state-config.token';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [NgxStateStoreComponent],
  imports: [
    CommonModule
  ],
  exports: [NgxStateStoreComponent]
})
export class NgxStateStoreModule {

  static forRoot(config: StateConfig): ModuleWithProviders {
    return {
      ngModule: NgxStateStoreModule,
      providers: [
        Store,
        {provide: STATE_CONFIG, useValue: config}
      ]
    };
  }
}

export { Action } from './state/action';
export { StateConfig } from './state/state-config';
export { StateContext } from './state/state-context';
export { Store } from './state/store.service';
export { StateHelper } from './state/state-helper';
