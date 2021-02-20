import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-action-menu',
  templateUrl: './action-menu.component.html',
  styleUrls: ['./action-menu.component.css']
})
export class ActionMenuComponent implements OnInit {

  // prop from parent component[app]
  @Input()  currRow:any
  // props to parent component[app]
  @Output() emitAction = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
    console.log('[action-menu] init')
  }
  // method to emit action to parent component[app]
  actionClicked(actionType:any){
    console.log('[action-menu] action clicked')
    this.emitAction.emit(actionType)
  }
}
