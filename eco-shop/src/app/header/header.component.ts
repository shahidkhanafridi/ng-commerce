import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  menuType: string = 'default';
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((val: any) => {
      if (val.url) {
        console.log(val.url);
        if (localStorage.getItem('seller') && val.url.includes('seller')) {
          console.log('this is seller area');
          this.menuType="seller";
        } else {
          console.log('outside seller area');
          this.menuType="default";
        }
      }
    });
  }
}
