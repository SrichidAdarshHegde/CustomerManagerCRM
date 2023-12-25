import { Component } from '@angular/core';

@Component({
  selector: 'app-rapid-i5april2021',
  templateUrl: './rapid-i5april2021.component.html',
  styleUrls: ['./rapid-i5april2021.component.css']
})
export class RapidI5april2021Component {
  print (printSectionId) {
    var innerContents = document.getElementById(printSectionId).innerHTML;
    var popupWinindow = window.open('', '_blank', 'width=600,height=700,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=yes');
    popupWinindow.document.open();
    popupWinindow.document.write('<html> <head><style> '+ '.sign{text-align:right;margin-left:-25px} '+ ' .logo{text-align:right;margin-right:-5px;top:0;right:0;}' + '  </style>  </head><body onload="window.print()">' + innerContents + '</html>');
    popupWinindow.document.close();
    //window.print();
  };
}
