import { ModuleWithProviders, NgModule } from '@angular/core';
import { StateConfig } from './state/state-config';
import { Store } from './state/store.service';
import { STATE_CONFIG } from './state/state-config.token';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: []
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
export { StateHelper } from './state/state-helper';
export { Store, ObjectComparator } from './state/store.service';
