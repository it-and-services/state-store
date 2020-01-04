# StateStore
Sample application for the ngx-state-store module usage demonstration.

ngx-state-store simple state management module for the angular applications.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.21.

## Usage description of the ngx-state-store module

###### Create state object, for example: app-state.ts

        
        export class AppState {
          ShowLoadingIndicator: string[];
          Counter: number;
        }
        
###### Create initial state object, for example: initial-state.ts
        
        import { AppState } from './app-state';
        
        export const AppInitialState: AppState = {
          ShowLoadingIndicator: [],
          Counter: 0
        };
        
###### Edit app.module.ts


        @NgModule({
          declarations: [
            ...
          ],
          imports: [
            ...
            NgxStateStoreModule.forRoot({
              appName: 'NgxStateStoreDemo',
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

TODO: continue

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
