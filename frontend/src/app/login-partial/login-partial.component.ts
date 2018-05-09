import { Component, OnInit, Input } from '@angular/core';
import { AuthenticationInterceptor } from '../http-interceptors/AuthenticationInterceptor';
import { AuthenticationService } from '../user/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-partial',
  templateUrl: './login-partial.component.html',
  styleUrls: ['./login-partial.component.css']
})
export class LoginPartialComponent implements OnInit {

  constructor(private router: Router, private _authService: AuthenticationService) { }

  ngOnInit() {
  }

  get currentUser() {
    return this._authService.user$;
  }

  naarLogin() {
    if (this.router.url !== "/login")
      this._authService.redirectUrl = this.router.url;
    this.router.navigateByUrl("/login");
  }

}
