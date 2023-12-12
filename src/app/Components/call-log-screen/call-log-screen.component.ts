import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, interval, map, startWith } from 'rxjs';
import { MasterService } from 'src/app/Services/MasterService/master.service';
import { RegistrationService } from 'src/app/Services/Registration/registration.service';

@Component({
  selector: 'app-call-log-screen',
  templateUrl: './call-log-screen.component.html',
  styleUrls: ['./call-log-screen.component.css']
})
export class CallLogScreenComponent {
  machineNumber: any;
  requestlist: any;
  contactData: any;
  selectedCustomer: any;
  customerList: any;
  perticularCustomerData: any;
  unit: any;
  addressOne: any;
  addressTwo: any;
  addressThree: any;
  city: any;
  pincode: any;
  state: any;
  country: any;
  gstin: any;
  cluster: any;
  routeNo: any;
  zone: any;
  region: any;
  weeklyOff: any;
  workingStart: any;
  workingEnd: any;
  securityFormalities: any;
  customerID: any;
  companyName: any;
  selectedMachine: any;
  custID: any;

  perticularCustomerInvoiceData: any;
  warrantyTill: any;
  warrantyFrom: any;
  features: any;
  tableLength: any;
  ManuscriptNo: any;
  MachineNo: any;
  interactiondata: any;
  requestslist: any = [];
  selectedCallEntry: any;
  Priority: any;
  priority: any;
  selectedPriority: any;
  selpriority: any;
  foult: any;
  Resolution: any;
  selectedRequest: any;
  selectedrequest: any;
  sandslist: any;
  selectedsands: any;
  userName: any;
  roleId: any;
  IsLoggedIn: any;
  invoicePerticular: any;
  machineList: any;
  perticularMachineData: any;
  teleSupportList: any = [];
  fieldVisitList: any = [];
  selectedTeleSupport: any;
  selectedFieldVisit: any;
  combinedList: any;
  teleSupportRequests: any;
  teleSupportrequestslist: any = [];
  fieldVisitRequests: any;
  fieldVisitRequestslist: any = [];
  selectedrequestt: any;
  selectedrequestf: any;
  contactDetails: any;
  customerTicketList: any;
  mobile: any;
  selectedModel: any;
  email: any;
  designation: any;
  contactname: any;
  salute: any;
machineSelected: boolean = false;
  tokenNo: any;
  constructor(private regSv: RegistrationService,
    private masterSv: MasterService, private httpService: HttpClient,
    private route: Router) {
    if (localStorage.getItem('IsLoggedIn') == 'true') {
      this.userName = localStorage.getItem('UserName');
      this.roleId = localStorage.getItem('Role');
      this.IsLoggedIn = true;
    }
  }
  public systemTime: Observable<Date>;
  ngOnInit(): void {
    this.getCustomer();
    this.getTokenNo();
    this.getRequests();
    this.getSands();
    this.systemTime = interval(1000).pipe(
      startWith(0),
      map(() => new Date())
    );
    // this.getAttendedBybyid(this.customerID);
  }
  public value = new Date();

  //  getAttendedBybyid(data:any){
  //   this.customerID = data.customerID;
  //   this.regSv
  //   .getAttendedby(this.customerID)
  //     .subscribe((response: any) => {
  //       if (response == null) {
  //         alert("No User Found!!!")
  //       } else {
  //       this.interactiondata = response;
  //       }
  //  });
  // }

  // getRequests() {
  //   this.masterSv.getRequests().subscribe((response: any) => {
  //     console.log(response);
  //     const mappedRequests: { label: string; value: any }[] = response.map((requests: any) => ({
  //       label: requests.requestsName,
  //       value: requests.requestsId,
  //     }));
  //     this.requestslist = mappedRequests.sort((a: { label: string }, b: { label: string }) =>
  //       a.label.localeCompare(b.label)
  //     );

  //     console.log(this.requestslist);
  //   });
  // }

  getRequests() {
    this.masterSv.getRequests().subscribe((response: any) => {
      this.combinedList = response;

      this.teleSupportRequests = this.combinedList.filter((item: any) => item.priority.startsWith('T'));
      const mappedTeleSupportRequests: { label: string; value: any }[] = this.teleSupportRequests.map((requests: any) => ({
        label: requests.requestsName,
        value: requests.requestsId,
      }));
      this.teleSupportrequestslist = mappedTeleSupportRequests.sort((a: { label: string }, b: { label: string }) =>
        a.label.localeCompare(b.label)
      );
      console.log(this.teleSupportrequestslist);
      //fieldVisit Requests Lists
      this.fieldVisitRequests = this.combinedList.filter((item: any) => item.priority.startsWith('F'));
      const mappedFieldRequests: { label: string; value: any }[] = this.fieldVisitRequests.map((requests: any) => ({
        label: requests.requestsName,
        value: requests.requestsId,
      }));
      this.fieldVisitRequestslist = mappedFieldRequests.sort((a: { label: string }, b: { label: string }) =>
        a.label.localeCompare(b.label)
      );

      console.log(this.fieldVisitRequestslist);
    });
  }

