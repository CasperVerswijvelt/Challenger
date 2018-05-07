import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Challenge } from './challenge/challenge.model';
import { Entry } from './entry/entry.model';

@Injectable()
export class ChallengeDataService {
  private readonly _appUrl = '/API/challenges/';
  constructor(private http: HttpClient) {
  }


  get challenges(): Observable<Challenge[]> {
    return this.http
    .get(this._appUrl)
    .pipe(
      map((list: any[]): Challenge[] =>
        list.map(Challenge.fromJSON
        )
      )
    );
  }
  getChallenge(id: string): Observable<Challenge> {
    return this.http
      .get(`/API/challenge/${id}`)
      .pipe(map(Challenge.fromJSON));
  }

  newChallengeAdded(challenge:Challenge) {
    return this.http
    .post(this._appUrl, challenge)
    .pipe(
      map(
        (item: any): Challenge =>
          new Challenge(item.name, item.description, item.created)
      )
    );
  }

  addEntryToChallenge(entr: Entry, chal: Challenge): 
    Observable<Entry> {
      const theUrl = `${this._appUrl}/challenge/${chal.id}/entries`;
      return this.http.post(theUrl, entr).pipe(map(Entry.fromJSON));
  }
}
