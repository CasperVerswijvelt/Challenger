import { Component, Input, OnInit } from '@angular/core';
import { ChallengeDataService } from './challenge/challenge-data.service';
import { Challenge } from './challenge/challenge/challenge.model';
import { AuthenticationService } from './user/authentication.service';
declare var $: any;

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
    $(document).ready(function () {
      $(".navbar-collapse.collapse.show a").click(function(event) {
        $(".navbar-collapse").collapse('hide');
      });
      $("*").click(function(event) {
        $(".navbar-collapse").collapse('hide');
      });
      
    });
  }
  public isMenuCollapse:boolean = true;;

  constructor(private _authService: AuthenticationService) {
  }

  get challenges() {
    return this._challenges;
  }

  get currentUser() {
    return this._authService.user$;
  }
}
