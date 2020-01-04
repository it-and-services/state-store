import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '../../../../projects/ngx-state-store/src/lib/state/store.service';
import { AppState } from '../../services/state-store/app-state';
import { ActionFactory } from '../../services/state-store/action-factory';

@Component({
  selector: 'app-top-area-component',
  templateUrl: './top-area.component.html',
  styleUrls: ['./top-area.component.scss']
})
export class TopAreaContainerComponent implements OnInit, OnDestroy {

  constructor(private store: Store<AppState>,
              private factory: ActionFactory) {
  }

  ngOnDestroy(): void {
  }

  ngOnInit(): void {
  }

  incrementCounter() {
    this.store.dispatch(this.factory.incrementCounter());
  }
}
