# ngx-state-store
ngx-state-store is the state management module for the angular applications starting from the angular version >= 7.2.0

## state-store
Sample application for the ngx-state-store module usage demonstration.  
Sourcecode is available at [https://github.com/it-and-services/state-store](https://github.com/it-and-services/state-store).

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.21.

#### Usage description of the ngx-state-store module

###### 1. Create state object.
Example: src/app/services/state-store/app-state.ts
        
        export class AppState {
          Counter: number;
        }

###### 2. Create initial state object.
Example: src/app/services/state-store/app-initial-state.ts
        
        import { AppState } from './app-state';
        
        export const AppInitialState: AppState = {
          Counter: 0
        };
        
###### 3. Register NgxStateStoreModule in src/app/app.module.ts

        @NgModule({
          declarations: [
            ...
          ],
          imports: [
            ...
            NgxStateStoreModule.forRoot({
              storeName: 'store-demo',
              log: true,
              timekeeping: true,
              initialState: AppInitialState
            }),
            ...
          ],
          ...
        })
        export class AppModule {
            ...
        }

At run time you can access the store in the debug console by the path `window['ngx-state-store']['store-demo']`

###### 4. Create an action.
Example: src/app/services/state-store/actions/increment-counter.action.ts and action-ids.ts  
Example: src/app/services/state-store/action-ids.ts

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

        export enum ActionIds {
            UpdateCounter = '[Common] update counter'
        }

###### 5. Create an action factory.
Example: src/app/services/state-store/action-factory.ts

        @Injectable()
        export class ActionFactory {
        
          incrementCounter(): Action {
            return new IncrementCounterAction();
          }
        }

###### 6. To update a state call the `store.dispatch(...)`.
Example: src/app/components/counter-button.component/counter-button.component.ts

        export class CounterButtonComponent {
        
          constructor(private store: Store<AppState>,
                      private factory: ActionFactory) {
          }
        
          incrementCounter() {
            this.store.dispatch(this.factory.incrementCounter());
          }
        }

###### 7. To subscribe to the some state use `store.select(...)`.
Example: src/app/components/counter.component/counter.component.ts

        export class CounterComponent implements OnInit {
        
          counter$: Observable<number>;
        
          constructor(private store: Store<AppState>) {
          }
        
          ngOnInit(): void {
            this.counter$ = this.store.select('Counter');
          }
        }

#### More complex use case with the back-end call
For the more complex use case with the back-end call refer to the source code:

* src/app/components/inventories-button.component/inventories-button.component.ts
* src/app/components/inventories.component/inventories.component.ts
* src/app/services/state-store/actions/load-inventories.action.ts
* src/app/services/connectors/inventory.connector.ts

###### 1. Extend state object.
Example: src/app/services/state-store/app-state.ts  
Example: src/app/models/inventory.ts

        export class AppState {
          ShowLoadingIndicator: string[];
          Counter: number;
          Inventories: Inventory[];
        }

        export class Inventory {
          id: number;
          version: string;
          name: string;
        }

###### 2. Extend initial state object.
Example: src/app/services/state-store/app-initial-state.ts

        export const AppInitialState: AppState = {
          ShowLoadingIndicator: [],
          Counter: 0,
          Inventories: null
        };

###### 3. Create new actions.
Example: src/app/services/state-store/actions/show-loading-indicator.action.ts  
Example: src/app/services/state-store/actions/hide-loading-indicator.action.ts  
Example: src/app/services/state-store/actions/load-inventories.action.ts

        export class ShowLoadingIndicatorAction extends Action {
        
          constructor(private identifier: string) {
            super(ActionIds.ShowLoadingIndicator + ': ' + identifier);
          }
        
          handleState(stateContext: StateContext<AppState>): void {
        
            const newState = this.getEmptyState();
            newState.ShowLoadingIndicator = stateContext.getState().ShowLoadingIndicator.slice();
            newState.ShowLoadingIndicator.push(this.identifier);
            stateContext.patchState(newState);
          }
        }

        export class HideLoadingIndicatorAction extends Action {
        
          constructor(private identifier: string) {
            super(ActionIds.HideLoadingIndicator + ': ' + identifier);
          }
        
          handleState(stateContext: StateContext<AppState>): void {
        
            if (stateContext.getState().ShowLoadingIndicator == null) {
              return;
            }
        
            const index = stateContext.getState().ShowLoadingIndicator.indexOf(this.identifier);
        
            if (index < 0) {
              return;
            }
        
            const newState: AppState = this.getEmptyState();
            newState.ShowLoadingIndicator = stateContext.getState().ShowLoadingIndicator.slice();
            newState.ShowLoadingIndicator.splice(index, 1);
            stateContext.patchState(newState);
          }
        }

        export class LoadInventoriesAction extends Action {
        
          constructor(private inventoryConnector: InventoryConnector) {
            super(ActionIds.LoadInventories);
          }
        
          handleState(stateContext: StateContext<AppState>): Observable<any> {
            return this.inventoryConnector.loadInventory()
              .pipe(
                flatMap(inventories => {
                  const newState: AppState = this.getEmptyState();
                  newState.Inventories = inventories;
                  stateContext.patchState(newState);
                  return of(inventories);
                })
              );
          }
        }

###### 4. Extend the action factory.
Example: src/app/services/state-store/action-factory.ts

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

###### 5. To load the data from back-end and update the states call the `store.dispatch(...)`.
Example: src/app/components/inventories-button.component/inventories-button.component.ts  
Example: src/app/services/connectors/inventory.connector.ts

        export class InventoriesButtonComponent {
        
          constructor(private store: Store<AppState>,
                      private factory: ActionFactory) {
          }
        
          loadInventory() {
            this.store.dispatch(this.factory.showLoadIndicator(LoadIndicator.LOAD_INVENTORIES)).pipe(
              flatMap(() => this.store.dispatch(this.factory.loadInventories())),
              catchError(error => {
                console.log(error);
                return of(error);
              })
            ).subscribe(() =>
              this.store.dispatch(this.factory.hideLoadIndicator(LoadIndicator.LOAD_INVENTORIES))
            );
          }
        }

        export class InventoryConnector {
        
          constructor(private http: HttpClient) {
          }
        
          loadInventory(): Observable<Inventory[]> {
            // delay(2000) to imitate the network throttling
            return this.http.get<Inventory[]>('assets/mock-data/inventories.json').pipe(delay(2000));
          }
        }

###### 6. To subscribe to the new states use `store.select(...)`.
Example: src/app/components/inventories.component/inventories.component.ts

        export class InventoriesComponent implements OnInit {
        
          inventories: Inventory[];
          loading$: Observable<boolean>;
        
          constructor(private store: Store<AppState>) {
          }
        
          ngOnInit(): void {
            this.loading$ = this.store.select('ShowLoadingIndicator').pipe(
              flatMap(indicators => of(indicators.filter(i => i === LoadIndicator.LOAD_INVENTORIES).length > 0))
            );
            this.store.select('Inventories').subscribe(inventories => {
              this.inventories = inventories;
            });
          }
        }

The observables returned from the `store.select(...)` return frozen (read only)
state objects that were frozen by the `StateHelper.deepFreeze(any)`.  
Use `StateHelper.cloneObject(any)` to get a clone of the frozen object if it is needed.

## Build the application

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running the application

Run `ng serve` to start the app. The app is available at [http://localhost:4200/](http://localhost:4200/).

## Build and publish ngx-state-store module

Execute the following:

         $ make your changes   
         $ increase state-store/projects/ngx-state-store/package.json version
         $ describe the release in the ChangeLog file
         $ npm install 
         $ ng test ngx-state-store
         $ npm run build:release
         $ git add/commit
         $ git tag v0.1.0       # adjust version here
         $ git push origin state-store
         $ git push --tags
         $ npm publish dist/ngx-state-store

## License
[MIT](https://choosealicense.com/licenses/mit/)
