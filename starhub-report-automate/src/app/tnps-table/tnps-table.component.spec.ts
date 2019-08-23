import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TNPSTableComponent } from './tnps-table.component';

describe('TNPSTableComponent', () => {
  let component: TNPSTableComponent;
  let fixture: ComponentFixture<TNPSTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TNPSTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TNPSTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
