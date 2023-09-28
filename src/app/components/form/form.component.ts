import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  product: Product = {
    name: '',
    description: '',
    price: 0,
    image: '',
  };

  edit: boolean = false;

  constructor(
    private productService: ProductService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if (params) {
      this.productService.getProduct(params['id'])
      .subscribe(
        res => {
          console.log(res);
          this.product = res;
          this.edit = true;
      });
    }
  }

  submitProduct() {
    this.productService.createProducts(this.product).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(['/']);
      },

      (err) => console.log(err)
    );
  }
  updateProduct() {
    if (this.product._id) {
      // Comprueba si this.product._id no es undefined
      delete this.product.createdAt;
      this.productService
        .updateProducts(this.product._id, this.product)
        .subscribe(
          (res) => {
            console.log(res);
            this.router.navigate(['/product']);
          },
          (err) => console.log(err)
        );
    }
  }
  // updateProduct(){
  //   delete this.product.createdAt;
  //   this.productService.updateProducts(this.product._id, this.product)
  // }
}
