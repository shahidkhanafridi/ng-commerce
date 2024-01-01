import { Component, OnInit } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { login, signUp } from '../data-type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css'],
})
export class SellerAuthComponent implements OnInit {
  showLogin = false;
  authError: string = '';
  // 1. npm install -g json-server
  // 2. json-server --watch db.json
  constructor(private seller: SellerService) {}

  ngOnInit(): void {
    this.seller.reloadSeller();
  }
  signUp(data: signUp): void {
    console.log('item', data);
    this.seller.userSignUp(data);
  }
  login(data: login): void {
    console.log('item', data);
    this.seller.userLogin(data);
    this.seller.isLoginError.subscribe((isError) => {
      console.log(isError);
      if (isError) {
        this.authError = 'Email or password is incorrect';
      } else {
        this.authError = '';
      }
    });
  }
  openLogin(toggle: boolean) {
    this.showLogin = toggle;
  }
}
