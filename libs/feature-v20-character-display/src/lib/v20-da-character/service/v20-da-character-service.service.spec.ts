import { TestBed } from '@angular/core/testing';

import { V20DaCharacterServiceService } from './v20-da-character-service.service';

describe('V20DaCharacterServiceService', () => {
  let service: V20DaCharacterServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(V20DaCharacterServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
