import { Component, OnInit, Input } from '@angular/core';
import { Challenge } from '../challenge/challenge.model';
import { ChallengeDataService } from '../challenge-data.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-challenge-list',
  templateUrl: './challenge-list.component.html',
  styleUrls: ['./challenge-list.component.css']
})
export class ChallengeListComponent implements OnInit {
  public filterValue:string ="";
  private _challenges : Challenge[];

  private _filterGroup : FormGroup;

  constructor(private fb:FormBuilder,private _recipeDataService: ChallengeDataService) { 
    
  }

  ngOnInit() {
    this._recipeDataService.challenges.subscribe(items => this._challenges = items);
    this._filterGroup = this.fb.group({
      filter : this.fb.control('')
    })
  }

  onFilterSubmit(input:string) {
    this.filterValue = this._filterGroup.value.filter;
  }

  get challenges() {
    return this._challenges;
  }

  get filterGroup() {
    return this._filterGroup;
  }



}
