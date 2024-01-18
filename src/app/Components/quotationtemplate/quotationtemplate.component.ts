import { Component } from '@angular/core';

@Component({
  selector: 'app-quotationtemplate',
  templateUrl: './quotationtemplate.component.html',
  template: `
  <div style="text-align: left;">
    <br>
    <p>Dear Sir/Madam,</p>
    <p><strong>Sub: <u>Offer for Vision Measuring system – “Rapid-I V4020J LX”</u></strong></p>
    <br>
    <p>Thank you very much for your interest in Rapid-I Systems.</p>
    <p>As desired, we are pleased to offer our Vision Measuring System – <strong>Rapid-I v4020J LX.</strong> The Systems are shipping currently with Rapid-I Version 5.0 Software with powerful graphical overlay features, seamless CAD integration, automated report generation in MS Excel®, Snap-shot/Frame Save features, etc. We have also offered a full CNC system and other options separately.</p>
    <br>
    <p>For commercial details, kindly be guided by the attached Terms and Conditions sheet. Trust this enables you to proceed further and look forward to hearing from you with interest.</p>
    <p>Assuring you our best services always,</p>
    <p>Yours faithfully,</p>
    <p><strong>For CUSTOMISED TECHNOLOGIES (P) LTD.,</strong></p>
    <p><strong>Shivaputra B Dinni</strong><br>
      <strong>(Sr. Application Engg)</strong></p>
    <p>P.S: All prices quoted are in <strong>US Dollar.</strong></p>
  </div>
  <button (click)="toggleEditing()">Toggle Editing</button>
  <div *ngIf="editing">
    <textarea [(ngModel)]="editableContent" rows="10" cols="50"></textarea>
  </div>
`,
  styleUrls: ['./quotationtemplate.component.css']
})
export class QuotationtemplateComponent {
  editing = false;
  editableContent = '';

  toggleEditing() {
    this.editing = !this.editing;
    if (!this.editing) {
      // Save the edited content or perform any other necessary actions
      console.log('Edited Content:', this.editableContent);
    }
  }

}
