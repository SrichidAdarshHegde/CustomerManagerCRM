import { Component } from '@angular/core';

@Component({
  selector: 'app-document-manager-template',
  templateUrl: './document-manager-template.component.html',
  styleUrls: ['./document-manager-template.component.css']
})
export class DocumentManagerTemplateComponent {
  print(printSectionId) {
   
 
    // Continue with the rest of your print logic
    var innerContents = document.getElementById(printSectionId).innerHTML;
    var popupWinindow = window.open('', '_blank', 'width=600,height=700,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=yes');
    popupWinindow.document.open();
    popupWinindow.document.write('<html> <head><style> '+ '.sign{text-align:right;margin-left:-25px} '+ ' .logo{text-align:right;margin-right:-5px;top:0;right:0;} .   ' + ' .abc{background-color: rgb(212, 212, 212)} '+ '  </style>  </head><body onload="window.print()">' + innerContents + '</html>');
    popupWinindow.document.close();
  }
}