import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { signUp } from '../data-type';

@Injectable({
  providedIn: 'root'
})
export class SellerService {
  baseUrl:string='http://localhost:3000/';

  constructor(private http: HttpClient) { }
  userSignUp(data: signUp){
    console.log("Service called");
    return this.http.post(`${this.baseUrl}seller`, data)
  }
}
