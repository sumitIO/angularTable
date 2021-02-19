import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { MatCheckbox, MatCheckboxChange } from '@angular/material/checkbox';
import {TableService} from './services/table.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  // data props
  dataReceived:boolean = false;
  // JSON data COLUMNS
  dataColumns?:string[]

  // EXTRA COLUMNS TO DISPLAY
  displayColumns?: string[]
  // JSON ROW DATA
  dataRows?: any;

  // default API calls props
  users:string = 'users';
  todos:string = 'todos';


  constructor(private tableSerive:TableService) { }

  ngOnInit(): void{

  }

  GET_API_END_POINT(endpoint:string){
    console.log('[app]',endpoint)
    // Send request for data
    this.tableSerive.getData_from_API_END_POINT(endpoint).subscribe(data =>{
    // set true when data is received
    this.dataReceived = true;
    // set dataColumns names
    this.dataColumns = Object.keys(data[0])
    // set columns to display
    this.displayColumns = ['inputChecked',...this.dataColumns,'action']
    // set dataRow data
    this.dataRows = data
    })
  }

  getUserURLData(inputURL:string){
    console.log('[Entered:URL]',inputURL)
    this.tableSerive.getTableDatafromURL(inputURL).subscribe((res)=>{

      console.log('[error]',res);
      if(res.data.length===0){
        alert('No data found @ res.data')
      }
      console.log('[data Received]...',res)
      this.dataReceived = true;
      this.dataColumns = Object.keys(res.data[0])
      this.displayColumns = ['inputChecked',...this.dataColumns,'action']
      this.dataRows = res.data
    })
  }

  isSelected(input:MatCheckboxChange, currRow:any){
    // console.log(input.checked)
    if(input.checked){
    setTimeout(()=>{
      alert(`[app]: userID:${currRow.id} userName:${currRow.name} is Selected`)
    },500)
  }

  }
  actionCallRow(d:any){
    // alert(`${d.action}... for ${d.row.name}`)

    if(d.action === 'redial'){
      console.log(`[app]: Redialing... for ${d.row.name}`)

      if(d.row.first_name && d.row.last_name){
        alert(`[app]: redialing... for userID: ${d.row.id} userName: ${d.row.first_name} ${d.row.last_name}`)
      }
      else if(d.row.name){
        alert(`[app]: redialing... for userID: ${d.row.id} name: ${d.row.name}`)
      }
      else{
        alert(`[app]: redialing... for userID: ${d.row.id}`)

      }
    }
    else if(d.action === 'disableAlert'){
      console.log(`[app]: disableAlert for ${d.row.name}`)

      if(d.row.first_name && d.row.last_name){
        alert(`[app]: diabling alerts for userID: ${d.row.id} userName: ${d.row.first_name} ${d.row.last_name}`)
      }

      else if(d.row.name){
        alert(`[app]: diabling alerts for userID: ${d.row.id} name: ${d.row.name}`)
      }
      else{
        alert(`[app]: diabling alerts for userID: ${d.row.id}`)

      }
    }
  }
}
