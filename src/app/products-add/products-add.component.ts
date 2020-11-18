import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products-add',
  templateUrl: './products-add.component.html',
  styleUrls: ['./products-add.component.css']
})
export class ProductsAddComponent implements OnInit {
  productRef = new FormGroup({
    _id:new FormControl(),
    pname:new FormControl(),
    price:new FormControl()
  })

  constructor(public productService:ProductService) { }
  result:string;

  ngOnInit(): void {
  }

  storeProductDetails(): void {
    // console.log(this.productRef.value);
    this.productService.storeProductDetailsInDb(this.productRef.value).
    subscribe(data=>this.result=data.msg)
  }
}
