import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { product } from '../data-type';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  menuType: string = 'default';
  sellerName: string = '';
  searchResult: undefined | product[];
  constructor(private router: Router, private product: ProductService) {}

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

  searchProduct(query: KeyboardEvent) {
    if (query) {
      const element = query.target as HTMLInputElement;
      console.log(element.value);
      this.product.searchProduct(element.value).subscribe((result) => {

        if (result.length > 5) {
          result.length = length;
        }
        this.searchResult = result;
      });
    }
  }
  hideSearch() {
    this.searchResult = undefined;
  }
  redirectToDetails(id: number) {
    this.router.navigate(['/details/' + id]);
  }
  submitSearch(val: string) {
    console.warn(val);
    this.router.navigate([`search/${val}`]);
  }
}
