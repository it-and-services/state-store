import { Injectable } from '@angular/core';
import { HideLoadingIndicatorAction, IncrementCounterAction, ShowLoadingIndicatorAction } from './actions';
import { Action } from '../../../../projects/ngx-state-store/src/lib/state/action';

export enum LoadIndicator {
  TRANSPARENT = 'TRANSPARENT',
  DEFAULT = 'DEFAULT'
}

@Injectable()
export class ActionFactory {

  constructor() {
  }

  incrementCounter(): Action {
    return new IncrementCounterAction();
  }

  showLoadIndicator(identifier: string = LoadIndicator.DEFAULT): Action {
    return new ShowLoadingIndicatorAction(identifier);
  }

  hideLoadIndicator(identifier: string = LoadIndicator.DEFAULT): Action {
    return new HideLoadingIndicatorAction(identifier);
  }

}
