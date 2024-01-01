import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { signUp } from '../data-type';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class SellerService {
  baseUrl: string = 'http://localhost:3000/';
  isSellerLoggedIn = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient, private router: Router) {}
  userSignUp(data: signUp) {
    console.log('Service called');
    this.http
      .post(`${this.baseUrl}seller`, data, { observe: 'response' })
      .subscribe((result) => {
        console.log(result);
        if (result) {
          this.isSellerLoggedIn.next(true);
          localStorage.setItem("seller", JSON.stringify(result.body));
          this.router.navigate(['seller-home']);
        }
      });
  }
  reloadSeller(){
    if(localStorage.getItem("seller")){
      this.isSellerLoggedIn.next(true)
      this.router.navigate(['seller-home'])
    }
  }
}
