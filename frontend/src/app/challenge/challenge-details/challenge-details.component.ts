import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Challenge } from '../challenge/challenge.model';
import { ChallengeDataService } from '../challenge-data.service';

@Component({
  selector: 'app-challenge-details',
  templateUrl: './challenge-details.component.html',
  styleUrls: ['./challenge-details.component.css']
})
export class ChallengeDetailsComponent implements OnInit {
  private _challenge : Challenge;

  constructor(private route: ActivatedRoute,private challengeDataService: ChallengeDataService) {
    this.route.data.subscribe(item => 
      this._challenge = item['challenge']);
  }

  get challenge() {
    return this._challenge;
  }

  ngOnInit() {
  }

}
