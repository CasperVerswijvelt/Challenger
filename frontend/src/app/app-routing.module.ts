



import { RouterModule, Routes } from '@angular/router';
import { ChallengeListComponent } from './challenge-list/challenge-list.component';
import { AddChallengeComponent } from './add-challenge/add-challenge.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { ChallengeFilterPipe } from './challenge-filter.pipe';
import { ChallengeComponent } from './challenge/challenge.component';
import { EntryComponent } from './entry/entry.component';
import { DatePipe, CommonModule } from '@angular/common';
import { AppModule } from './app.module';

const appRoutes: Routes = [
  { path: 'challenge-list', component: ChallengeListComponent },
  { path: 'add-challenge', component: AddChallengeComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', component: PageNotFoundComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  declarations: [
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }