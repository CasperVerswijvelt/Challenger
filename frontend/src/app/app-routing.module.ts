



import { RouterModule, Routes } from '@angular/router';
import { ChallengeListComponent } from './challenge/challenge-list/challenge-list.component';
import { AddChallengeComponent } from './challenge/add-challenge/add-challenge.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { ChallengeFilterPipe } from './challenge/challenge-filter.pipe';
import { ChallengeComponent } from './challenge/challenge/challenge.component';
import { EntryComponent } from './challenge/entry/entry.component';
import { DatePipe, CommonModule } from '@angular/common';
import { AppModule } from './app.module';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
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