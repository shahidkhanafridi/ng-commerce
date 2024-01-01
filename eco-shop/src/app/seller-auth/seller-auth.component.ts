import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css'],
})
export class SellerAuthComponent implements OnInit {
  // 1. npm install -g json-server
  // 2. json-server --watch db.json
  constructor() {}

  ngOnInit(): void {}
  signUp(item: any): void {
    console.log('item', item);
  }
}
