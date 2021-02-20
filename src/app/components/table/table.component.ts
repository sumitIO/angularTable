import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() dataSource:any
  @Input() displayColumns:string[]
  @Input() dataColumns:string[]

  length:number = 0;

  constructor() { }

  ngOnInit(): void {
    console.log('[Table Component] init')
  }
  isSelected(input:MatCheckboxChange, currRow:any){
    // console.log(input.checked)
    if(input.checked){
    setTimeout(()=>{
      alert(`[table component]:\nuserID: ${currRow.id}\nuserName: ${currRow.name} is Selected`)
    },500)
  }
  }
  actionCallRow(d:any){
    // alert(`${d.action}... for ${d.row.name}`)
    if(d.action === 'redial'){
      console.log(`[table-component]: Redialing... for ${d.row.name}`)

      if(d.row.first_name && d.row.last_name){
        alert(`[table-component]:\nredialing... for userID: ${d.row.id} userName: ${d.row.first_name} ${d.row.last_name}`)
      }
      else if(d.row.name){
        alert(`[table-component]:\nredialing... for userID: ${d.row.id} name: ${d.row.name}`)
      }
      else{
        alert(`[table-component]:\nredialing... for userID: ${d.row.id}`)

      }
    }
    else if(d.action === 'disableAlert'){
      console.log(`[table-component]: disable alerts for ${d.row.name}`)

      if(d.row.first_name && d.row.last_name){
        alert(`[table-component]:\ndiabling alerts for userID: ${d.row.id} userName: ${d.row.first_name} ${d.row.last_name}`)
      }

      else if(d.row.name){
        alert(`[table-component]:\ndiabling alerts for userID: ${d.row.id} name: ${d.row.name}`)
      }
      else{
        alert(`[table-component]:\ndiabling alerts for userID: ${d.row.id}`)

      }
    }
  }
}

