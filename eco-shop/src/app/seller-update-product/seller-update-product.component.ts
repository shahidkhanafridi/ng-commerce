import { Component, OnInit } from '@angular/core';
import { product } from '../data-type';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-seller-update-product',
  templateUrl: './seller-update-product.component.html',
  styleUrls: ['./seller-update-product.component.css']
})
export class SellerUpdateProductComponent implements OnInit {
  addProductMessage: string | undefined;

  constructor(private product: ProductService) { }

  ngOnInit(): void {
  }
  submit(data: product) {
    console.log(data);
    // this.product.updateProduct(data).subscribe((result) => {
    //   console.log(result);
    //   if (result) {
    //     this.addProductMessage = 'Product is added successfully';
    //   }
    // });
    setTimeout(() => {
      this.addProductMessage = undefined;
    }, 3000);
  }

}
