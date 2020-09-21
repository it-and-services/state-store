# ngx-state-store
ngx-state-store is the state management module for the angular applications starting from the angular version >= 7.2.0

## state-store
Sample application for the ngx-state-store module usage features demonstration.  
The sample application solely concentrated on the ngx-state-store usage features.  

IT IS NOT ABOUT THE ARCHITECTURE OF AN APPLICATION.   

Sourcecode examples are available at [https://github.com/it-and-services/state-store](https://github.com/it-and-services/state-store).

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.0.

##### Content:
[1. Usage description of the ngx-state-store module.](#1-usage-description-of-the-ngx-state-store-module)  
[2. More complex use case with the back-end call.](#2-more-complex-use-case-with-the-back-end-call)  
[3. API overview.](#3-api-overview)  
<a href="https://it-and-services.github.io/state-store/app.html" title="StateStore App example" target="_blank">4. StateStore App example.</a>  

### 1. Usage description of the ngx-state-store module.

##### 1.1. Create a state object.
Example: src/app/services/state-store/app-state.ts

```typescript
export class AppState {
  Counter: number;
}
```

##### 1.2. Create an initial state object.
Example: src/app/services/state-store/app-initial-state.ts

```typescript
import { AppState } from './app-state';

export const AppInitialState: AppState = {
  Counter: 0
};
```

##### 1.3. Register the NgxStateStoreModule in src/app/app.module.ts

```typescript
// ...
import { NgModule } from '@angular/core';
import { AppInitialState } from './services/state-store/app-initial-state';
import { NgxStateStoreModule } from 'ngx-state-store';
// ...

@NgModule({
  declarations: [
    // ...
  ],
  imports: [
    // ...
    NgxStateStoreModule.forRoot({
      storeName: 'store-demo',
      log: true,
      timekeeping: true,
      initialState: AppInitialState
    }),
    // ...
  ],
  // ...
})

export class AppModule {
    // ...
}
```

At run time you can access the store in the debug console by the path `window['ngx-state-store']['store-demo']`

##### 1.4. Create an action.
Example: src/app/services/state-store/actions/increment-counter.action.ts  
Example: src/app/services/state-store/action-ids.ts

```typescript
import { Action, StateContext } from 'ngx-state-store';
import { ActionIds } from '../action-ids';
import { AppState } from '../app-state';

export class IncrementCounterAction extends Action {

  constructor() {
    super(ActionIds.UpdateCounter);
  }

  handleState(stateContext: StateContext<AppState>): void {
    const newValue = this.getEmptyState();
    newValue.Counter = stateContext.getState().Counter + 1;
    stateContext.patchState(newValue);
  }
}
```
```typescript
export enum ActionIds {
    UpdateCounter = '[Common] update counter'
}
```

The ids, like one above - `[Common] update counter`, will be displayed in the console log output

##### 1.5. Create an action factory.
Example: src/app/services/state-store/action-factory.ts

```typescript
import { Injectable } from '@angular/core';
import { Action } from 'ngx-state-store';
import { IncrementCounterAction } from './actions/increment-counter.action';

@Injectable()
export class ActionFactory {

  incrementCounter(): Action {
    return new IncrementCounterAction();
  }
}
```

##### 1.6. To update the state call the `store.dispatch(...)`.
Example: src/app/components/counter-button.component/counter-button.component.ts

```typescript
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
```

##### 1.7. To subscribe to some state use `store.select(...)`.
Example: src/app/components/counter.component/counter.component.ts

```typescript
import { Component, OnInit } from '@angular/core';
import { Store } from 'ngx-state-store';
import { AppState } from '../../services/state-store/app-state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
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
```

The `select(...)` method returns an Observable.

### 2. More complex use case with the back-end call.

For the more complex use case with the back-end call refer to the source code:

* src/app/components/inventories-button.component/inventories-button.component.ts
* src/app/components/inventories.component/inventories.component.ts
* src/app/services/state-store/actions/load-inventories.action.ts
* src/app/services/connectors/inventory.connector.ts

##### 2.1. Extend the state object.
Example: src/app/services/state-store/app-state.ts  
Example: src/app/models/inventory.ts

```typescript
import { Inventory } from '../../models/inventory';

export class AppState {
  ShowLoadingIndicator: string[];
  Counter: number;
  Inventories: Inventory[];
  // iso Date string
  LastDownloadAt: string;
}
```
```typescript
export class Inventory {
  id: number;
  version: string;
  name: string;
}
```

##### 2.2. Extend the initial state object.
Example: src/app/services/state-store/app-initial-state.ts

```typescript
import { AppState } from './app-state';

export const AppInitialState: AppState = {
  ShowLoadingIndicator: [],
  Counter: 0,
  Inventories: null,
  LastDownloadAt: ''
};
```

##### 2.3. Create new actions.
Example: src/app/services/state-store/actions/show-loading-indicator.action.ts  
Example: src/app/services/state-store/actions/hide-loading-indicator.action.ts  
Example: src/app/services/state-store/actions/load-inventories.action.ts

```typescript
import { Action, StateContext } from 'ngx-state-store';
import { ActionIds } from '../action-ids';
import { AppState } from '../app-state';

export class ShowLoadingIndicatorAction extends Action {

  constructor(private identifier: string) {
    super(ActionIds.ShowLoadingIndicator + ': ' + identifier);
  }

  handleState(stateContext: StateContext<AppState>): void {
    const newState = this.getEmptyState();
    newState.ShowLoadingIndicator
        = stateContext.getState().ShowLoadingIndicator.slice();
    newState.ShowLoadingIndicator.push(this.identifier);
    stateContext.patchState(newState);
  }
}
```
```typescript
import { Action, StateContext } from 'ngx-state-store';
import { ActionIds } from '../action-ids';
import { AppState } from '../app-state';

export class HideLoadingIndicatorAction extends Action {

  constructor(private identifier: string) {
    super(ActionIds.HideLoadingIndicator + ': ' + identifier);
  }

  handleState(stateContext: StateContext<AppState>): void {
    if (stateContext.getState().ShowLoadingIndicator == null) {
      return;
    }

    const index = stateContext.getState()
                    .ShowLoadingIndicator.indexOf(this.identifier);
    if (index < 0) {
      return;
    }

    const newState: AppState = this.getEmptyState();
    newState.ShowLoadingIndicator
        = stateContext.getState().ShowLoadingIndicator.slice();
    newState.ShowLoadingIndicator.splice(index, 1);
    stateContext.patchState(newState);
  }
}
```
```typescript
import { Action, StateContext } from 'ngx-state-store';
import { ActionIds } from '../action-ids';
import { AppState } from '../app-state';
import { InventoryConnector } from '../../connectors/inventory.connector';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export class LoadInventoriesAction extends Action {

  constructor(private inventoryConnector: InventoryConnector) {
    super(ActionIds.LoadInventories);
  }

  handleState(stateContext: StateContext<AppState>): Observable<any> {
    return this.inventoryConnector.loadInventory()
      .pipe(
        tap(inventories => {
          const newState: AppState = this.getEmptyState();
          newState.Inventories = inventories;
          newState.LastDownloadAt = (new Date()).toISOString();
          stateContext.patchState(newState);
        })
      );
  }
}
```

##### 2.4. Extend the action factory and create the connector.
Example: src/app/services/state-store/action-factory.ts  
Example: src/app/services/connectors/inventory.connector.ts

```typescript
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Inventory } from '../../models/inventory';
import { delay } from 'rxjs/operators';

@Injectable()
export class InventoryConnector {

  constructor(private http: HttpClient) {
  }

  loadInventory(): Observable<Inventory[]> {
    // delay(2000) to imitate the network throttling
    return this.http.get<Inventory[]>('assets/mock-data/inventories.json')
                    .pipe(delay(2000));
  }
}
```
```typescript
import { Injectable } from '@angular/core';
import { Action } from 'ngx-state-store';
import { ShowLoadingIndicatorAction } from './actions/show-loading-indicator.action';
import { IncrementCounterAction } from './actions/increment-counter.action';
import { HideLoadingIndicatorAction } from './actions/hide-loading-indicator.action';
import { LoadInventoriesAction } from './actions/load-inventories.action';
import { InventoryConnector } from '../connectors/inventory.connector';

export enum LoadIndicator {
  DEFAULT = 'DEFAULT',
  LOAD_INVENTORIES = 'LOAD_INVENTORIES'
}

@Injectable()
export class ActionFactory {

  constructor(private inventoryConnector: InventoryConnector) {
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

  loadInventories(): Action {
    return new LoadInventoriesAction(this.inventoryConnector);
  }
}
```

##### 2.5. To load the data from back-end and update the states call the `store.dispatch(...)`.
Example: src/app/components/inventories-button.component/inventories-button.component.ts  

```typescript
import { Component, OnInit } from '@angular/core';
import { Store } from 'ngx-state-store';
import { AppState } from '../../services/state-store/app-state';
import { ActionFactory, LoadIndicator } from '../../services/state-store/action-factory';
import { catchError, flatMap, skip } from 'rxjs/operators';
import { of } from 'rxjs';
import { Inventory } from '../../models/inventory';

export interface Changes {
  addedEntries: Inventory[];
  removedEntries: Inventory[];
}

@Component({
  selector: 'app-inventories-button',
  templateUrl: './inventories-button.component.html',
  styleUrls: ['./inventories-button.component.scss']
})
export class InventoriesButtonComponent implements OnInit {

  lastDownloadAt: string;
  changes: Changes = {addedEntries: [], removedEntries: []} as Changes;

  constructor(private store: Store<AppState>,
              private factory: ActionFactory) {
  }

  ngOnInit(): void {
    this.store.select('Inventories',
      (oldInventories: Inventory[], newInventories: Inventory[]) => {
        if (oldInventories === newInventories
          || oldInventories && newInventories
          && !this.calcDiff(oldInventories, newInventories).length
          && !this.calcDiff(newInventories, oldInventories).length) {
          return true;
        }
        this.changes.addedEntries = this.calcDiff(oldInventories, newInventories);
        this.changes.removedEntries = this.calcDiff(newInventories, oldInventories);
        return false;
      }).pipe(skip(1))
      .subscribe(() => {
        console.log('the log is present only if there are some changes');
      });
  }

  private calcDiff(source: Inventory[], target: Inventory[]): Inventory[] {
    return (target || []).filter(t => !(source || []).find(s => s.id === t.id));
  }

  loadInventory() {
    this.changes.addedEntries = [];
    this.changes.removedEntries = [];
    this.store.dispatch(
        this.factory.showLoadIndicator(LoadIndicator.LOAD_INVENTORIES))
        .pipe(
            flatMap(() => this.store.dispatch(this.factory.loadInventories())),
            catchError(error => {
                console.log(error);
                return of(error);
            })
        ).subscribe((state: AppState) => {
            this.lastDownloadAt = state.LastDownloadAt;
            this.store.dispatch(this.factory.hideLoadIndicator(LoadIndicator.LOAD_INVENTORIES));
          }
        );
  }

  inventoriesToString(inventories: Inventory[]): string {
    return inventories.map(e => e.id).toString();
  }
}
```

##### 2.6. To subscribe to the new states use `store.select(...)`.
Example: src/app/components/inventories.component/inventories.component.ts

```typescript
import { Component, OnInit } from '@angular/core';
import { Store } from 'ngx-state-store';
import { AppState } from '../../services/state-store/app-state';
import { Inventory } from '../../models/inventory';
import { Observable, of } from 'rxjs';
import { flatMap } from 'rxjs/operators';
import { LoadIndicator } from '../../services/state-store/action-factory';

@Component({
  selector: 'app-inventories',
  templateUrl: './inventories.component.html',
  styleUrls: ['./inventories.component.scss']
})
export class InventoriesComponent implements OnInit {

  inventories: Inventory[];
  loading$: Observable<boolean>;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.loading$ = this.store.select('ShowLoadingIndicator').pipe(
      flatMap(indicators =>
        of(indicators.filter(i => i === LoadIndicator.LOAD_INVENTORIES).length > 0))
    );
    this.store.select('Inventories').subscribe(inventories => {
      this.inventories = inventories;
    });
  }
}
```

The observables returned from the `store.select(...)` return a frozen (read only)
state objects that were frozen by the `StateHelper.deepFreeze(any)`.
Use `StateHelper.cloneObject(any, cloneFunctions = true)` to get a clone of the frozen object including functions (default) if it is needed.

Keep in mind that all objects passed to the state store will be frozen.  

### 3. API overview.

##### 3.1. Store.

- `select(string, ObjectComparator?): Observable<any>` - select some state of the state store, `ObjectComparator` is
 optional, can be used to implement more advanced comparison of the potential changes. It is also convenient way
 to only subscribe to some property/properties changes of some state object.
- `selectOnce(string): Observable<any>` - the same as `select` but the Observable is complete after forward one value
- `dispatch(action: Action): Observable<state: S>` - dispatch the Action that changes some state, the dispatch function
 always returns an Observable of your state

**Tip**: you could join many dispatch calls in a pipe and have access to the last state change from the previous call,
         in this case your actions must do your changes of the state by returning an Observable,
         the return value of the Observable does not have any meaning, just use `return of(null);` from rxjs, or operator function `tap((x: T) => void)`  
         see example: `inventories-button.component.ts` and `load-inventories.action.ts`  
         in the example `load-inventories.action.ts` the access to the `<state: S>` is in the subscription.

*Pseudo code example:*
```typescript
this.store.dispatch(<some action>)
  .pipe(
    flatMap((state: S) => {
      // ... read and use data from the state
      return this.store.dispatch(<another action>);
    }),
    flatMap((state: S) => {
      // ... read and use data from the state
      return this.store.dispatch(<another action 2>);
    })
  ).subscribe((state: S) => {
    // ... read and use data from the state
  });
```

##### 3.1.1. ObjectComparator.

`export type ObjectComparator = (oldObject: any, newObject: any) => boolean;` - is a function.  
The ObjectComparator can be used by `Store#select(string, ObjectComparator?): Observable<any>` as second parameter.
By the ObjectComparator you may implement more advanced comparison of the potential changes.

The method must return `true` if there are no changes you are interested in. For example the property/properties of some state object
was/were not changed.


*Pseudo code example:*
```typescript
this.store.select('<some state>', (oldObjectState: any, newObjectState: any) => {
    // here you can compare if the value of some property was changed
    if (oldObjectState === newObjectState || oldObjectState && newObjectState
            && oldObjectState['someProperty'] === newObjectState['someProperty']) {
       // nothing changed
       return true;
    }
    
    // someProperty of the state object was changed
    return false;
  }).subscribe((state: S) => {
    // ... do somethig if the newObjectState partly changed
  });
```

##### 3.2. StateHelper.

- `static deepFreeze<T>(o: T): T` - freezes the object, the object is read only after the call
- `static cloneObject<T>(o: T, cloneFunctions = true): T` - creates a clone of the object including functions (default), it is useful if the object was frozen by the `deepFreeze`

##### 3.3. StateContext.

- `getState(): S` - returns the whole current state
- `patchState(val: Partial<S>)` - patch the existing state with the provided value
- `setState(state: S)` - reset the whole state to a new value

##### 3.4. Action.

- `abstract handleState(stateContext: StateContext<any>): Observable<any> | void` - it must be implemented by the user
- `clone<T>(o: T, cloneFunctions = true): T` - clone the object including functions (default), the same as `StateHelper.cloneObject(o, cloneFunctions = true)`

## Build the application

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running the development server

Run `ng serve` to start the app. The app is available at [http://localhost:4200/](http://localhost:4200/).

## License
[MIT](https://choosealicense.com/licenses/mit/)
