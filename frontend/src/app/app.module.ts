import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppComponent } from './app.component';
import { ChallengeComponent } from './challenge/challenge.component';
import { AddChallengeComponent } from './add-challenge/add-challenge.component';
import { ChallengeListComponent } from './challenge-list/challenge-list.component';
import { ChallengeFilterPipe } from './challenge-filter.pipe';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ChallengeComponent,
    AddChallengeComponent,
    ChallengeListComponent,
    ChallengeFilterPipe
  ],
  imports: [
    BrowserModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
