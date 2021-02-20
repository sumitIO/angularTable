import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

// TableService dependency injectio for handling client side Http requests
import {TableService} from './services/table.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  // props
  dataSource = new MatTableDataSource<any>();
  dataColumns:string[]
  displayColumns:string[]
  showTable:boolean = false
  

  constructor(private tableService:TableService) { }

  ngOnInit(): void{
    console.log('[App] init')
  }

  GET_API_END_POINT(endpoint:string){
    console.log('[app]',endpoint)
    // Send request for data
    this.tableService.getData_from_API_END_POINT(endpoint).subscribe(data =>{
      // set dataColumns names
      console.log('[app] dataReceived...')
      // set columns to display
      this.dataColumns = Object.keys(data[0])
      // add inputCheckbox Col & action-menu Col
      this.displayColumns = ['input',...this.dataColumns,'action']
      // set dataSouce to data
      this.dataSource = data
      // if dataSource show Table else do not show it
      this.dataSource ? this.showTable=true : this.showTable=false
    },error=>{
      alert(`ERROR OCCURED:\nErrorName: ${error.statusText}`)
      console.log(error, error.ok)
    })
  }
  GET_DATA_FROM_URL(inputURL:string){
    console.log('[app] Entered URL:',inputURL)
    this.tableService.getTableDatafromURL(inputURL).subscribe((res)=>{
      console.log('[app] data Received from URL...',res)
      // if res contain data prop
      if(res.data){
        // set columns to display
        this.dataColumns = Object.keys(res.data[0])
        // add inputCheckbox Col & action-menu Col
        this.displayColumns = ['input',...this.dataColumns,'action']
        // set dataSouce to data
        this.dataSource = res.data
      }
      // if response Contain ony data no Metadeta
      else if(res){{
        // set columns to display
        this.dataColumns = Object.keys(res[0])
        // add inputCheckbox Col & action-menu Col
        this.displayColumns = ['input',...this.dataColumns,'action']
        // set dataSouce to data
        this.dataSource = res

      }}
      // if dataSource show Table else do not show it
      this.dataSource ? this.showTable=true : this.showTable=false
    },error=>{
      alert(`ERROR OCCURED:\nErrorType: ${error.name}\nError message: ${error.message}`);
      console.error(error)
    })
  }
}
