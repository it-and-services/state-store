import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from 'ngx-state-store';
import { AppComponent } from './app.component';
import { of } from 'rxjs';
import { CounterButtonComponent } from './components/counter-button.component/counter-button.component';
import { CounterComponent } from './components/counter.component/counter.component';
import { InventoriesButtonComponent } from './components/inventories-button.component/inventories-button.component';
import { InventoriesComponent } from './components/inventories.component/inventories.component';
import { ActionFactory } from './services/state-store/action-factory';

describe('Component: AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let hostComponent: AppComponent;
  let storeMock: any;
  let actionFactory: any;
  beforeEach(() => {
    storeMock = jasmine.createSpyObj('AppState', ['dispatch', 'select']);
    storeMock.dispatch.and.callFake(() => {
      return {
        subscribe: () => {
        }
      };
    });
    actionFactory = jasmine.createSpyObj('ActionFactory', ['showLoadIndicator', 'hideLoadIndicator']);
    actionFactory.showLoadIndicator.and.callFake(() => {
      return of([]);
    });
    actionFactory.hideLoadIndicator.and.callFake(() => {
      return of([]);
    });
    TestBed.configureTestingModule({
      declarations: [AppComponent,
        CounterButtonComponent,
        CounterComponent,
        InventoriesButtonComponent,
        InventoriesComponent],
      providers: [
        {provide: Store, useValue: storeMock},
        {provide: ActionFactory, useValue: actionFactory}],
      imports: []
    });

    fixture = TestBed.createComponent(AppComponent);
    hostComponent = fixture.componentInstance;
  });

  it('should have a defined component', () => {
    expect(hostComponent).toBeDefined();
  });
});