  getTokenNo() {
    this.regSv.GetMachineId().subscribe((result: any) => {
      this.tableLength = result.length + 1; // Assuming result is an array or collection
      this.tokenNo = this.tableLength.toString().padStart(4, '0');
    })
  }
 
  // generateMachineNo(tableLength: number): string {
  //   if (tableLength < 0) {
  //     tableLength = 0;
  //   } else {
  //     tableLength = tableLength;
  //   }
  //   // Create a 5-digit number with the last digit as tableLength
  //   const paddedTableLength = tableLength.toString().padStart(4, '0');
  //   return paddedTableLength;
  // }

  getSands() {
    this.masterSv.getSands().subscribe((response: any) => {
      this.sandslist = response.map((sands: any) => ({
        label: sands.sandsName,
        value: sands.sandsId,
      }));
      console.log(this.sandslist);
    })
  }

  onRowClick(machineNumber: string) {
    this.selectedMachine = machineNumber;
    console.log(this.selectedMachine);
    this.onChangeMachineNumber();
  }
  onChangeMachineNumber() {
    this.regSv.getMachineFromMachineNumber(this.selectedMachine).subscribe((response: any) => {
      if (response == null) {
        alert("No Machine Found!!!")
      } else {
        this.perticularCustomerData = response;
        console.log(this.perticularCustomerData);
        this.selectedCustomer = this.perticularCustomerData[0].companyName;
        this.custID = this.perticularCustomerData[0].customerId;
        this.companyName = this.perticularCustomerData[0].companyName;
        this.GetInvoicesCustomer(this.perticularCustomerData[0].customerId);
        this.getPerticularCustomerContactDetails(this.perticularCustomerData[0].customerId);
        this.getCustomerTickets(this.perticularCustomerData[0].customerId);
        console.log(this.perticularCustomerData[0].customerId);
        this.unit = this.perticularCustomerData[0].unit;
        this.addressOne = this.perticularCustomerData[0].addressOne;
        this.addressTwo = this.perticularCustomerData[0].addressTwo;
        this.addressThree = this.perticularCustomerData[0].addressThree;
        this.city = this.perticularCustomerData[0].city;
        this.pincode = this.perticularCustomerData[0].pincode;
        this.state = this.perticularCustomerData[0].state;
        this.country = this.perticularCustomerData[0].country;
        this.gstin = this.perticularCustomerData[0].gstin;
        this.cluster = this.perticularCustomerData[0].cluster;
        this.routeNo = this.perticularCustomerData[0].routeNumber;
        this.region = this.perticularCustomerData[0].region;
        this.zone = this.perticularCustomerData[0].zone;
        this.weeklyOff = this.perticularCustomerData[0].weeklyOff;
        this.workingStart = this.perticularCustomerData[0].workingStart;
        this.workingEnd = this.perticularCustomerData[0].workingEnd;
        this.warrantyFrom = this.perticularCustomerData[0].warrantyFrom;
        this.warrantyTill = this.perticularCustomerData[0].warrantyTill;
        this.features = this.perticularCustomerData[0].features;
        this.invoicePerticular = this.perticularCustomerData[0].invoicePerticular;

        this.securityFormalities =
          this.perticularCustomerData[0].securityFormalities;

      }
      console.log('Selected Machine Number:', this.selectedMachine);
    })
  }
  onSelectCompany(data: any) {
    this.customerID = data.companyName;
    this.regSv.getMachineInLocation(this.customerID)
      .subscribe((response: any) => {
        if (response == null) {
          alert("No Machine Found!!!");
        } else {
          this.perticularMachineData = [];
          this.perticularMachineData = response;
          console.log(this.perticularMachineData);

          // Clear existing machineList and then populate with new data
          this.machineList = [];
          // Loop through the machines and populate the machineList
          for (const machine of this.perticularMachineData) {
            this.machineList.push({
              machineNumber: machine.machineNumber,
              machineInLocation: machine.machineInLocation,
              modelName: machine.modelName
            });
          }
        }
      });
    if (this.perticularMachineData != 0) {
      this.regSv
        .getPerticularCust(this.customerID)
        .subscribe((response: any) => {
          if (response != null) {
            this.perticularCustomerData = response;
            this.companyName = this.perticularCustomerData[0].companyName;
            this.custID = this.perticularCustomerData[0].customerID;
            // this.GetInvoicesCustomer(this.perticularCustomerData[0].customerId);
            // console.log(this.perticularCustomerData[0].customerId);  
            this.getPerticularCustomerContactDetails(this.perticularCustomerData[0].customerID);
            // this.getCustomerTickets(this.perticularCustomerData[0].customerID);
            console.log(this.perticularCustomerData[0].customerID);
            console.log(this.perticularCustomerData);
            this.unit = this.perticularCustomerData[0].unit;
            this.addressOne = this.perticularCustomerData[0].addressOne;
            this.addressTwo = this.perticularCustomerData[0].addressTwo;
            this.addressThree = this.perticularCustomerData[0].addressThree;
            this.city = this.perticularCustomerData[0].city;
            this.pincode = this.perticularCustomerData[0].pincode;
            this.state = this.perticularCustomerData[0].state;
            this.country = this.perticularCustomerData[0].country;
            this.gstin = this.perticularCustomerData[0].gstin;
            this.cluster = this.perticularCustomerData[0].cluster;
            this.routeNo = this.perticularCustomerData[0].routeNumber;
            this.region = this.perticularCustomerData[0].region;
            this.zone = this.perticularCustomerData[0].zone;
            this.weeklyOff = this.perticularCustomerData[0].weeklyOff;
            this.workingStart = this.perticularCustomerData[0].workingStart;
            this.workingEnd = this.perticularCustomerData[0].workingEnd;
            this.warrantyFrom = this.perticularCustomerData[0].warrantyFrom;
            this.warrantyTill = this.perticularCustomerData[0].warrantyTill;
            this.features = this.perticularCustomerData[0].features;
            this.invoicePerticular = this.perticularCustomerData[0].invoicePerticular;
            this.securityFormalities =
              this.perticularCustomerData[0].securityFormalities;
             
          } else {
            alert("Something went wrong!!!")
          }
        });
        this.machineSelected = true;
    }

    else {
      this.regSv.getMachineInLocation(this.customerID)
        .subscribe((response: any) => {
          if (response == null) {
            alert("No Machine Found!!!");
          } else {
            this.perticularMachineData = response;
            console.log(this.perticularMachineData);

            // Clear existing machineList and then populate with new data
            this.machineList = [];

            // Loop through the machines and populate the machineList
            for (const machine of this.perticularMachineData) {
              this.machineList.push({
                machineNumber: machine.machineNumber,
                machineInLocation: machine.machineInLocation,
                modelName: machine.modelName
              });
            }
          }
        });
    }
  }

