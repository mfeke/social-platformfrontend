import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private api = "http://localhost:2022/api/"
 
  constructor(
    private http: HttpClient,) { }

  register(fullname: any, email:any,password:any):Observable<any>{
    return this.http.post(this.api+"auth/signup", { fullname, email, password });    
  }
  login( email:any ,password:any){
    return this.http.post(this.api+"auth/signin", { email, password });    

    
  }
}
