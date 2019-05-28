import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { S7Component } from './s1.component';

describe('S7Component', () => {
  let component: S7Component;
  let fixture: ComponentFixture<S7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(S7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