  clear() {
    window.location.reload();
  }

  saveRequest() {
    // if(this.selectedMachine == null || this.selectedMachine == ""){
    //   alert('Machine Number is required');
    // }else 
    if (this.selectedrequest == null || this.selectedrequest == "") {
      alert('Please select request type');
    }
    //else if(this.selectedsands == null || this.selectedsands == ""){
    //   alert('Please select S and S');
    // }
    else {
      const frmData = new FormData();
      frmData.append("MachineNumber", this.selectedMachine);
      frmData.append("CustomerId", this.custID);
      frmData.append("CustomerName", this.companyName);
      frmData.append("TokenNo", this.MachineNo);

      frmData.append("RequestFor", JSON.stringify(this.selectedrequest));

      this.selectedrequest.forEach((requestfor: string, index: number) => {
        frmData.append(`RequestFor[${index}]`, requestfor);
      });

      frmData.append("SandS", JSON.stringify(this.selectedsands));

      frmData.append("Remarks", this.foult);
      frmData.append("Resolution", this.Resolution);
      frmData.append("CreatedBy", this.userName);
      this.httpService.post('http://localhost:44303/api/RequestAndInteractions/PostSaveRequestForm/', frmData).subscribe((data: any) => {
        if (data == "success") {
          alert("Request Saved");
          this.route.navigate(['/dashboard'])
        } else {
          alert("Somthing Went Wrong!!")
        }
      })
    }
  }

  onSelectCallEntry() {
    if (this.selectedCallEntry) {
      const selectedRequest = this.requestslist.find((requestslist: any) => requestslist.requestsId === this.selectedCallEntry);
      if (selectedRequest) {
        this.selectedPriority = selectedRequest.priority;
      }
    }
  }
  onSelectRequest() {
    if (this.selectedrequestt != null) {
      this.selectedrequest = this.selectedrequestt;
    } else {
      this.selectedrequest = this.selectedrequestf;
    }
    console.log(this.selectedrequest);
  }
  onSelectsands() {
    console.log(this.selectedsands);
  }

  GetInvoicesCustomer(id: any) {
    this.regSv
      .getPerticularCustomerInvoice(id)
      .subscribe((response: any) => {
        this.perticularCustomerInvoiceData = response;
        console.log(this.perticularCustomerInvoiceData);

      });
  }

  getPerticularCustomerContactDetails(id: any) {
    this.regSv.getCustomerContactDetails(id).subscribe((result: any) => {
      this.contactDetails = result;
      console.log(this.contactDetails);
    });
  }

  getCustomerTickets(id: any) {
    this.regSv.getCustomerTickets(id).subscribe((res: any) => {
      this.customerTicketList = res;
      console.log(this.customerTicketList);
    });
  }
  getCustomer() {
    this.regSv.getCustomer().subscribe((response: any) => {
      this.customerList = response;
      console.log(this.customerList);
    });
  }
  addContactDetails() {
      var contactdata = {
        Salute: this.salute,
        ContactName: this.contactname,
        Designation: this.designation,
        Email: this.email,
        Mobile: this.mobile,
        MachineId: this.selectedMachine,
        MachineNumber: this.selectedMachine,
        CustomerId: this.custID,
        CreatedBy: this.userName,
     
      };
      this.regSv.postcontactdetails(contactdata).subscribe((response: any) => {
        if (response != null) {
          alert('Contact added successfully!');
        } else {
          alert('Something Went Wrong!!!');
        }
      });
  }
}
