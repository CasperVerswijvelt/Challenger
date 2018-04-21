import { Component, OnInit, Input } from '@angular/core';
import { Challenge } from './challenge.model';

@Component({
  selector: 'app-challenge',
  templateUrl: './challenge.component.html',
  styleUrls: ['./challenge.component.css'],
})
export class ChallengeComponent implements OnInit {

  @Input() public Challenge:Challenge;
  public state:boolean = false;;
  public toggle =function () {
    this.state = !this.state;
  };

  ngOnInit() {
  }

  constructor() {
    this.Challenge = new Challenge("Naam","Beschrijving");
  }

  public open(event, item) {
    alert('Open ' + item);
  }
  
  


}

