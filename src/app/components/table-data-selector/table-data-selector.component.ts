import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table-data-selector',
  templateUrl: './table-data-selector.component.html',
  styleUrls: ['./table-data-selector.component.css']
})
export class TableDataSelectorComponent implements OnInit {

  @Input() dataItem?:string;
  @Input() datatype?:string;

  @Output() emitData = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }
  getData(){
    console.log('[table-data-selector]', this.dataItem)
    this.emitData.emit(this.dataItem);
  }
  GET_API_END_POINT(){
    // Send request for data
    // this.tableSerive.getData_from_API_END_POINT(endpoint).subscribe(data =>{
    // // set true when data is received
    // this.dataReceived = true;
    // // set dataColumns names
    // this.dataColumns = ['inp',...Object.keys(data[0]),'actionMenu']
    // // set dataRow data
    // this.dataRows = data
    // })
  }


}
