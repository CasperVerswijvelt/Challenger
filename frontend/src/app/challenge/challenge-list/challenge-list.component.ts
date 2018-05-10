import { Component, OnInit, Input } from '@angular/core';
import { Challenge } from '../challenge/challenge.model';
import { ChallengeDataService } from '../challenge-data.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-challenge-list',
  templateUrl: './challenge-list.component.html',
  styleUrls: ['./challenge-list.component.css']
})
export class ChallengeListComponent implements OnInit {
  public filterValue:string ="";
  private _challenges : Challenge[];

  public FilterGroup : FormGroup;

  constructor(private route: ActivatedRoute,private router: Router,private fb:FormBuilder,private _recipeDataService: ChallengeDataService) { 
    
  }

  ngOnInit() {
    this.route.data.subscribe(item => 
      this._challenges = item['challenges']);
    this.FilterGroup = this.fb.group({
      filter : this.fb.control('')
    })
  }

  onFilterSubmit() {
    this.filterValue = this.FilterGroup.value.filter;
  }

  get challenges() {
    return this._challenges;
  }

  get filterGroup() {
    return this.FilterGroup;
  }

  routeNaarDetail(id) {
    this.router.navigateByUrl(`/challenge/${id}`);
  }



}
