import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  BASE_URL: string = 'http://localhost:3001';
  constructor(private http: HttpClient) {}
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.BASE_URL}/product`);
  }
  getProduct(id: string): Observable<Product> {
    return this.http.get<Product>(`${this.BASE_URL}/product/${id}`);
  }
  createProducts(product: Product): Observable<Product> {
    return this.http.post<Product>(`${this.BASE_URL}/product/create`, product);
  }
  deleteProducts(id: string): Observable<Product> {
    return this.http.delete<Product>(`${this.BASE_URL}/product/delete/${id}`);
  }
  updateProducts(id: string, product:Product): Observable<Product> {
    return this.http.put<Product>(`${this.BASE_URL}/product/${id}`,product);
  }
}
