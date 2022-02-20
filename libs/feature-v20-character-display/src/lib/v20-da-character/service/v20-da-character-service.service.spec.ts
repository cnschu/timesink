import { TestBed } from '@angular/core/testing';

import { V20DaCharacterService } from './v20-da-character.service';

describe('V20DaCharacterServiceService', () => {
  let service: V20DaCharacterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(V20DaCharacterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
