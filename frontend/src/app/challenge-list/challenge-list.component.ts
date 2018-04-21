import { Component, OnInit, Input } from '@angular/core';
import { Challenge } from '../challenge/challenge.model';

@Component({
  selector: 'app-challenge-list',
  templateUrl: './challenge-list.component.html',
  styleUrls: ['./challenge-list.component.css']
})
export class ChallengeListComponent implements OnInit {

  @Input() public Challenges:Array<Challenge>
  public filter:string ="";
  constructor() { }

  ngOnInit() {
  }



}
