import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ChallengeComponent } from './challenge/challenge.component';
import { AddChallengeComponent } from './add-challenge/add-challenge.component';
import { ChallengeListComponent } from './challenge-list/challenge-list.component';
import { ChallengeFilterPipe } from './challenge-filter.pipe';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { EntryComponent } from './entry/entry.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';




@NgModule({
  declarations: [
    AppComponent,
    ChallengeComponent,
    AddChallengeComponent,
    ChallengeListComponent,
    ChallengeFilterPipe,
    EntryComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,AppRoutingModule,ReactiveFormsModule,HttpClientModule, BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
