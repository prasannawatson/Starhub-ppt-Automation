import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffSatMtTrComponent } from './staff-sat-mt-tr.component';

describe('StaffSatMtTrComponent', () => {
  let component: StaffSatMtTrComponent;
  let fixture: ComponentFixture<StaffSatMtTrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffSatMtTrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffSatMtTrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
