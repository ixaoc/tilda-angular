import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultPanelComponent } from './default-panel.component';

describe('DefaultPanelComponent', () => {
  let component: DefaultPanelComponent;
  let fixture: ComponentFixture<DefaultPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
