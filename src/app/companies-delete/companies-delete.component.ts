import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../services/company.service';

@Component({
  selector: 'app-companies-delete',
  templateUrl: './companies-delete.component.html',
  styleUrls: ['./companies-delete.component.css']
})
export class CompaniesDeleteComponent implements OnInit {

  constructor(public companyService:CompanyService) { }
  result:string;
  
  ngOnInit(): void {
  }

  deleteCompany(compID) {
    this.companyService.deleteCompanyById(compID).subscribe(data=>this.result=data.msg);
  }

  

}
