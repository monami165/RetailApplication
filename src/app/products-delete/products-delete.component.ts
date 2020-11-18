import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products-delete',
  templateUrl: './products-delete.component.html',
  styleUrls: ['./products-delete.component.css']
})
export class ProductsDeleteComponent implements OnInit {

  constructor(public productService:ProductService) { }
  result:string;
  ngOnInit(): void {
  }

  deleteProduct(prodId) {
    this.productService.deleteProductById(prodId).subscribe(data=>this.result=data.msg);
  }
}
