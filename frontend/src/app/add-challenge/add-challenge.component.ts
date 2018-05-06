import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Challenge } from '../challenge/challenge.model';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-challenge',
  templateUrl: './add-challenge.component.html',
  styleUrls: ['./add-challenge.component.css']
})
export class AddChallengeComponent implements OnInit {
  @Output() public newChallenge = new EventEmitter<Challenge>();

  private challenge : FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.challenge = this.fb.group({
      name : this.fb.control('',[Validators.required,Validators.minLength(4)]),
      description: this.fb.control('',[Validators.required,Validators.minLength(20)])
    })
  }

  onSubmit() {
    this.newChallenge.emit(new Challenge(this.challenge.value.name, this.challenge.value.description));
  }

  addChallenge(name: HTMLInputElement, description: HTMLInputElement) : boolean {
    this.newChallenge.emit(new Challenge(name.value, description.value));
    return false;
  }

}
