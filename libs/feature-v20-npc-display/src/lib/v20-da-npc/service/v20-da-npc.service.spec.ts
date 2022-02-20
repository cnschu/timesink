import { TestBed } from '@angular/core/testing';

import { V20DaNpcService } from './v20-da-npc.service';

describe('V20DaNpcService', () => {
  let service: V20DaNpcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(V20DaNpcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
