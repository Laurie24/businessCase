import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GererGarageComponent } from './gerer-garage.component';

describe('GererGarageComponent', () => {
  let component: GererGarageComponent;
  let fixture: ComponentFixture<GererGarageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GererGarageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GererGarageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
