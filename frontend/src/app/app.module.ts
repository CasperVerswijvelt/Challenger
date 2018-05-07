import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ChallengeComponent } from './challenge/challenge/challenge.component';
import { AddChallengeComponent } from './challenge/add-challenge/add-challenge.component';
import { ChallengeListComponent } from './challenge/challenge-list/challenge-list.component';
import { ChallengeFilterPipe } from './challenge/challenge-filter.pipe';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { EntryComponent } from './challenge/entry/entry.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ChallengeModule } from './challenge/challenge.module';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,ChallengeModule,AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
