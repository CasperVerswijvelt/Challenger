import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Challenge } from '../challenge/challenge.model';

@Component({
  selector: 'app-add-challenge',
  templateUrl: './add-challenge.component.html',
  styleUrls: ['./add-challenge.component.css']
})
export class AddChallengeComponent implements OnInit {
  @Output() public newChallenge = new EventEmitter<Challenge>();
  constructor() { }

  ngOnInit() {
  }

  addChallenge(name: HTMLInputElement, description: HTMLInputElement) : boolean {
    this.newChallenge.emit(new Challenge(name.value, description.value));
    return false;
  }

}
