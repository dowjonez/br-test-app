import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LunchContainerComponent } from './lunch-container.component';

describe('LunchContainerComponent', () => {
  let component: LunchContainerComponent;
  let fixture: ComponentFixture<LunchContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LunchContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LunchContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
