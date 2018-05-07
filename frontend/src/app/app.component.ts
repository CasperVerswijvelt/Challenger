import { Component, Input, OnInit } from '@angular/core';
import { ChallengeDataService } from './challenge/challenge-data.service';
import { Challenge } from './challenge/challenge/challenge.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent implements OnInit {
  title = 'Challenger';
  private _challenges :Challenge[];
  ngOnInit(): void {
  }
  

  constructor() {
  }

  get challenges() {
    return this._challenges;
  }

  newChallengeAdded(challenge: Challenge) {
  }
}
