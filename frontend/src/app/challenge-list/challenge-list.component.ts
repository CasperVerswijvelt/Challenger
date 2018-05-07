import { Component, OnInit, Input } from '@angular/core';
import { Challenge } from '../challenge/challenge.model';
import { ChallengeDataService } from '../challenge-data.service';

@Component({
  selector: 'app-challenge-list',
  templateUrl: './challenge-list.component.html',
  styleUrls: ['./challenge-list.component.css']
})
export class ChallengeListComponent implements OnInit {
  public filterValue:string ="";
  private _challenges : Challenge[];

  constructor(private _recipeDataService: ChallengeDataService) { 
    
  }

  ngOnInit() {
    this._recipeDataService.challenges.subscribe(items => this._challenges = items);
  }

  get challenges() {
    return this._challenges;
  }



}
