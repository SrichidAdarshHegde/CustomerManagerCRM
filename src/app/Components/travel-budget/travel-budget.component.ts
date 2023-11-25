import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegistrationService } from 'src/app/Services/Registration/registration.service';
import * as XLSX from 'xlsx';

import { ElementRef, ViewChild } from '@angular/core';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-travel-budget',
  templateUrl: './travel-budget.component.html',
  styleUrls: ['./travel-budget.component.css']
})
export class TravelBudgetComponent {
  @ViewChild('table', { static: false }) table!: ElementRef;

  perticularCustomerData: any;
  selectedCustomer: any;
  custID: any;
  companyName: any;
  p: number = 1;
  // machineNumber: any;
  customerID: any;
  customerList: any;
  rows: any[] = [];
  machineNumber: string = '';
  purpose: any;
  clusterLoc: any;
  interDist: any;
  cummDist: any;
  actualODORead: any;
  travelTime: any;
  timeForJob: any;
  schd: any;
  actualTime: any;
  mileage: any;
  cngPrev: any;
  cng: any;
  userName: any;
  roleId: any;
  IsLoggedIn: any;
  tableLength: any;
  MachineNo: any;
  TravelId: any;
  TripId: any;
  userId: any;
  uniqueTravelID: any;
  budgetList: any=[];
  addedTime: any;

  removeColon: any;
  totaltime: any;
  document: any;
  totalMinutes:any;
  totalTime:any;
  totalHours:any;
  timetaken: any=[];
  displayCalculatedTime: any;

  constructor(private regSv: RegistrationService, private router:ActivatedRoute, private route:Router) {
    if (localStorage.getItem('IsLoggedIn') == 'true') {
      this.userName = localStorage.getItem('UserName');
      this.roleId = localStorage.getItem('Role');
      this.userId = localStorage.getItem('UserID');

      this.IsLoggedIn = true;
    }

    this.router.params.subscribe(params => {
      if (params["id"]) {
        this.TravelId = params["id"];
      }
    });
    window.scrollTo(0, 0);
  }
  ngOnInit(): void {
    this.getCustomer();
    this.getTravelId();
    this.getTravelBudgetbyTravelId();
  }
  getTravelBudgetbyTravelId() {
    this.regSv.GetTravelBudgetbyTravelId(this.TravelId).subscribe((response: any) => {
      this.budgetList = response;

      for (let i = 0; i < this.budgetList.length; i++) {
        if (i > 0) {
          if (this.budgetList[i].estTimeForJob == null) {
            const converttodatetime = new Date(this.budgetList[i].estTravelTime);
            const startTimeHours = converttodatetime.getHours();
            const startTimeMin = converttodatetime.getMinutes();
  
            const converttodatetime1 = new Date(this.budgetList[i - 1].schdETD);
            const endTimeHours = converttodatetime1.getHours();
            const endTimeMin = converttodatetime1.getMinutes();
            const addedHours = startTimeHours + endTimeHours;
            const addedMinutes = startTimeMin + endTimeMin;
  
            this.addedTime = new Date();
            this.addedTime.setHours(addedHours, addedMinutes);
            console.log(this.addedTime);
            this.budgetList[i].schdETD = this.addedTime;
          } else if (this.budgetList[i].estTravelTime == null) {
            const converttodatetime = new Date(this.budgetList[i].estTimeForJob);
            const startTimeHours = converttodatetime.getHours();
            const startTimeMin = converttodatetime.getMinutes();
  
            const converttodatetime1 = new Date(this.budgetList[i - 1].schdETD);
            const endTimeHours = converttodatetime1.getHours();
            const endTimeMin = converttodatetime1.getMinutes();
            const addedHours = startTimeHours + endTimeHours;
            const addedMinutes = startTimeMin + endTimeMin;
  
            this.addedTime = new Date();
            this.addedTime.setHours(addedHours, addedMinutes);
            console.log(this.addedTime);
            this.budgetList[i].schdETD = this.addedTime;
          }
        }
      }






//       const timeValues = this.budgetList.map((row: { schdETD: any; }) => row.schdETD);

// // Convert time values to Date objects for easier manipulation
// const dateObjects = timeValues.map((time: any) => new Date(`1970-01-01T${time}:00Z`));

// // Calculate the time difference between the first and last items
// const timeDifference = dateObjects[dateObjects.length - 1] - dateObjects[0];

// // Convert the time difference to hours and minutes
// const hours = Math.floor(timeDifference / (1000 * 60 * 60));
// const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
// this.totalTime = hours+":"+minutes







      const converttodatetime1 = new Date(this.budgetList[0].schdETD); 
      const startHour = converttodatetime1.getHours();
      const startMinute = converttodatetime1.getMinutes();
      const endHour = this.budgetList[this.budgetList.length - 1].schdETD.getHours();
      const endMinute = this.budgetList[this.budgetList.length - 1].schdETD.getMinutes();
  
      const totalMinutes = endMinute - startMinute;
      const totalHours = endHour - startHour;
  
      const totalTime = new Date();
      totalTime.setHours(totalHours, totalMinutes);
      //console.log(totalTime);
      this.timetaken.push(totalTime);
      console.log(this.timetaken);
      this.displayCalculatedTime = this.timetaken[0];
      return totalTime.toString();

    });

  
   
  }
  
  
  goToTripSheet(){
    this.route.navigate(['/tripsheet']);
  }

