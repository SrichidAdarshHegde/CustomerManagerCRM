import { Component } from '@angular/core';

@Component({
  selector: 'app-quotationmanager',
  templateUrl: './quotationmanager.component.html',
  styleUrls: ['./quotationmanager.component.css']
})
export class QuotationmanagerComponent {
  onSelectCompany:any;
  selectedCustomer:any;
  customerList:any;
}
