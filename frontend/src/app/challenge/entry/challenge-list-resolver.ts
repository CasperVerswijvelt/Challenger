import { Challenge } from "../challenge/challenge.model";
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { ChallengeDataService } from "../challenge-data.service";

@Injectable()
export class ChallengeListResolver implements Resolve<Challenge[]> {

    constructor(private challengeDataService: ChallengeDataService) {}
    resolve(route: ActivatedRouteSnapshot, 
            state: RouterStateSnapshot): Challenge[] | Observable<Challenge[]> | Promise<Challenge[]> {
                return this.challengeDataService.challenges;
    }
}