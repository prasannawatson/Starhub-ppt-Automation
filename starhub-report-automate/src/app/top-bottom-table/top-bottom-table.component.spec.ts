import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopBottomTableComponent } from './top-bottom-table.component';

describe('TopBottomTableComponent', () => {
  let component: TopBottomTableComponent;
  let fixture: ComponentFixture<TopBottomTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopBottomTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopBottomTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
