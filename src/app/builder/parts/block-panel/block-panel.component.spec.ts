import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockPanelComponent } from './block-panel.component';

describe('BlockPanelComponent', () => {
  let component: BlockPanelComponent;
  let fixture: ComponentFixture<BlockPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
