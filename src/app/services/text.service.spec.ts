import { TestBed } from '@angular/core/testing';

import { TextArrayService } from './text.service';

describe('TextServiceService', () => {
  let service: TextArrayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TextArrayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
