import { TestBed, inject } from '@angular/core/testing';

import { ChallengeDataService } from './challenge-data.service';

describe('ChallengeDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChallengeDataService]
    });
  });

  it('should be created', inject([ChallengeDataService], (service: ChallengeDataService) => {
    expect(service).toBeTruthy();
  }));
});
