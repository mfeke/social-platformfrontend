import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private location = 'https://ipapi.co/json/'
 
  constructor( private http: HttpClient) { }

  getLocation(){
    return this.http.get(this.location);
  }
}
