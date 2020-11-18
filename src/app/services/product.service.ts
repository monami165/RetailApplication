import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(public httpClient:HttpClient) { } // DI for HttpClient

  getProductById(prodId):Observable<Product[]> {
    return this.httpClient.get<Product[]>("http://localhost:5000/products/productInfoById/"+prodId)
  }

  getAllProductDetails():Observable<Product[]> {
    return this.httpClient.get<Product[]>("http://localhost:5000/products/productfromDb");
  }

  storeProductDetailsInDb(prodRef):Observable<any> {
    return this.httpClient.post("http://localhost:5000/products/storeProduct",prodRef);
  }

  deleteProductById(prodId):Observable<any> {
    return this.httpClient.delete("http://localhost:5000/products/deleteProductById/"+prodId);
  }

  updateProductDetailsFromDb(prodRef):Observable<any> {
    return this.httpClient.put("http://localhost:5000/products/updateProduct",prodRef);
  }
}