import { fakeAsync, flushMicrotasks, inject, TestBed, tick } from '@angular/core/testing';
import { defer, Observable, of } from 'rxjs';
import { Action } from './action';
import { STATE_CONFIG } from './state-config.token';
import { StateContext } from './state-context';
import { ObjectComparator, Store } from './store.service';
import { catchError, mergeMap, tap } from 'rxjs/operators';
import { StateConfig } from './state-config';

describe('Store', () => {
  describe('with initial state', () => {
    const INITIAL_STATE = {
      count: 0,
      complexObject: {
        prop: {
          prop2: [
            {
              prop3: 'value3',
              prop4: '',
              prop5: 0
            }
          ]
        }
      }
    };
    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [Store, {
          provide: STATE_CONFIG, useValue: {
            storeName: 'test', log: true, timekeeping: true,
            initialState: INITIAL_STATE
          }
        }]
      });
    });

    it('select initial state',
      fakeAsync(inject([Store], (store: Store<any>) => {
        let count = -1;
        store.selectOnce('count').subscribe(c => count = c);
        flushMicrotasks();
        expect(count).toBe(0);
      })));

    it('select initial state with default value',
      fakeAsync(inject([Store], (store: Store<any>) => {
        let value3 = null;
        store.selectOnceOrDefault('count', 3).subscribe(c => value3 = c);
        flushMicrotasks();
        expect(value3).toBe(0);
      })));

    it('select initial state by path',
      fakeAsync(inject([Store], (store: Store<any>) => {
        let value3 = null;
        store.selectOnceSubProperty('complexObject', 'prop/prop2/0/prop3').subscribe(c => value3 = c);
        let value4 = null;
        store.selectOnceSubProperty('complexObject', 'prop/prop2/0/prop4').subscribe(c => value4 = c);
        let value5 = null;
        store.selectOnceSubProperty('complexObject', 'prop/prop2/0/prop5').subscribe(c => value5 = c);
        flushMicrotasks();
        expect(value3).toBe('value3');
        expect(value4).toBe('');
        expect(value5).toBe(0);
      })));

    it('select initial state by path with default value',
      fakeAsync(inject([Store], (store: Store<any>) => {
        let value3 = null;
        store.selectOnceSubPropertyOrDefault('complexObject', 'prop/prop2/0/prop3', null).subscribe(c => value3 = c);
        let value4 = null;
        store.selectOnceSubPropertyOrDefault('complexObject', 'prop/prop2/0/prop4', null).subscribe(c => value4 = c);
        let value5 = null;
        store.selectOnceSubPropertyOrDefault('complexObject', 'prop/prop2/0/prop5', null).subscribe(c => value5 = c);
        flushMicrotasks();
        expect(value3).toBe('value3');
        expect(value4).toBe('');
        expect(value5).toBe(0);
      })));

    it('select initial state by invalid path with default value',
      fakeAsync(inject([Store], (store: Store<any>) => {
        let value3 = null;
        store.selectOnceSubPropertyOrDefault('complexObject', 'prop/prop2/1/prop3', 'value3').subscribe(c => value3 = c);
        let value4 = null;
        store.selectOnceSubPropertyOrDefault('complexObject', 'prop/prop2/1/prop4', '').subscribe(c => value4 = c);
        let value5 = null;
        store.selectOnceSubPropertyOrDefault('complexObject', 'prop/prop2/1/prop5', 0).subscribe(c => value5 = c);
        flushMicrotasks();
        expect(value3).toBe('value3');
        expect(value4).toBe('');
        expect(value5).toBe(0);
      })));

    it('dispatch action and select',
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

    it('dispatch action and select with default',
      fakeAsync(inject([Store], (store: Store<any>) => {
        store.dispatch({
          handleState(stateContext: StateContext<any>): Observable<void> | void {
            stateContext.patchState({count: 1});
          }
        } as Action).subscribe();
        flushMicrotasks();
        tick(1);
        let count = -1;
        store.selectOrDefault('count', 3).subscribe(c => count = c);
        flushMicrotasks();
        expect(count).toBe(1);
      })));

    it('dispatch action and select sub-property',
      fakeAsync(inject([Store], (store: Store<any>) => {
        store.dispatch({
          handleState(stateContext: StateContext<any>): Observable<void> | void {
            stateContext.patchState({count: 1});
          }
        } as Action).subscribe();
        flushMicrotasks();
        tick(1);
        let count = -1;
        store.selectSubProperty('count', null).subscribe((c: number) => count = c);
        flushMicrotasks();
        expect(count).toBe(1);
      })));

    it('dispatch action and select sub-property with default',
      fakeAsync(inject([Store], (store: Store<any>) => {
        store.dispatch({
          handleState(stateContext: StateContext<any>): Observable<void> | void {
            stateContext.patchState({count: 1});
          }
        } as Action).subscribe();
        flushMicrotasks();
        tick(1);
        let count = -1;
        store.selectSubPropertyOrDefault('count', null, 3).subscribe(c => count = c);
        flushMicrotasks();
        expect(count).toBe(1);
      })));

    it('dispatch action with observable',
      fakeAsync(inject([Store], (store: Store<any>) => {
        store.dispatch({
          handleState(stateContext: StateContext<any>): Observable<any> {
            stateContext.patchState({count: 1});
            return of(null);
          }
        } as Action).subscribe();
        flushMicrotasks();
        tick(1);
        let count = -1;
        store.select('count').subscribe(c => count = c);
        flushMicrotasks();
        expect(count).toBe(1);
      })));

    it('throw by the dispatch action with observable',
      fakeAsync(inject([Store], (store: Store<any>) => {
        let error;
        store.dispatch({
          handleState(stateContext: StateContext<any>): Observable<void> | void {
            return defer(() => {
              throw new Error('some error');
            });
          }
        } as Action).pipe(
          catchError(err => {
            error = err;
            return of(err);
          })
        ).subscribe();
        flushMicrotasks();
        tick(1);
        flushMicrotasks();
        expect(error).toBeTruthy();
        expect(error.message).toBe('some error');
      })));

    it('update state',
      fakeAsync(inject([Store], (store: Store<any>) => {
        let initialState;
        store.dispatch({
          handleState(stateContext: StateContext<any>): Observable<void> | void {
            initialState = stateContext.getState();
            stateContext.setState({count2: 2});
          }
        } as Action).subscribe();
        flushMicrotasks();
        tick(1);
        let count = -1;
        let count2 = -1;
        expect(initialState).toEqual(INITIAL_STATE);
        store.select('count').subscribe(c => count = c);
        store.select('count2').subscribe(c => count2 = c);
        flushMicrotasks();
        expect(count).toBeUndefined();
        expect(count2).toBe(2);
      })));

    it('throw by the dispatch',
      fakeAsync(inject([Store], (store: Store<any>) => {
        let error;
        store.dispatch({
          handleState(stateContext: StateContext<any>): Observable<void> | void {
            throw new Error('some error');
          }
        } as Action).pipe(
          catchError(err => {
            error = err;
            return of(err);
          })
        ).subscribe();
        flushMicrotasks();
        expect(error).toBeTruthy();
        expect(error.message).toBe('some error');
      })));

    it('throw by patch with an array',
      fakeAsync(inject([Store], (store: Store<any>) => {
        let error;
        store.dispatch({
          handleState(stateContext: StateContext<any>): Observable<void> | void {
            stateContext.patchState([]);
          }
        } as Action).pipe(
          catchError(err => {
            error = err;
            return of(err);
          })
        ).subscribe();
        flushMicrotasks();
        expect(error).toBeTruthy();
        expect(error.message).toBe('Patching arrays is not supported.');
      })));

    it('throw by patch with some primitive',
      fakeAsync(inject([Store], (store: Store<any>) => {
        let error;
        store.dispatch({
          handleState(stateContext: StateContext<any>): Observable<void> | void {
            stateContext.patchState(1 as any);
          }
        } as Action).pipe(
          catchError(err => {
            error = err;
            return of(err);
          })
        ).subscribe();
        flushMicrotasks();
        expect(error).toBeTruthy();
        expect(error.message).toBe('Patching primitives is not supported.');
      })));
  });

  describe('without initial state', () => {
    beforeEach(() => {
      const storeConfig: StateConfig = {storeName: 'test'} as StateConfig;
      TestBed.configureTestingModule({
        providers: [Store, {provide: STATE_CONFIG, useValue: {storeName: 'test'}}]
      });
    });

    it('empty state',
      fakeAsync(inject([Store], (store: Store<any>) => {
        let initialState;
        store.dispatch({
          handleState(stateContext: StateContext<any>): Observable<void> | void {
            initialState = stateContext.getState();
            stateContext.patchState({count: 1});
          }
        } as Action).subscribe();
        flushMicrotasks();
        tick(1);
        let count = -1;
        store.select('count').subscribe(c => count = c);
        flushMicrotasks();
        expect(initialState).toEqual({});
        expect(count).toBe(1);
      })));
  });

  describe('state change subscription with ObjectComparator;', () => {
    // react only if the prop2 changed
    const objectComparator: ObjectComparator = (a, b) => {
      return !a && !b || a && b && a.prop2 === b.prop2;
    };

    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [Store, {
          provide: STATE_CONFIG, useValue: {
            storeName: 'test', log: true, timekeeping: true,
            initialState: {complexObject: {prop: 'prop - value', prop2: 'prop2 - value'}}
          }
        }]
      });
    });

    it('no state change emitted;',
      fakeAsync(inject([Store], (store: Store<any>) => {

        let complexObject;
        store.select('complexObject', objectComparator).subscribe(c => {
          complexObject = c;
        });

        // update prop
        store.dispatch({
          handleState(stateContext: StateContext<any>): Observable<void> | void {
            stateContext.patchState({complexObject: {prop: 'prop - value2', prop2: 'prop2 - value'}});
          }
        } as Action).subscribe();
        flushMicrotasks();
        tick(1);

        expect(complexObject.prop).toBe('prop - value', 'no reaction expected on prop change');
        expect(complexObject.prop2).toBe('prop2 - value', 'no reaction expected on prop change');
      })));

    it('state change emitted;',
      fakeAsync(inject([Store], (store: Store<any>) => {

        let complexObject;
        store.select('complexObject', objectComparator).subscribe(c => {
          complexObject = c;
        });

        // update prop
        store.dispatch({
          handleState(stateContext: StateContext<any>): Observable<void> | void {
            stateContext.patchState({complexObject: {prop: 'prop - value', prop2: 'prop2 - value2'}});
          }
        } as Action).subscribe();
        flushMicrotasks();
        tick(1);

        expect(complexObject.prop).toBe('prop - value', 'reaction expected on prop2 change');
        expect(complexObject.prop2).toBe('prop2 - value2', 'reaction expected on prop2 change');
      })));

  });

  describe('dispatch, pipe and select', () => {
    let store: Store<any>;
    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [Store, {
          provide: STATE_CONFIG,
          useValue: {initialState: {Counter: 0}} // initial Counter = 0
        }]
      });
      store = TestBed.inject(Store);
    });

    it('selecting stale state by subscribe to dispatch', (done) => {
      of(null)
        .pipe(
          mergeMap(() => store.dispatch({
            handleState(stateContext: StateContext<any>): Observable<void> {

              expect(stateContext.getState().Counter).toBe(0); // initial - Counter = 0

              return of(null)
                .pipe(
                  tap(() => {
                    stateContext.patchState({Counter: 1}); // patch state - Counter = 1
                  })
                );
            }
          } as Action)),
          mergeMap((newState) => store.dispatch({
            handleState(stateContext: StateContext<any>): Observable<void> {

              // the returned state from dispatch is always new state - Counter = 1
              expect(newState.Counter).toBe(1); // new state - Counter = 1

              // the state of the stateContext is also new state - Counter = 1
              expect(stateContext.getState().Counter).toBe(1); // new state - Counter = 1

              return of(null)
                .pipe(
                  tap(() => {
                    stateContext.patchState({Counter: 2}); // patch state - Counter = 2
                  })
                );
            }
          } as Action))
        )
        .subscribe(newState => {

          // the returned state from dispatch is always new state - Counter = 2
          expect(newState.Counter).toBe(2); // new state - Counter = 2

          // the returned state from selectOnce is stale state - Counter = 1
          store.selectOnce('Counter').subscribe((staleCounterValue) => {
            expect(staleCounterValue).toBe(1); // stale state - Counter = 1
            done();
          });
        });
    });
  });
});

