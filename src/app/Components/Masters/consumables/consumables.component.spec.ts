import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumablesComponent } from './consumables.component';

describe('ConsumablesComponent', () => {
  let component: ConsumablesComponent;
  let fixture: ComponentFixture<ConsumablesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsumablesComponent]
    });
    fixture = TestBed.createComponent(ConsumablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