  public value = new Date();

  getTravelId() {
    this.regSv.GetTravelBudget().subscribe((result: any) => {
      if(this.TravelId == null || this.TravelId == '')
      {
      this.tableLength = result.length+1; // Assuming result is an array or collection
      this.TravelId = this.generateMachineNo(this.tableLength);
    }
    })
  }

  generateMachineNo(tableLength: number): string {
    // Ensure tableLength is a single digit (0-9)
    if (tableLength < 0) {
      tableLength = 0;
    } else if (tableLength > 9) {
      tableLength = 9;
    }
    // Convert tableLength to a 3-digit string by padding it
    const paddedTableLength = tableLength.toString().padStart(3, '0');
    return paddedTableLength;
  }
  
  

  onChangeMachineNumber() {
    this.regSv.getMachineFromMachineNumber(this.machineNumber).subscribe((response: any) => {
      if (response == null) {
        alert("No Machine Found!!!")
      } else {
        this.perticularCustomerData = response;
        console.log(this.perticularCustomerData);
        this.selectedCustomer = this.perticularCustomerData[0].companyName;
        // this.custID = this.perticularCustomerData[0].customerId;
        //this.companyName = this.perticularCustomerData[0].companyName;

      }
    })
  }

  onSelectCompany(data: any) {
    this.customerID = data.customerID;
    this.regSv
      .getPerticularCustomer(this.customerID)
      .subscribe((response: any) => {
        if (response != null) {
          this.perticularCustomerData = response;
          this.selectedCustomer = this.perticularCustomerData[0].companyName;
          this.custID = this.perticularCustomerData[0].customerId;

        } else {
          alert("No Requests Found For Selected Customer!!!")
        }
      });
  }
  getCustomer() {
    this.regSv.getCustomer().subscribe((response: any) => {
      this.customerList = response;
      console.log(this.customerList);
    });
  }

  save(){
    if (this.machineNumber == null || this.machineNumber == '') {
      alert("Please Enter Machine Number");
    } else if (this.selectedCustomer == null || this.selectedCustomer == '') {
      alert("Please Select Customer");
    }else if (this.purpose == null || this.purpose == '') {
      alert("Please Enter Purpose");
    } else {
    var TravelBudgetList = {
      UserId : this.userId,
      UserName:this.userName,
      MachineNumber: this.machineNumber,
      CustomerName: this.selectedCustomer,
      Purpose: this.purpose,
      ClusterLocation: this.clusterLoc,
      EstInterDistance: this.interDist,
      EstCompanyDistance: this.cummDist,
      ActualODOReading: this.actualODORead,
      EstTravelTime: this.travelTime,
      EstTimeForJob: this.timeForJob,
      SchdETD: this.schd,
      ActualTime: this.actualTime,
      CNG :this.cng,
      Mileage:this.mileage,
      CNGFilledPreviously:this.cngPrev,
      TravelId:this.TravelId,
      // TripId:this.TripId
    }
    // console.log(TravelBudgetList);
    this.regSv.saveTravelBudget(TravelBudgetList).subscribe((Response:any) =>{
      if(Response == "success")
      {
        alert('Record Saved Successfully');
        window.location.reload();
        }else{
          alert('Error In Saving Record')
          }
    });
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
      doc.save('travel_budget.pdf');
    });
  }
  
  exportTableToExcel(): void {
    const element = document.getElementById('tableId'); // Replace 'tableId' with the actual ID of your HTML table
  
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
  
    const excelBuffer: any = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    this.saveAsExcelFile(excelBuffer, 'travel_budget');
  }
  
  private saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8' });
    const downloadLink = document.createElement('a');
    downloadLink.href = window.URL.createObjectURL(data);
    downloadLink.download = fileName + '.xlsx';
    downloadLink.click();
  }
}
function diff(s1: any, string: any, s2: any, string1: any) {
  throw new Error('Function not implemented.');
}

