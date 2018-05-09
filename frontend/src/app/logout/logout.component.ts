import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../user/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private _authService : AuthenticationService , private router: Router,) { }

  ngOnInit() {
  }

  logout() {
    this._authService.logout();
    this.router.navigate(['/home']);
  }

}
