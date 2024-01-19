import { Component, ElementRef, ViewChild } from '@angular/core';
import html2canvas from 'html2canvas';
import { RegistrationService } from 'src/app/Services/Registration/registration.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-rapid-ispares',
  templateUrl: './rapid-ispares.component.html',
  styleUrls: ['./rapid-ispares.component.css']
})
export class RapidIsparesComponent {
  @ViewChild('table', { static: false }) table!: ElementRef;
  exporting:boolean=false;
  RefNo: any;
  tableLength: any;
  generateMachineNo: any;
  userName: any;
  roleId:any;
  IsLoggedIn: any;
  RefID:any ;
  billingAddress:any;
  reflist:any;
  customerList: any;
  customer:any;
  customerID: any;
  selectedPerticularaddress: any;
  EditBillingAddress: boolean;
  selectedcustID: any;
  customerdata: any;
  TemplateID:any;

 
  editableVisionQtyA: string = '1 No';
  editableVisionPriceA:number=6500;
  editableVisionQtyB: string = '1 Time';
  editableVisionPriceB:number=4200;

 
  VisionQtyA: string = '1 No';
  VisionPriceA: number =6500 ; 
  VisionQtyB: string = '1 Time';
  VisionPriceB: number =4200 ; 

  convertToWords:any;
  TemplateName: string = "Rapid-I-SPARES";
  CustomerName:any;
  TotalAmount: number;


  constructor(private regSv:RegistrationService , private router: ActivatedRoute, private route: Router){
    if (localStorage.getItem('IsLoggedIn') == 'true'){
      this.userName = localStorage.getItem('UserName');
      this.roleId = localStorage.getItem('Role');
      this.IsLoggedIn = true;
    }
 
  
  this.router.params.subscribe(params => {
    if (params["id"]) {
      this.customerID = params["id"];
    }
  });
  window.scrollTo(0, 0);

  }


  ngOnInit(): void {
    this.getRefNo(); 
    this.getBillingAddress();
   
  }

  getEnquiry() {
    return this.regSv.getData('enquiry');
  }


  print (printSectionId) {
    var innerContents = document.getElementById(printSectionId).innerHTML;
    var popupWinindow = window.open('', '_blank', 'width=600,height=700,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=yes');
    popupWinindow.document.open();
    popupWinindow.document.write('<html> <head><style> '+ '.sign{text-align:right;margin-left:-25px} '+ ' .logo{text-align:right;margin-right:-5px;top:0;right:0;} .   ' + ' .abc{background-color: rgb(212, 212, 212)} '+ '  </style>  </head><body onload="window.print()">' + innerContents + '</html>');
    popupWinindow.document.close();
    //window.print();
  };

  public value = new Date();


getBillingAddress(){
    this.selectedcustID= this.customerID;
    this.regSv.getCustomerBillingAddress(this.selectedcustID).subscribe((result: any) => {
      this.customerdata = result;
      console.log(this.customerdata);
      this.billingAddress=this.customerdata[0].billingAddress;
      this.EditBillingAddress = false;
  });
}

  getRefNo() {
    this.regSv.GetRefNo().subscribe((result: any) => {
      if (this.RefID == null || this.RefID == '') {
        this.tableLength = result.length + 1;
        this.RefID = this.tableLength.toString().padStart(3, '0'); // Assuming result is an array or collection
      }
    });
  }

  updateTemplate() {
  
    const previousValues = {
      VisionQtyA:this.VisionQtyA,
      VisionPriceA:this.VisionPriceA,
    
      VisionQtyB:this.VisionQtyB,
      VisionPriceB:this.VisionPriceB,
    
      
    };


    this.VisionQtyA = this.VisionQtyA;

    this.VisionPriceA = this.VisionPriceA;
    this.VisionQtyB = this.VisionQtyB;
    this.VisionPriceB = this.VisionPriceB;
   

    const changesMade = Object.keys(previousValues).some(key => previousValues[key] !== this[key]);
 if (changesMade) {
    alert('Changes made successfully.');
  } else {
    alert('No changes made or something went wrong.');
  }

  // Reset the editable values

}


  fetchTemplate() {
    this.regSv.getRapidisparesdetails(this.RefID).subscribe((response: any) => {
    

      this.billingAddress = response.billingAddress;
      this.VisionPriceA = response.VisionPriceA;
  
      this.VisionQtyA = response.VisionQtyA;
      this.VisionQtyB = response.VisionQtyB;
  
      this.VisionPriceB = response.VisionPriceB;
     
  this.TemplateName=response.TemplateName;
      // this.KindAttention = response.KindAttention;
    });
  }

  save(){
    this.TotalAmount = this.VisionPriceA + this.VisionPriceB;
   
    // Create the templateData object
    const templateData = {
      
  RefID : this.RefID,
  billingAddress:this.billingAddress,

  VisionQtyA:this.VisionQtyA,
  VisionPriceA:this.VisionPriceA,

  VisionQtyB:this.VisionQtyB,
  VisionPriceB:this.VisionPriceB,

 

  CreatedBy :this.userName,


  TemplateID:this.TemplateID,
  TemplateName:this.TemplateName,
  CustomerName:this.CustomerName,
  TotalAmount:this.TotalAmount,
   
     


      
    }
    this.regSv.postSaverapidspares(templateData).subscribe((response:any )=>
      {
        if(response !=null){
          this.billingAddress=this.billingAddress,
    this.VisionQtyA=this.VisionQtyA,
    this.VisionPriceA=this.VisionPriceA,
    this.VisionQtyB=this.VisionQtyB,
    this.VisionPriceB=this.VisionPriceB,


          alert("Saved Successfully")
         // window.location.reload()
        }
        else
        {
          alert("Somthing Went Wrong!!")
          //window.location.reload()
        } 
      })
    
   
  }
}
