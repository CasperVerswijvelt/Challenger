import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChallengeDataService } from '../challenge-data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  private _userActivity;

  constructor(private route: ActivatedRoute, private challengeDataService: ChallengeDataService) {
    this.route.data.subscribe(item =>
      this._userActivity = item['profile']);
  }

  ngOnInit() {
  }


  get Activity() {
    return this._userActivity;
  }

  get aantalChallenges() {
    let aantal: number = 0;
    this._userActivity.activity.forEach(element => {
      if (element.type == "challenge")
        aantal++
    });;
    return aantal;
  }

  get aantalEntries() {
    let aantal: number = 0;
    this._userActivity.activity.forEach(element => {
      if (element.type == "entry")
        aantal++
    });;
    return aantal;
  }

}
