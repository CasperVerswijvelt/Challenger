import { ChallengeComponent } from "./challenge/challenge.component";
import { AddChallengeComponent } from "./add-challenge/add-challenge.component";
import { ChallengeListComponent } from "./challenge-list/challenge-list.component";
import { ChallengeFilterPipe } from "./challenge-filter.pipe";
import { EntryComponent } from "./entry/entry.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { ChallengeDataService } from "./challenge-data.service";
import { RouterModule } from "@angular/router";
import { ChallengeDetailsComponent } from './challenge-details/challenge-details.component';
import { ChallengeResolver } from "./challenge-resolver";
import { AddEntryComponent } from './add-entry/add-entry.component';

import { AuthGuardService } from "../user/auth-guard.service";
import { AuthenticationService } from "../user/authentication.service";
import { BaseUrlInterceptor } from "../http-interceptors/base-url.interceptors";
import { AuthenticationInterceptor } from "../http-interceptors/AuthenticationInterceptor";
import { SortByEntriesPipe } from './sort-by-entries.pipe';
import { LoginPartialComponent } from '../login-partial/login-partial.component';
import { EntrySortByDatePipe } from './entry-sort-by-date.pipe';
import { ChallengeListResolver } from "./entry/challenge-list-resolver";
import { ProfileComponent } from './profile/profile.component';
import { ProfileResolver } from "./profile-resolver";
import { EntryModalComponent } from './entry-modal/entry-modal.component';

const routes = [
    { path: 'challenge/list', component: ChallengeListComponent,
        resolve: { challenges: ChallengeListResolver}},
    { path: 'challenge/add',canActivate: [ AuthGuardService ], component: AddChallengeComponent },
    { path: 'challenge/:id', component: ChallengeDetailsComponent,
        resolve: { challenge: ChallengeResolver}},
    { path: 'profile/:id', component: ProfileComponent ,
        resolve: { profile: ProfileResolver}}
  ];

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        ChallengeComponent,
        AddChallengeComponent,
        ChallengeListComponent,
        ChallengeFilterPipe,
        EntryComponent,
        ChallengeDetailsComponent,
        AddEntryComponent,
        SortByEntriesPipe,
        EntrySortByDatePipe,
        ProfileComponent,
        EntryModalComponent],
    providers: [AuthenticationService, ChallengeDataService , ChallengeResolver , ChallengeListResolver, ProfileResolver]
  })
  export class ChallengeModule { }