import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  Api_url = "http://localhost:5000/api";
  token: string = '';
  constructor(private http : HttpClient) { }

  ///////////////////   Register ///////////////////
  
  register(user: any): Observable<User> {
   
    
    return this.http.post<User>(`${this.Api_url}/register`, user);
  }

  /////////////////login//////////////////
 login(email:string,password:string): Observable<User> {
  const body={email:email,password:password}
  console.log(body)
  return this.http.post<User>(`${this.Api_url}/login`, body);
 }
 
 getToken(): any {
 return localStorage.getItem('access_token');
}

clearToken() {
 localStorage.removeItem(this.token);
 }

}