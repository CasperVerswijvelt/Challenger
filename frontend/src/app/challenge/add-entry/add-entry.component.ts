import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Challenge } from '../challenge/challenge.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChallengeDataService } from '../challenge-data.service';
import { Entry } from '../entry/entry.model';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthenticationService } from '../../user/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-entry',
  templateUrl: './add-entry.component.html',
  styleUrls: ['./add-entry.component.css']
})
export class AddEntryComponent implements OnInit {
  @Input() Challenge: Challenge;
  @Output() public newEntry = new EventEmitter<Entry>();
  private entryForm: FormGroup;
  public errorMsg: String;
  public display: string = 'none';

  constructor(private router: Router, private fb: FormBuilder, private _recipeDataService: ChallengeDataService, private _authService: AuthenticationService) { }

  ngOnInit() {
    this.entryForm = this.fb.group({
      description: this.fb.control('', [Validators.required, Validators.minLength(20)]),
      img: this.fb.control('', [Validators.required, Validators.minLength(4)])
    })
  }

  onSubmit() {


    let entry = new Entry(this.entryForm.value.description, this.entryForm.value.img);
    if (this.IsImageOk(entry.img)) {
      this.errorMsg = null;
      this.newEntry.emit(entry);
      this.closeModal();
      this.entryForm.reset();
    } else {
      this.errorMsg = "The provided URL does not point to an image"
    }
  }

  IsImageOk = function (imgSrc) {
    let img = new Image();
    try {
      img.src = imgSrc;
    } catch (err) {
      console.log("De error hieronder toont dat de ingegeven url niet correct is, mag genegeerd worden.")
      return false;
    }
    if (!img.complete) {
      console.log("Afbeelding is incomplete, mag niet submitten");
      return false;
    }
    return true;
  }

  get currentUser() {
    return this._authService.user$;
  }

  naarLogin() {
    this._authService.redirectUrl = this.router.url;
    this.router.navigateByUrl("/login");
  }


  openModal() {
    this.display = 'block';
  }
  closeModal() {
    this.display = 'none';
  }



}
