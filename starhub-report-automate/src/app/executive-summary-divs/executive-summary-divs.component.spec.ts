import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecutiveSummaryDivsComponent } from './executive-summary-divs.component';

describe('ExecutiveSummaryDivsComponent', () => {
  let component: ExecutiveSummaryDivsComponent;
  let fixture: ComponentFixture<ExecutiveSummaryDivsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExecutiveSummaryDivsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExecutiveSummaryDivsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
