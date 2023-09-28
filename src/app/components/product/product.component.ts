import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe(
      (res) => {
        this.products = res;
      },
      (err) => console.log(err)
    );
  }
  deleteProduct(id: string) {
    this.productService.deleteProducts(id)
    .subscribe(
      (res) => {
        this.getProducts()
      }
    )
  }
}
