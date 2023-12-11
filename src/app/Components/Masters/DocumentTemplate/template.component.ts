import { Component, ElementRef, ViewChild } from '@angular/core';
import html2canvas from 'html2canvas';

import { MasterService } from 'src/app/Services/MasterService/master.service';
import * as XLSX from 'xlsx';
import * as jspdf from 'jspdf';


@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent {
  @ViewChild('table', { static: false }) table!: ElementRef;
  exporting:boolean=false;
    p: number = 1;
    username :any;
  TemplateName: any;
  TemplateList: any;
  documentTemplateID: any;
  viewdocumentTemplate: any;
  userName: any;
  roleId:any;
  IsLoggedIn: any;
 
    constructor(private masterSv:MasterService)
    {if (localStorage.getItem('IsLoggedIn') == 'true'){
      this.userName = localStorage.getItem('UserName');
      this.roleId = localStorage.getItem('Role');
      this.IsLoggedIn = true;
    }
    }
    ngOnInit(): void {
      this.getTemplate()
    }
    getTemplate() {
      this.masterSv.getTemplate().subscribe((response: any) => {
         this.TemplateList = response;
         console.log(this.TemplateList);
      })
   }
   saveTemplate() {
    const templateData = {
      TemplateName: this.TemplateName,
      CreatedBy: this.userName
    };
  
    this.masterSv.saveTemplate(templateData).subscribe((response: any) => {
      if (response === 'success') {
        alert('Template Saved');
        this.getTemplate(); 
        this.TemplateName = ''; 
      } else {
        alert('Something Went Wrong!!');
      }
    })
  }
  
  deleteTemplate(id: any) {
    this.masterSv.deleteTemplate(id).subscribe((response: any) => {
      if (response === "success") {
        alert("Template Deleted");
        this.getTemplate();
      } else {
        alert("Something Went Wrong!!");
      }
    })
  }

  exportTableToPDF(): void {
    const doc = new jspdf.jsPDF();
    const table = this.table.nativeElement;

    html2canvas(table).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const imgWidth = doc.internal.pageSize.getWidth();
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      doc.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      doc.save('consumables_data.pdf');
    });
  }
  exportTableToExcel(): void {
    const element = document.getElementById('tableId'); // Replace 'tableId' with the actual ID of your HTML table
  
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
  
    const excelBuffer: any = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    this.saveAsExcelFile(excelBuffer, 'consumables_data');
  }
  
  private saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8' });
    const downloadLink = document.createElement('a');
    downloadLink.href = window.URL.createObjectURL(data);
    downloadLink.download = fileName + '.xlsx';
    downloadLink.click();
  }

  editTemplate(data: any) {
    this.documentTemplateID = data.documentTemplateID;
    this.viewdocumentTemplate = data.templateName;
  }
  
  UpdateTemplate() {
    var documenttemplateData = {
      DocumentTemplateID: this.documentTemplateID,
      TemplateName: this.viewdocumentTemplate,
      CreatedBy: this.userName
    }
  
    this.masterSv.UpdateTemplate(documenttemplateData).subscribe((response: any) => {
      if (response === 'success') {
        alert('Template Updated');
        window.location.reload();
      } else {
        alert('Something Went Wrong!!');
        window.location.reload();
      }
    })
  }

  



}

