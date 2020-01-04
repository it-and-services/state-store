import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '../../../../projects/ngx-state-store/src/lib/state/store.service';
import { AppState } from '../../services/state-store/app-state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-bottom-area-component',
  templateUrl: './bottom-area.component.html',
  styleUrls: ['./bottom-area.component.scss']
})
export class BottomAreaContainerComponent implements OnInit, OnDestroy {

  private counter$: Observable<number>;

  get counter() {
    return this.counter$;
  }

  constructor(private store: Store<AppState>) {
  }

  ngOnDestroy(): void {
  }

  ngOnInit(): void {
    this.counter$ = this.store.select('Counter');
  }
}
