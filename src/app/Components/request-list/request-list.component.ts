import { Component, OnInit } from '@angular/core';
import { RegistrationService } from 'src/app/Services/Registration/registration.service';
import * as XLSX from 'xlsx';

import { ElementRef, ViewChild } from '@angular/core';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit{
  @ViewChild('table', { static: false }) table!: ElementRef;
  exporting:boolean=false;
  requestlist: any;
  allrequest:boolean=true;
  p: number = 1;
  userName:any;
  roleId:any;
  contactData:any;
  IsLoggedIn:any;
  userId:any;
  machineNumber:any;
  selectedCustomer:any;
  particularMachineRequestsData:any;
  perticularCustomerRequestsData:any;
  customerList:any;
  selectedCustomerid: any;
  constructor(private regSv: RegistrationService){
    if (localStorage.getItem('IsLoggedIn') == 'true') {
      this.userName = localStorage.getItem('UserName');
      this.roleId = localStorage.getItem('Role');
      this.userId = localStorage.getItem('UserID');
      this.IsLoggedIn = true;
    }
  }
  ngOnInit(): void {
    this.getrequest();
    this.getCustomer();
    
  }

  getCustomer() {
    this.regSv.getCustomer().subscribe((response: any) => {
      this.customerList = response;

      console.log(this.customerList);
    });
  }

  getrequest() {
    this.regSv.getAllrequest().subscribe((response: any) => {
      this.requestlist = response.array1;;
      this.contactData=response.array2;
      console.log(this.requestlist);
      if(this.requestlist.length!=0){
        this.exporting=true;
      }
       
      else {
        alert("No Requests Found For this Machine Number!!!")
      }
    });
  }
  onChangeMachineNumber(){
   
    //this.requestlist.splice(0, this.requestlist.length);
    this.regSv.getMachineRequestsFromMachineNumber(this.machineNumber).subscribe((response: any) => {
      if (response!= null) {
        this.requestlist = response.array1;
      this.contactData=response.array2;
      console.log(this.requestlist);
      if(this.requestlist.length!=0){
        this.exporting=true;
      }
       
      } else {
        alert("No Requests Found For this Machine Number!!!")
      }
    })
  }
  onSelectCompany(data: any){
    this.selectedCustomerid = data.customerID;
    this.regSv
      .getPerticularCustomerRequests(this.selectedCustomerid)
      .subscribe((response: any) => {
        if (response!= null) {
          this.requestlist = response.array1;
        this.contactData=response.array2;
        console.log(this.requestlist);
         
        } else {
          alert("No Requests Found For Selected Customer!!!")
        }
      });
  }
  exportTableToPDF(): void {
    const doc = new jspdf.jsPDF();
    const table = this.table.nativeElement;

    html2canvas(table).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const imgWidth = doc.internal.pageSize.getWidth();
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      doc.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      doc.save('requestlist_data.pdf');
    });
  }
  exportTableToExcel(): void {
    const element = document.getElementById('tableId'); // Replace 'tableId' with the actual ID of your HTML table
  
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
  
    const excelBuffer: any = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    this.saveAsExcelFile(excelBuffer, 'requestlist_data');
  }
  
  private saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8' });
    const downloadLink = document.createElement('a');
    downloadLink.href = window.URL.createObjectURL(data);
    downloadLink.download = fileName + '.xlsx';
    downloadLink.click();
  }
  }
  
  

