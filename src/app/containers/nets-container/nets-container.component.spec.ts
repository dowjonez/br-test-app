import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NetsContainerComponent } from './nets-container.component';

describe('NetsContainerComponent', () => {
  let component: NetsContainerComponent;
  let fixture: ComponentFixture<NetsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NetsContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
