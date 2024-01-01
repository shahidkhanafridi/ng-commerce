import { Component, OnInit } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { signUp } from '../data-type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css'],
})
export class SellerAuthComponent implements OnInit {
  // 1. npm install -g json-server
  // 2. json-server --watch db.json
  constructor(private seller: SellerService, private router: Router) {}

  ngOnInit(): void {}
  signUp(item: signUp): void {
    console.log('item', item);
    this.seller.userSignUp(item).subscribe((result) => {
      console.log(result);
      if(result){
        this.router.navigate(['seller-home'])
      }
    });
  }
}
