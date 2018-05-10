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
export class ProfileResolver implements Resolve<Object> {
  constructor(private _challengeDataService: ChallengeDataService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Object> {
    return this._challengeDataService.getUserActivity(route.params['id']);
  }
}