import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxStateStoreComponent } from './ngx-state-store.component';

describe('NgxStateStoreComponent', () => {
  let component: NgxStateStoreComponent;
  let fixture: ComponentFixture<NgxStateStoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxStateStoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxStateStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
