import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  menuType: string = 'default';
  sellerName: string = '';
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((val: any) => {
      if (val.url) {
        console.log(val.url);
        if (localStorage.getItem('seller') && val.url.includes('seller')) {
          console.log('this is seller area');
          let sellerStore = localStorage.getItem('seller');
          let sellerData = sellerStore && JSON.parse(sellerStore);
          this.sellerName = sellerData.name;
          this.menuType = 'seller';
        } else {
          console.log('outside seller area');
          this.menuType = 'default';
        }
      }
    });
  }
  logout() {
    localStorage.removeItem('seller');
    this.router.navigate(['/']);
  }
}
