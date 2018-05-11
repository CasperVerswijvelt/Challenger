import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';
import {  retry } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Challenge } from './challenge/challenge.model';
import { Entry } from './entry/entry.model';
import { Router } from '@angular/router';

@Injectable()
export class ChallengeDataService {
  private readonly _appUrl = '/API/';
  constructor(private Router : Router,private http: HttpClient) {
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
  getUserActivity(id) {
    return this.http
    .get(`${this._appUrl}profile/${id}`);
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
    Observable<Challenge> {
      const theUrl = `${this._appUrl}challenge/${chal.id}/entries`;
      return this.http.post(theUrl, entr).pipe(map(Challenge.fromJSON));
  }

  removeEntry(entry : Entry) {
    console.log(entry)
    return this.http
    .delete(`${this._appUrl}entry/${entry._id}`)
    .pipe(
      map(
        Entry.fromJSON
      )
    );
  }

  removeChallenge(challenge : Challenge) {
    return this.http
    .delete(`${this._appUrl}challenge/${challenge._id}`)
    .pipe(
      map(
        Challenge.fromJSON
      )
    );
  }


}
