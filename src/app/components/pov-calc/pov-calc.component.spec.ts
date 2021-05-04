import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PovCalcComponent } from './pov-calc.component';

describe('PovCalcComponent', () => {
  let component: PovCalcComponent;
  let fixture: ComponentFixture<PovCalcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PovCalcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PovCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
