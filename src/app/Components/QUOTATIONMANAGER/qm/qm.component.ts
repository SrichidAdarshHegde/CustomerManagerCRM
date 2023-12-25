import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MasterService } from 'src/app/Services/MasterService/master.service';
import { RegistrationService } from 'src/app/Services/Registration/registration.service';

@Component({
  selector: 'app-qm',
  templateUrl: './qm.component.html',
  styleUrls: ['./qm.component.css']
})
export class QMComponent {
  selectedCustomer:any;
  customerList:any;
  userName: string;
  roleId: string;
  IsLoggedIn: boolean;
  customerID: any;
  country: any;
  pincode: any;
  city: any;
  addressTwo: any;
  perticularCustomerData: any;
  addressOne: any;
  addressThree: any;
  state: any;
  machineNumber: null;
  salute: any;
  contactname: any;
  designation: any;
  email: any;
  selectedModel: any;
  mobile: any;
  contactdetailslist: any;
  contactDetails: any;
  selectedTemplate: any;
  templatelist:any;
  exporting:boolean=false;
  brochurelist: any;
  selectedBrochure: any;
  maillist: any;
  templateId: any;
  editcustomerID: any;

  constructor(
    private masterSv:MasterService,
    private regSv: RegistrationService,
    private route: Router,
    private httpService: HttpClient
  ) {
    if (localStorage.getItem('IsLoggedIn') == 'true') {
      this.userName = localStorage.getItem('UserName');
      this.roleId = localStorage.getItem('Role');
      this.IsLoggedIn = true;
    }
  }

  ngOnInit(): void {
    this.getCustomer();
    this.getTemplate();
    this.getBrochure();
    this.getMail();
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
        ModelID:this.selectedModel,
        TemplateID:this.selectedTemplate,
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
  getCustomer() {
    this.regSv.getCustomer().subscribe((response: any) => {
      this.customerList = response;
      console.log(this.customerList);
    });
  }


  
  onSelectCompany(data: any) {
    this.customerID = data.customerID;
    this.regSv
      .getPerticularCustomer(this.customerID)
      .subscribe((response: any) => {
        this.perticularCustomerData = response;
    
        this.addressOne = this.perticularCustomerData[0].addressOne;
        this.getPerticularCustomerContactDetailsForQM(this.perticularCustomerData[0].customerID);
        this.addressTwo = this.perticularCustomerData[0].addressTwo;
        this.addressThree = this.perticularCustomerData[0].addressThree;
        this.city = this.perticularCustomerData[0].city;
        this.pincode = this.perticularCustomerData[0].pincode;
        this.state = this.perticularCustomerData[0].state;
        this.country = this.perticularCustomerData[0].country;
     
      });
  }

  getTemplate(){
    this.masterSv.getTemplates().subscribe((response:any)=>{
      this.templatelist = response;
      console.log(this.templatelist)
      if(this.templatelist.length!=0){
        this.exporting=true;
      }
    })
  }

  onSelectTemplate(data: any) {
    this.selectedTemplate = data.target.value;
    console.log(this.selectedTemplate);
  }

  openTemplate(){
    this.editcustomerID = this.customerID ;
  
    this.templateId = this.selectedTemplate;
    if(this.templateId == "1003"){
      this.route.navigate(['/testqm',this.editcustomerID]);
    }else{
      alert("No Template available for this");
    }
  }

  getBrochure(){
    this.masterSv.getBrochure().subscribe((response:any)=>{
      this.brochurelist = response;
      console.log(this.brochurelist)
      if(this.brochurelist.length!=0){
        this.exporting=true;
      }
    })
  }

  onSelectBrochure(data: any) {
    this.selectedBrochure = data.target.value;
  }

  getMail(){
    this.masterSv.getMail().subscribe((response:any)=>{
      this.maillist = response;
      console.log(this.maillist)
      if(this.maillist.length!=0){
        this.exporting=true;
      }
    })
  }

  onSelectMail(data: any) {
    this.selectedBrochure = data.target.value;
  }

  newCustReg() {
    this.route.navigate(['/newcustomerregistration']); 
}

getPerticularCustomerContactDetailsForQM(id: any) {
  this.regSv.GetCustomerContactDetailsForQM(id).subscribe((result: any) => {
    this.contactDetails = result;
    console.log(this.contactDetails);
  });
}
}
