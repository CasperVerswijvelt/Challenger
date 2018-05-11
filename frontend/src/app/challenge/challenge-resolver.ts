import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Challenge } from './challenge/challenge.model';
import { Observable } from 'rxjs/Observable';
import { ChallengeDataService } from './challenge-data.service';

@Injectable()
export class ChallengeResolver implements Resolve<Challenge> {
  constructor(private _challengeDataService: ChallengeDataService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Challenge> {
    return this._challengeDataService.getChallenge(route.params['id']);
  }
}