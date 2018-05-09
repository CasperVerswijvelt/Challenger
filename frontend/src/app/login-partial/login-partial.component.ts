import { Component, OnInit, Input } from '@angular/core';
import { AuthenticationInterceptor } from '../http-interceptors/AuthenticationInterceptor';
import { AuthenticationService } from '../user/authentication.service';

@Component({
  selector: 'app-login-partial',
  templateUrl: './login-partial.component.html',
  styleUrls: ['./login-partial.component.css']
})
export class LoginPartialComponent implements OnInit {

  constructor(private _authService : AuthenticationService) { }

  ngOnInit() {
  }

  get currentUser() {
    return this._authService.user$;
  }

}
