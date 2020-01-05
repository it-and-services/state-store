import { Component } from '@angular/core';
import { AppState } from '../../services/state-store/app-state';
import { ActionFactory } from '../../services/state-store/action-factory';
import { Store } from 'ngx-state-store';

@Component({
  selector: 'app-counter-button',
  templateUrl: './counter-button.component.html',
  styleUrls: ['./counter-button.component.scss']
})
export class CounterButtonComponent {

  constructor(private store: Store<AppState>,
              private factory: ActionFactory) {
  }

  incrementCounter() {
    this.store.dispatch(this.factory.incrementCounter());
  }
}
