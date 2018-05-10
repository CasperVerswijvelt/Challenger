import { Component, OnInit, Input } from '@angular/core';
import { Entry } from '../entry/entry.model';

@Component({
  selector: 'app-entry-modal',
  templateUrl: './entry-modal.component.html',
  styleUrls: ['./entry-modal.component.css']
})
export class EntryModalComponent implements OnInit {
  @Input() Entry: Entry;

  constructor() { 
    
  }

  ngOnInit() {
  }

}
