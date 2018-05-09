import { Component, Input, OnInit } from '@angular/core';
import { ChallengeDataService } from './challenge/challenge-data.service';
import { Challenge } from './challenge/challenge/challenge.model';
import { AuthenticationService } from './user/authentication.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent implements OnInit {
  title = 'Challenger';
  private _challenges: Challenge[];
  ngOnInit(): void {
  }


  constructor(private _authService: AuthenticationService) {
  }

  get challenges() {
    return this._challenges;
  }

  get currentUser() {
    return this._authService.user$;
  }
}
