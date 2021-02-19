import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-url',
  templateUrl: './input-url.component.html',
  styleUrls: ['./input-url.component.css']
})
export class InputUrlComponent implements OnInit {

  // props
  userURL?:string
  // data to app
  @Output() emitURL = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  makeRequest(value:string){
    this.emitURL.emit(value);
    console.log('[makeRequest] emitURL to parent...');
  }

}
