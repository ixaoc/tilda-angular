import { TestBed, inject } from '@angular/core/testing';

import { TransformComponentService } from './transform-component.service';

describe('TransformComponentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TransformComponentService]
    });
  });

  it('should be created', inject([TransformComponentService], (service: TransformComponentService) => {
    expect(service).toBeTruthy();
  }));
});
