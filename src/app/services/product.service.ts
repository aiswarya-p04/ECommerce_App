import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url = 'http://localhost:3000/products';
  constructor(private http: HttpClient) { }
  getProduct() {
    return this.http.get(this.url);
  }

}
