import { AsyncPipe } from '@angular/common';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from 'ngx-state-store';
import { AppState } from '../../services/state-store/app-state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  imports: [
    AsyncPipe
  ],
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  counter$: Observable<number>;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.counter$ = this.store.select('Counter');
  }
}
