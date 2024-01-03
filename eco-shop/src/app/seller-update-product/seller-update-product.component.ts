import { Component, OnInit } from '@angular/core';
import { product } from '../data-type';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-seller-update-product',
  templateUrl: './seller-update-product.component.html',
  styleUrls: ['./seller-update-product.component.css'],
})
export class SellerUpdateProductComponent implements OnInit {
  addProductMessage: string | undefined;
  productData: undefined | product;

  constructor(private route: ActivatedRoute, private product: ProductService) {}

  ngOnInit(): void {
    let productId = this.route.snapshot.paramMap.get('id');
    console.log(productId);
    productId &&
      this.product.getProduct(productId).subscribe((data) => {
        console.log(data);
        this.productData = data;
      });
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
