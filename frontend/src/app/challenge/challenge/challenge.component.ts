import { Component, OnInit, Input } from '@angular/core';
import { Challenge } from './challenge.model';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';


@Component({
  selector: 'app-challenge',
  templateUrl: './challenge.component.html',
  styleUrls: ['./challenge.component.css'],
  animations: [
    trigger('state', [
      state('true', style({
        height: '*',
        transform: 'scaleY(1)'
      })),
      state('false',   style({
        height: '0px',
        transform: 'scaleY(0)'
      })),
      transition('true => false', animate('150ms ease-in')),
      transition('false => true', animate('150ms ease-out'))
    ])
  ]
})
export class ChallengeComponent implements OnInit {

  @Input() public Challenge:Challenge;
  @Input() public Rang:number;
  public state:boolean = false;

  ngOnInit() {
  }

  constructor() {
    this.Challenge = new Challenge("Naam","Beschrijving");
  }

 public toggleState() {
  this.state = !this.state;
 }
  
  


}

