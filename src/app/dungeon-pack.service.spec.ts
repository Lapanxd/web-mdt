import { TestBed } from '@angular/core/testing';

import { DungeonPackService } from './dungeon-pack.service';

describe('DungeonPackService', () => {
  let service: DungeonPackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DungeonPackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
