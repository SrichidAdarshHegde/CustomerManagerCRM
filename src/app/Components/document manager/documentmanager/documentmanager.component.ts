import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MasterService } from 'src/app/Services/MasterService/master.service';
import { RegistrationService } from 'src/app/Services/Registration/registration.service';

@Component({
  selector: 'app-documentmanager',
  templateUrl: './documentmanager.component.html',
  styleUrls: ['./documentmanager.component.css']
})
export class DocumentmanagerComponent {
  customerList: any;
  modellist: any;
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
  region: any;
  zone: any;
  weeklyOff: any;
  workingStart: any;
  workingEnd: any;
  securityFormalities: any;
  userName: any;
  roleId: any;
  IsLoggedIn: any;
  selectedCustomer: any;
  perticularCustomerData: any;
  selectedModel: any;
  invoiceNumber: any;
  invoicedoc: any;
  invoiceamount: any;
  invoicedate: any;
  selectedFeatures: any = [];
  featureslist: any;
  invoiceperticularlist: any;
  selectedinvoiceperticular: any;
  warrantyTill: any;
  warrantyFrom: any;
  machineNumber: any;
  mobile: any;
  email: any;
  dueamount:any;
  designation: any;
  contactname: any;
  salute: any;
  selectedOptions: any = [];
  contactdetailslist: any = [];
  files2: any;
  docs: any;
  customerID: any;
  perticularMachineData: any;
  machineList: any[];
  companyName: any;
  custID: any;
  getPerticularCustomerContactDetails: any[];
  features: any;
  invoicePerticular: any;
  machineSelected: boolean;
  selectedrequest: null;
  selectedMachine: string | Blob;
  MachineNo: string | Blob;
  selectedsands: any;
  Resolution: string | Blob;
  foult: string | Blob;
  contactDetails: any;
  constructor(
    private regSv: RegistrationService,
    private masterSv: MasterService,
    private httpService: HttpClient,
    private route: Router
  ) {
    if (localStorage.getItem('IsLoggedIn') == 'true') {
      this.userName = localStorage.getItem('UserName');
      this.roleId = localStorage.getItem('Role');
      this.IsLoggedIn = true;
    }
  }
  ngOnInit(): void {
    this.getCustomer();
    this.getModel();
    this.getFeatures();
    this.getInvoicePerticular();
  }
  getInvoicePerticular() {
    this.masterSv.getInvoicePerticular().subscribe((response: any) => {
      this.invoiceperticularlist = response;
      console.log(this.invoiceperticularlist);
    });
  }
  getFeatures() {
    
    this.masterSv.getFeatures().subscribe((response: any) => {
      this.featureslist = response.map((feature: any) => ({
        label: feature.featuresName,
        value: feature.featuresId,
      }));
      console.log(this.featureslist);
    });
  }
  getModel() {
    this.masterSv.getModel().subscribe((response: any) => {
      this.modellist = response;
      console.log(this.modellist);
    });
  }
  getCustomer() {
    this.regSv.getCustomer().subscribe((response: any) => {
      this.customerList = response;
      console.log(this.customerList);
    });
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
          this.machineList = [];
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
            this.getPerticularCustomerContactDetailss(this.perticularCustomerData[0].customerID);
            console.log(this.perticularCustomerData[0].customerID);
            console.log(this.perticularCustomerData);
            this.unit = this.perticularCustomerData[0].unit;
            this.addressOne = this.perticularCustomerData[0].addressOne;
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
            this.machineList = [];

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

 
  onSelectModel(data: any) {
    this.selectedModel = data.target.value;
  }
  
  onSelectInvoiceperticular(data: any) {
    this.selectedinvoiceperticular = data.target.value;
  }
  
  onSelectFeature(): void {
    console.log(this.selectedFeatures);
  }
  addContactDetails() {
    if (this.machineNumber != null && this.customerID != null) {
      var contactdata = {
        Salute: this.salute,
        ContactName: this.contactname,
        Designation: this.designation,
        Email: this.email,
        Mobile: this.mobile,
        MachineId: this.machineNumber,
        MachineNumber: this.machineNumber,
        CustomerId: this.selectedCustomer.customerID,
        CreatedBy: this.userName,
        ModelID:this.selectedModel
      };
      this.regSv.postcontactdetails(contactdata).subscribe((response: any) => {
        if (response != null) {
          this.contactdetailslist = response;
          console.log(this.contactdetailslist)
        } else {
          alert('Something Went Wrong!!!');
        }
      });
      this.salute = '';
      this.contactname = '';
      this.designation = '';
      this.email = '';
      this.mobile = '';
    } else {
      alert('Please select Customer/ Enter Machine Number');
    }
  }

onselectdoc(event: any) {
  var fileslist2 = "";
  this.files2 = [].slice.call(event.target.files);
  fileslist2 = this.files2[0];
  this.docs = fileslist2;
}
uploadInvoice(){
  const frmData = new FormData();
  frmData.append("MachineNumber", this.machineNumber);
    frmData.append("CustomerId", this.selectedCustomer.customerID);
    frmData.append("ModelId", this.selectedModel);
    frmData.append("CreatedBy", this.userName);
    frmData.append("InvoiceNumber", this.invoiceNumber);
    frmData.append("document", this.docs);
    frmData.append("InvoiceAmount",this.invoiceamount);
    frmData.append("DueAmount",this.dueamount);
this.httpService.post('http://localhost:44303/api/MachineRegistration/UploadInvoice/',frmData).subscribe((data:any) => {
          if(data == "success"){
            alert("Document Uploaded Successfully!!")
          }else{
            alert("Somthing Went Wrong!!")
          }  
        })
}

getPerticularCustomerContactDetailss(id: any) {
  this.regSv.getCustomerContactDetailss(id).subscribe((result: any) => {
    this.contactDetails = result;
    console.log(this.contactDetails);
  });
}
  registerMachine() {
    const frmData = new FormData();
    frmData.append("MachineNumber", this.machineNumber);
      frmData.append("ModelId", this.selectedModel);
      frmData.append("CustomerId", this.selectedCustomer.customerID);
      
      //frmData.append("Features", this.selectedFeatures);
      frmData.append("Features", JSON.stringify(this.selectedFeatures));

      // Append the individual features to the FormData object
      this.selectedFeatures.forEach((feature: string, index:number) => {
        frmData.append(`Features[${index}]`, feature);
       // frmData.append(`Features[${index}].value`, feature.value);
      });
      
      frmData.append("InvoiceNumber", this.invoiceNumber);
      frmData.append("InvoiceDate", this.invoicedate);
      frmData.append("InvoiceAmount", this.invoiceamount);
      frmData.append("DueAmount",this.dueamount);
      frmData.append("InvoicePerticularId", this.selectedinvoiceperticular);
      frmData.append("WarrantyFrom", this.warrantyFrom);
      frmData.append("WarrantyTill", this.warrantyTill);
      frmData.append("CreatedBy", this.userName);
  this.httpService.post('http://localhost:44303/api/MachineRegistration/PostMachineRegistration/',frmData).subscribe((data:any) => {
            if(data == "success"){
              alert("Machine Registartion Successfull");
              this.route.navigate(['/machineLists'])
            }else{
              alert("Somthing Went Wrong!!")
            }  
          })




  }

  navigateCustomerRegistrationComponent() {
    // Navigate to the '/mailquotationtemplate' route
    this.route.navigate(['/newcustomerregistration']);
}

}
