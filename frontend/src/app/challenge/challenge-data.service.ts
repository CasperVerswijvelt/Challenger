import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Challenge } from './challenge/challenge.model';
import { Entry } from './entry/entry.model';

@Injectable()
export class ChallengeDataService {
  private readonly _appUrl = '/API/';
  constructor(private http: HttpClient) {
  }


  get challenges(): Observable<Challenge[]> {
    return this.http
    .get(`${this._appUrl}challenges/`)
    .pipe(
      map((list: any[]): Challenge[] =>
        list.map(Challenge.fromJSON
        )
      )
    );
  }
  getChallenge(id: string): Observable<Challenge> {
    return this.http
      .get(`${this._appUrl}challenge/${id}`)
      .pipe(map(Challenge.fromJSON));
  }

  newChallengeAdded(challenge:Challenge) {
    return this.http
    .post(`${this._appUrl}challenges/`, challenge)
    .pipe(
      map(
        Challenge.fromJSON
      )
    );
  }

  addEntryToChallenge(entr: Entry, chal: Challenge): 
    Observable<Entry> {
      const theUrl = `${this._appUrl}challenge/${chal.id}/entries`;
      return this.http.post(theUrl, entr).pipe(map(Entry.fromJSON));
  }
}
