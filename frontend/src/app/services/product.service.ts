import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Product } from "../models/product.model";

const url = 'http://localhost:3000/api/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(url);
  }

  getProduct(id: any): Observable<Product> {
    return this.http.get(`${url}/${id}`);
  }

  addProduct(data: any): Observable<any> {
    return this.http.post(url, data);
  }

  editProduct(id: any, data: any): Observable<any> {
    return this.http.put(`${url}/${id}`, data);
  }

  deleteProduct(id: any): Observable<any> {
    return this.http.delete(`${url}/${id}`);
  }
}
