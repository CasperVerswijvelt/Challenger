import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Challenge } from '../challenge/challenge.model';
import { ChallengeDataService } from '../challenge-data.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-challenge-details',
  templateUrl: './challenge-details.component.html',
  styleUrls: ['./challenge-details.component.css']
})
export class ChallengeDetailsComponent implements OnInit {
  private _challenge : Challenge;
  private entryForm : FormBuilder;
  public errorMsg : string;

  constructor(private route: ActivatedRoute,private challengeDataService: ChallengeDataService) {
    this.route.data.subscribe(item => 
      this._challenge = item['challenge']);
  }

  get challenge() {
    return this._challenge;
  }

  ngOnInit() {
  }


  addEntry(entry) {
        this.challengeDataService.addEntryToChallenge(entry, this.challenge).subscribe(
      suc=> { 
        this._challenge = suc;
      },
      error => {
        this.errorMsg = `Error ${error.status} while adding
          challenge for ${Challenge.name}: ${error.error}`;
      }
    );
  }



}
