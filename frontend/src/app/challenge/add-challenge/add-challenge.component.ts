import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Challenge } from '../challenge/challenge.model';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ChallengeDataService } from '../challenge-data.service';
import { HttpErrorResponse } from '@angular/common/http/http';
import { AuthenticationService } from '../../user/authentication.service';

@Component({
  selector: 'app-add-challenge',
  templateUrl: './add-challenge.component.html',
  styleUrls: ['./add-challenge.component.css']
})
export class AddChallengeComponent implements OnInit {
  @Output() public newChallenge = new EventEmitter<Challenge>();

  private _challenge : FormGroup;
  constructor(private _authService : AuthenticationService,private fb:FormBuilder, private _recipeDataService: ChallengeDataService) { }


  ngOnInit() {
    this._challenge = this.fb.group({
      name : this.fb.control('',[Validators.required,Validators.minLength(4)]),
      description: this.fb.control('',[Validators.required,Validators.minLength(20)])
    })
  }

  onSubmit() {
    
    let challenge : Challenge = new Challenge(this._challenge.value.name, this._challenge.value.description,this.currentUser.getValue());
    console.log(challenge);
    this.newChallenge.emit(challenge);
    this._recipeDataService.newChallengeAdded(challenge).subscribe(
      () => {},
      (error: HttpErrorResponse) => {
        error.error.errorMsg = `Error ${error.status} while adding
          challenge for ${challenge.name}: ${error.error}`;
      }
    );
  }


  get challenge(){
    return this._challenge;
  }

  get currentUser() {
    return this._authService.user$;
  }
  

}
