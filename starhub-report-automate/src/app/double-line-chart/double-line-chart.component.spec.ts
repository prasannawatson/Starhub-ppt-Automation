import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubleLineChartComponent } from './double-line-chart.component';

describe('DoubleLineChartComponent', () => {
  let component: DoubleLineChartComponent;
  let fixture: ComponentFixture<DoubleLineChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoubleLineChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoubleLineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
