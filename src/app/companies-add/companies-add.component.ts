import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CompanyService } from '../services/company.service';


@Component({
  selector: 'app-companies-add',
  templateUrl: './companies-add.component.html',
  styleUrls: ['./companies-add.component.css']
})
export class CompaniesAddComponent implements OnInit {
  companyRef = new FormGroup({
    _id:new FormControl(),
    cname:new FormControl()
  })

  constructor(public companyService:CompanyService) { }
  result:string;

  ngOnInit(): void {
  }

  storeCompanyDetails(): void {

    if (this.companyRef.value._id == null || this.companyRef.value.cname == null) {
      this.result = "ID or company name cannot be empty!"
    } else {
      this.companyService.addCompany(this.companyRef.value).subscribe(data=>this.result=data.msg)
    }
    
  }

}
