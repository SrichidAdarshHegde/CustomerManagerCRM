import { Component } from '@angular/core';

@Component({
  selector: 'app-quotation2015-iv2015-jlx',
  templateUrl: './quotation2015-iv2015-jlx.component.html',
  styleUrls: ['./quotation2015-iv2015-jlx.component.css']
})
export class Quotation2015Iv2015JLXComponent {
  print (printSectionId) {
    var innerContents = document.getElementById(printSectionId).innerHTML;
    var popupWinindow = window.open('', '_blank', 'width=600,height=700,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=yes');
    popupWinindow.document.open();
    popupWinindow.document.write('<html> <head><style> '+ '.sign{text-align:right;margin-left:-25px} '+ ' .logo{text-align:right;margin-right:-5px;top:0;right:0;}' + '  </style>  </head><body onload="window.print()">' + innerContents + '</html>');
    popupWinindow.document.close();
    //window.print();
  };
}

