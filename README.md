# StateStore
Sample application for the ngx-state-store module usage demonstration.

ngx-state-store simple state management module for the angular applications.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.21.

## Usage description of the ngx-state-store module

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

###### 6. To subscribe to the some state use `store.select(...)`.
Example: src/app/components/counter.component/counter.component.ts

        export class CounterComponent implements OnInit {
        
          counter$: Observable<number>;
        
          constructor(private store: Store<AppState>) {
          }
        
          ngOnInit(): void {
            this.counter$ = this.store.select('Counter');
          }
        }

## More complex use case with the back-end call
For the more complex use case with the back-end call refer to the source code:

* src/app/components/inventories-button.component/inventories-button.component.ts
* src/app/components/inventories.component/inventories.component.ts
* src/app/services/state-store/actions/load-inventories.action.ts
* src/app/services/connectors/inventory.connector.ts

The objects returned from the `store.select(...)` are frozen (read only) by the `StateHelper.deepFreeze(any)`. Use `StateHelper.cloneObject(any)`
to get a clone of the frozen object.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running the application

Run `ng serve` to start the app. The app is available at [http://localhost:4200/](http://localhost:4200/).

## Publish ngx-state-store module

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
