import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Post{
  text: string
  image: string

}

const AUTH_TOKEN = window.sessionStorage.getItem('auth-token')
const httpOptions = {
  headers: new HttpHeaders({ 'x-access-token': `${AUTH_TOKEN}` })
};
@Injectable({
  providedIn: 'root'
})
export class PostService {
 
  private api = "http://localhost:2022/api/"

  constructor( private http:HttpClient) { }
  
  addPost(post:any): Observable<any> {
    return this.http.post<any>(this.api+ "post/create", post,httpOptions)
  }
  getAllPost(){
    return this.http.get(this.api+"post/AllPost",httpOptions)
  }
}
