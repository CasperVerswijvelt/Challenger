import { Component, OnInit, Input } from '@angular/core';
import { Challenge } from '../challenge/challenge.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChallengeDataService } from '../challenge-data.service';
import { Entry } from '../entry/entry.model';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthenticationService } from '../../user/authentication.service';

@Component({
  selector: 'app-add-entry',
  templateUrl: './add-entry.component.html',
  styleUrls: ['./add-entry.component.css']
})
export class AddEntryComponent implements OnInit {
  @Input() Challenge: Challenge;
  private entryForm: FormGroup;
  public ErrorMsg: String;

  constructor(private fb: FormBuilder, private _recipeDataService: ChallengeDataService, private _authService : AuthenticationService) { }

  ngOnInit() {
    this.entryForm = this.fb.group({
      description: this.fb.control('', [Validators.required, Validators.minLength(20)]),
      img: this.fb.control('', [Validators.required, Validators.minLength(4)])
    })
  }

  onSubmit() {

    let entry: Entry = new Entry(this.entryForm.value.description, this.entryForm.value.img);
    console.log(entry);
    this._recipeDataService.addEntryToChallenge(entry, this.Challenge).subscribe(
      () => { },
      (error: HttpErrorResponse) => {
        this.ErrorMsg = `Error ${error.status} while adding
          challenge for ${Challenge.name}: ${error.error}`;
      }
    );
  }

  get currentUser() {
    return this._authService.user$;
  }


}
