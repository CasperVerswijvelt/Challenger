import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthenticationService } from './authentication.service';
import { AuthGuardService } from './auth-guard.service';
import { authInterceptor } from '../http-interceptors';
import { BaseUrlInterceptor } from '../http-interceptors/base-url.interceptors';

const routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent }
     
];
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LoginComponent, RegisterComponent],
  providers:[BaseUrlInterceptor,authInterceptor, AuthenticationService, AuthGuardService]
})
export class UserModule { }
