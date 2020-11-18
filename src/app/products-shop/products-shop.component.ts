import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products-shop',
  templateUrl: './products-shop.component.html',
  styleUrls: ['./products-shop.component.css']
})
export class ProductsShopComponent implements OnInit {
  products:Array<Product>
  constructor(public productService:ProductService) { }

  ngOnInit(): void {
    this.productService.getAllProductDetails().subscribe(data => this.products=data);
  }

}
