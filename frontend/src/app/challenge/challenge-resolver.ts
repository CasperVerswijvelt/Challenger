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
  constructor(private recipeService: ChallengeDataService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Challenge> {
    return this.recipeService.getChallenge(route.params['id']);
  }
}