import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product } from '../data-type';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css'],
})
export class SellerHomeComponent implements OnInit {
  productList: undefined | product[];
  productMessage: undefined | string = '';
  deleteIcon = faTrash;
  editIcon = faEdit;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getAllProducts();
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id).subscribe((result) => {
      if (result) {
        this.productMessage = 'Product is deleted';
        this.getAllProducts();
      }
    });
    setTimeout(() => {
      this.productMessage = undefined;
    }, 3000);
  }

  getAllProducts() {
    this.productService.productList().subscribe((result) => {
      console.log(result);
      if (result) {
        this.productList = result;
      }
    });
  }
}
