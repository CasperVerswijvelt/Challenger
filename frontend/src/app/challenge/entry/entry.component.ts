import { Component, OnInit, Input } from '@angular/core';
import { Entry } from './entry.model';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {
  @Input() public Entry: Entry;
  public display = 'none';

  constructor() { }

  ngOnInit() {
  }

  openModal() {
    this.display = 'block';
  }
  closeModal() {
    this.display = 'none';
  }

}
