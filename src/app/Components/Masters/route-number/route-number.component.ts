import { Component } from '@angular/core';
import { MasterService } from 'src/app/Services/MasterService/master.service';
import * as XLSX from 'xlsx';

import { ElementRef, ViewChild } from '@angular/core';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-route-number',
  templateUrl: './route-number.component.html',
  styleUrls: ['./route-number.component.css'],
})
export class RouteNumberComponent {
  @ViewChild('table', { static: false }) table!: ElementRef;
  exporting:boolean=false;
  routename: any;
  routelist: any;
  p: number = 1;
  userName: any;
  roleId: any;
  IsLoggedIn: any;
  editroute:any;
  viewroute:any;
  constructor(private masterSv: MasterService) {
    if (localStorage.getItem('IsLoggedIn') == 'true') {
      this.userName = localStorage.getItem('UserName');
      this.roleId = localStorage.getItem('Role');
      this.IsLoggedIn = true;
    }
  }
  ngOnInit(): void {
    this.getRoute();
  }
  getRoute() {
    this.masterSv.getRoute().subscribe((response: any) => {
      this.routelist = response;
      console.log(this.routelist);
      if(this.routelist.length!=0){
        this.exporting=true;
      }
    });
  }
  saveRoute() {
    if (this.routename == null || this.routename == '') {
      alert("Please enter the Route Name");
      return;
    }
    var routeData = {
      RouteName: this.routename,
      CreatedBy: this.userName,
    };
    this.masterSv.saveRoute(routeData).subscribe((response: any) => {
      if (response == 'success') {
        alert('Route Saved');
        window.location.reload();
      } else {
        alert('Somthing Went Wrong!!');
        window.location.reload();
      }
    });
  }
  deleteRoute(routeid: any) {
    this.masterSv.deleteRoute(routeid).subscribe((response: any) => {
      if (response == 'success') {
        alert('Route Deleted');
        window.location.reload();
      } else {
        alert('Somthing Went Wrong!!');
        window.location.reload();
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
      doc.save('routes_data.pdf');
    });
  }
  exportTableToExcel(): void {
    const element = document.getElementById('tableId'); // Replace 'tableId' with the actual ID of your HTML table
  
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
  
    const excelBuffer: any = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    this.saveAsExcelFile(excelBuffer, 'routes_data');
  }
  
  private saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8' });
    const downloadLink = document.createElement('a');
    downloadLink.href = window.URL.createObjectURL(data);
    downloadLink.download = fileName + '.xlsx';
    downloadLink.click();
  }
  editRoute(data:any){
this.editroute=data.routeId;
this.viewroute=data.routeName;

  }
  UpdateRoute(){
    var routeData = {
      RouteId:this.editroute,
      RouteName: this.viewroute,
      CreatedBy: this.userName,
    };
    this.masterSv.updateRoute(routeData).subscribe((response: any) => {
      if (response == 'success') {
        alert('Route Updated');
        window.location.reload();
      } else {
        alert('Somthing Went Wrong!!');
        window.location.reload();
      }
    });
  }
}
