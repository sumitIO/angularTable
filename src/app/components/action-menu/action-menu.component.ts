import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-action-menu',
  templateUrl: './action-menu.component.html',
  styleUrls: ['./action-menu.component.css']
})
export class ActionMenuComponent implements OnInit {

  // prop from parent component
  @Input()  currRow?:any
  // props to parent component
  @Output() emitAction = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }
  // method to emit action to parent component
  actionClicked(actionType:any){
    this.emitAction.emit(actionType)
  }

}
