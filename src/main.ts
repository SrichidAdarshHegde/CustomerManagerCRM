import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import * as Syncfusion from '@syncfusion/ej2';
import { registerLicense } from '@syncfusion/ej2/base';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
  registerLicense('Ngo9BigBOggjHTQxAR8/V1NAaF5cWWJCf0x0RHxbf1x0ZFREal9TTnNfUiweQnxTdEZiW31ccHRWRWJZUUx/XA==');