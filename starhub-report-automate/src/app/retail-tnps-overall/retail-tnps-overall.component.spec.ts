import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailTnpsOverallComponent } from './retail-tnps-overall.component';

describe('RetailTnpsOverallComponent', () => {
  let component: RetailTnpsOverallComponent;
  let fixture: ComponentFixture<RetailTnpsOverallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetailTnpsOverallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetailTnpsOverallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
