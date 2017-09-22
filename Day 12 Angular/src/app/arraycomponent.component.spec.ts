import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArraycomponentComponent } from './arraycomponent.component';

describe('ArraycomponentComponent', () => {
  let component: ArraycomponentComponent;
  let fixture: ComponentFixture<ArraycomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArraycomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArraycomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
