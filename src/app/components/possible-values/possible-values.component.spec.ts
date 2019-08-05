import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PossibleValuesComponent } from './possible-values.component';

describe('PossibleValuesComponent', () => {
  let component: PossibleValuesComponent;
  let fixture: ComponentFixture<PossibleValuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PossibleValuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PossibleValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
