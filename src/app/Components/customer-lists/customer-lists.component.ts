import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from 'src/app/Services/Registration/registration.service';
import * as XLSX from 'xlsx';

import { ElementRef, ViewChild } from '@angular/core';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-customer-lists',
  templateUrl: './customer-lists.component.html',
  styleUrls: ['./customer-lists.component.css'],
  encapsulation: ViewEncapsulation.Emulated, // Use with caution
})
export class CustomerListsComponent {

  @ViewChild('table', { static: false }) table!: ElementRef;
  exporting:boolean=false;
  searchText:any;
  customerList: any;
  p: number = 1;
  editcustomerID:any;
  editcustomername:any;
  editunitname:any;
  editaddress:any;
  editgstin:any;
  editcluster:any;
  editroute:any;
  editregion:any;
  editzone:any;
  editweekoff:any;
  editworkstarttime:any;
  editworkendtime:any;
  editsecurityformalities:any;
  editaddressone:any;
  editaddresstwo:any;
  editadressthree:any;
  editpincode:any;
  editcity:any;
  editstate:any;
  editcountry:any;
  contactDetails: any;
  selectedPerticularCustomer: any;

constructor(    
  private regSv : RegistrationService,private route : Router
  ){}

ngOnInit(): void {
  this.getCustomer();
  this.getPerticularCustomerContactDetails(this.selectedPerticularCustomer);
}
  getCustomer() {
    this.regSv.getCustomer().subscribe((response: any) => {
      this.customerList = response;

      if(this.customerList.length!=0){
        this.exporting=true;
      }
      console.log("customer List")
      console.log(this.customerList);
    });
  }

  getPerticularCustomerContactDetails(data:any){
    this.selectedPerticularCustomer= data.customerID;
    this.regSv.getCustomerContactDetails(this.selectedPerticularCustomer).subscribe((result: any) => {
      this.contactDetails = result;
      console.log(this.contactDetails);
  });
}

  deleteCustomer(customerID: any) {
    this.regSv.deleteCustomer(customerID).subscribe((response: any) => {
      if (response == 'success') {
        alert('Customer Deleted');
        window.location.reload();
      } else {
        alert('Somthing Went Wrong!!');
        window.location.reload();
      }
    });
  }
  addMachine(customerId:any){}

  editCustomer(data:any){
    this.editcustomerID=data.customerID;
    if(this.editcustomerID!=null){
      this.route.navigate(['/editcustomer',this.editcustomerID]);
      
    }
    else{
      alert("Something went wrong")
    }     
  
      }

      exportTableToPDF(): void {
        const doc = new jspdf.jsPDF();
        const table = this.table.nativeElement;
    
        html2canvas(table).then((canvas) => {
          const imgData = canvas.toDataURL('image/png');
          const imgWidth = doc.internal.pageSize.getWidth();
          const imgHeight = (canvas.height * imgWidth) / canvas.width;
    
          doc.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
          doc.save('customerlist_data.pdf');
        });
      }

      exportTableToExcel(): void {
        const element = document.getElementById('tableId'); // Replace 'tableId' with the actual ID of your HTML table
      
        const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);
        const wb: XLSX.WorkBook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
      
        const excelBuffer: any = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
        this.saveAsExcelFile(excelBuffer, 'customerlist_data');
      }
      
      private saveAsExcelFile(buffer: any, fileName: string): void {
        const data: Blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8' });
        const downloadLink = document.createElement('a');
        downloadLink.href = window.URL.createObjectURL(data);
        downloadLink.download = fileName + '.xlsx';
        downloadLink.click();
      }
    
}

