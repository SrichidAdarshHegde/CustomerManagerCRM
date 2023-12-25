import { Component } from '@angular/core';
import { ToolbarService } from '@syncfusion/ej2-angular-documenteditor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `<ejs-documenteditorcontainer serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/documenteditor/" [enableToolbar]=true> </ejs-documenteditorcontainer>`,
  providers: [ToolbarService]
})
export class AppComponent {
  title = 'CustomerManager';
}
