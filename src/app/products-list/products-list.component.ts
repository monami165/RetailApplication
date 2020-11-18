import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  products:Array<Product>;

  constructor(public productService:ProductService) { }

  ngOnInit(): void {
    this.productService.getAllProductDetails().subscribe(data=>this.products=data);
  }

}
