import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table-data-selector',
  templateUrl: './table-data-selector.component.html',
  styleUrls: ['./table-data-selector.component.css']
})
export class TableDataSelectorComponent implements OnInit {

  @Input() dataItem:string;
  @Input() datatype:string;

  @Output() emitData = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    console.log('[table-data-selector Component] init')
  }
  getData(){
    console.log('[table-data-selector Component]', this.dataItem)
    this.emitData.emit(this.dataItem);
  }
}
