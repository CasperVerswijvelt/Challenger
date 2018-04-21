import { Component, Input, OnInit } from '@angular/core';
import { ChallengeDataService } from './challenge-data.service';
import { Challenge } from './challenge/challenge.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ChallengeDataService]
})
export class AppComponent implements OnInit {
  title = 'Challenger';
  private _challenges :Challenge[];
  ngOnInit(): void {
    this._challengeDataService.challenges.subscribe(
      items => this._challenges = items);
  }
  

  constructor(private _challengeDataService: ChallengeDataService) {

  }

  get challenges() {
    return this._challenges;
  }

  newChallengeAdded(challenge: Challenge) {
    this._challengeDataService.newChallengeAdded(challenge).subscribe(item => this._challenges.push(item));

  }
}
