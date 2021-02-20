import { Injectable } from '@angular/core';

// for Http reques we willuse HttpClietModule here in servies
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableService {
  constructor(private http : HttpClient) { }

  // method to serve Full URL Request
  getTableDatafromURL(url:string):Observable<any>{
    console.log('[table service] url:', url);
    return this.http.get<any>(url);

  }
  // predefined API END POINT CALLS from jsonplaceholder
  getData_from_API_END_POINT(ep:string):Observable<any>{
    // makes the API call and serves the Component
    console.log('[table service] sending GET...')
    return this.http.get<any>('https://jsonplaceholder.typicode.com/' + ep);
  }
}
