import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthenticationService } from './authentication.service';
import { AuthGuardService } from './auth-guard.service';
import { BaseUrlInterceptor } from '../http-interceptors/base-url.interceptors';
import { httpInterceptors } from '../http-interceptors';
import { LogoutComponent } from '../logout/logout.component';
import { LoginPartialComponent } from '../login-partial/login-partial.component';

const routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent }

];
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LoginComponent, RegisterComponent],
  providers: [AuthenticationService, AuthGuardService]
})
export class UserModule { }
