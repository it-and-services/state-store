import { fakeAsync, flushMicrotasks, inject, TestBed, tick } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { Action } from './action';
import { STATE_CONFIG } from './state-config.token';
import { StateContext } from './state-context';
import { StateHelper } from './state-helper';
import { Store } from './store.service';

describe('Store', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Store, {provide: STATE_CONFIG, useValue: {storeName: 'test', log: true, timekeeping: true, initialState: {count: 0}}}]
    });
  });
  it('initial state',
    fakeAsync(inject([Store], (store: Store<any>) => {
      let count = -1;
      store.selectOnce('count').subscribe(c => count = c);
      flushMicrotasks();
      expect(count).toBe(0);
    })));
  it('dispatch action',
    fakeAsync(inject([Store], (store: Store<any>) => {
      store.dispatch({
        handleState(stateContext: StateContext<any>): Observable<void> | void {
          stateContext.patchState({count: 1});
        }
      } as Action).subscribe();
      flushMicrotasks();
      tick(1);
      let count = -1;
      store.select('count').subscribe(c => count = c);
      flushMicrotasks();
      expect(count).toBe(1);
    })));
});

