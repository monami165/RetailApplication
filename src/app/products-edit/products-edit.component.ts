import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products-edit',
  templateUrl: './products-edit.component.html',
  styleUrls: ['./products-edit.component.css']
})
export class ProductsEditComponent implements OnInit {
  productRef = new FormGroup({
    _id:new FormControl(),
    pname:new FormControl(),
    price:new FormControl()
  });

  constructor(public productService:ProductService) { }
  result:string;

  ngOnInit(): void {
  }

  updateProductDetails() {
    this.productService.updateProductDetailsFromDb(this.productRef.value).subscribe(data=>this.result=data.msg)
  }
}
