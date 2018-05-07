import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Challenge } from '../challenge/challenge.model';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ChallengeDataService } from '../challenge-data.service';
import { HttpErrorResponse } from '@angular/common/http/http';

@Component({
  selector: 'app-add-challenge',
  templateUrl: './add-challenge.component.html',
  styleUrls: ['./add-challenge.component.css']
})
export class AddChallengeComponent implements OnInit {
  @Output() public newChallenge = new EventEmitter<Challenge>();

  private challenge : FormGroup;
  constructor(private fb:FormBuilder, private _recipeDataService: ChallengeDataService) { }


  ngOnInit() {
    this.challenge = this.fb.group({
      name : this.fb.control('',[Validators.required,Validators.minLength(4)]),
      description: this.fb.control('',[Validators.required,Validators.minLength(20)])
    })
  }

  onSubmit() {
    
    let challenge : Challenge = new Challenge(this.challenge.value.name, this.challenge.value.description);
    this.newChallenge.emit(challenge);
    this._recipeDataService.newChallengeAdded(challenge).subscribe(
      () => {},
      (error: HttpErrorResponse) => {
        error.error.errorMsg = `Error ${error.status} while adding
          challenge for ${challenge.name}: ${error.error}`;
      }
    );
  }

  addChallenge(name: HTMLInputElement, description: HTMLInputElement) : boolean {
    this.newChallenge.emit(new Challenge(name.value, description.value));
    return false;
  }

}
