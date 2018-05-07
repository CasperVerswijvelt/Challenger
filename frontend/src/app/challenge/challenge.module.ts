import { ChallengeComponent } from "./challenge/challenge.component";
import { AddChallengeComponent } from "./add-challenge/add-challenge.component";
import { ChallengeListComponent } from "./challenge-list/challenge-list.component";
import { ChallengeFilterPipe } from "./challenge-filter.pipe";
import { EntryComponent } from "./entry/entry.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { ChallengeDataService } from "./challenge-data.service";
import { RouterModule } from "@angular/router";
import { ChallengeDetailsComponent } from './challenge-details/challenge-details.component';
import { ChallengeResolver } from "./challenge-resolver";

const routes = [
    { path: 'challenge/list', component: ChallengeListComponent },
    { path: 'challenge/add', component: AddChallengeComponent },
    { path: 'challenge/:id', component: ChallengeDetailsComponent,
        resolve: { challenge: ChallengeResolver}}
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
        ChallengeDetailsComponent,],
    providers: [ ChallengeDataService , ChallengeResolver ]
  })
  export class ChallengeModule { }