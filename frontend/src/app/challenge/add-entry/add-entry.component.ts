import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Challenge } from '../challenge/challenge.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChallengeDataService } from '../challenge-data.service';
import { Entry } from '../entry/entry.model';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthenticationService } from '../../user/authentication.service';
import { Router } from '@angular/router';
declare var $: any;
var nieuweEntry;
var emitter;
var entryForm;
var errorMsg;

@Component({
  selector: 'app-add-entry',
  templateUrl: './add-entry.component.html',
  styleUrls: ['./add-entry.component.css']
})
export class AddEntryComponent implements OnInit {
  @Input() Challenge: Challenge;
  @Output() public newEntry = new EventEmitter<Entry>();
  private entryForm: FormGroup;
  public display: string = 'none';




  constructor(private router: Router, private fb: FormBuilder, private _recipeDataService: ChallengeDataService, private _authService: AuthenticationService) {

    emitter = this.newEntry;
  }

  ngOnInit() {
    this.entryForm = this.fb.group({
      description: this.fb.control('', [Validators.required, Validators.minLength(20), Validators.maxLength(200)]),
      img: this.fb.control('', [Validators.required, Validators.minLength(4), Validators.maxLength(500)])
    })
    entryForm = this.entryForm;
  }

  onSubmit() {
    nieuweEntry = new Entry(this.entryForm.value.description, this.entryForm.value.img);
    this.testImage();


  }
  get errorMsg() {
    return errorMsg;
  }

  get currentUser() {
    return this._authService.user$;
  }

  naarLogin() {
    this._authService.redirectUrl = this.router.url;
    this.router.navigateByUrl("/login");
  }

  closeModal = function() {
    $("#formModal").modal('hide');
  }

  testImage = function () {
    console.log(nieuweEntry)
    var tester = new Image();
    tester.onload = this.imageFound;
    tester.onerror = this.imageNotFound;
    tester.src = nieuweEntry.img;
  }

  imageFound = function () {
    console.log('Image was found, continueing submission');
    this.errorMsg = null;
    emitter.emit(nieuweEntry);
    $("#formModal").modal('hide');
    entryForm.reset();
    

  }

  imageNotFound = function (entry: Entry) {
    console.log('Image was not found, aborting submission');
    errorMsg = "The provided URL does not point to an image";
  }



}


