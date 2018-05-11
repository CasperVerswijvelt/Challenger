import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChallengeDataService } from '../challenge-data.service';
import { AuthenticationService } from '../../user/authentication.service';
import { Challenge } from '../challenge/challenge.model';
import { Entry } from '../entry/entry.model';

var _userActivity;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public currentUser;

  constructor(private route: ActivatedRoute, private challengeDataService: ChallengeDataService, private _authService: AuthenticationService) {
    this.route.data.subscribe(item =>
      _userActivity = item['profile']);
    //Manueel alle authors invullen van de activities want die zijn niet mee opgevraagd, is overal toch hetzelfde als de username in bovenste laag van object
    _userActivity.activity.forEach(act => act.activity.author = { "username": _userActivity.username });
    this._authService.user$.subscribe(
      user => this.currentUser = user ? user.toLowerCase() : null
    );
  }

  ngOnInit() {
  }


  get Activity() {
    return _userActivity;
  }

  get aantalChallenges() {
    let aantal: number = 0;
    _userActivity.activity.forEach(element => {
      if (element.type == "challenge")
        aantal++
    });;
    return aantal;
  }

  get aantalEntries() {
    let aantal: number = 0;
    _userActivity.activity.forEach(element => {
      if (element.type == "entry")
        aantal++
    });;
    return aantal;
  }

  deleteChallenge(challenge: Challenge) {
    this.challengeDataService.removeChallenge(challenge).subscribe(
      result => {
        _userActivity.activity = _userActivity.activity.filter(act =>  {
          return act.activity._id != result.id;
        })
        _userActivity.activity.forEach(act => {
          if(typeof act.challenge != 'undefined' && act.challenge.id === result._id)
            act.challenge = null;
        })
        
      }
    );;
  }

  deleteEntry(entry: Entry) {
    this.challengeDataService.removeEntry(entry).subscribe(
      result => {
        _userActivity.activity = _userActivity.activity.filter(act =>  {
          return act.activity._id != result.id;
        })
        
      }
      
    );
  }




}
