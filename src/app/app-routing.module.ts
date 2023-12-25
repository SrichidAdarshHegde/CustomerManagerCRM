import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { UserRegistrationComponent } from './Components/user-registration/user-registration.component';
import { WorkFrontComponent } from './Components/work-front/work-front.component';
import { RoleMasterComponent } from './Components/Masters/role-master/role-master.component';
import { DashBoardComponent } from './Components/dash-board/dash-board.component';
import { CustomerRegistrationComponent } from './Components/customer-registration/customer-registration.component';
import { MachineRegistrationComponent } from './Components/machine-registration/machine-registration.component';
import { CityComponent } from './Components/Masters/city/city.component';
import { ClusterComponent } from './Components/Masters/cluster/cluster.component';
import { CountryComponent } from './Components/Masters/country/country.component';
import { RegionComponent } from './Components/Masters/region/region.component';
import { RouteNumberComponent } from './Components/Masters/route-number/route-number.component';
import { StateComponent } from './Components/Masters/state/state.component';
import { ZoneComponent } from './Components/Masters/zone/zone.component';
import { UserListComponent } from './Components/user-list/user-list.component';
import { CustomerListsComponent } from './Components/customer-lists/customer-lists.component';
import { ModelMasterComponent } from './Components/Masters/model-master/model-master.component';
import { FeaturesMasterComponent } from './Components/Masters/features-master/features-master.component';
import { InvoicePerticularComponent } from './Components/Masters/invoice-perticular/invoice-perticular.component';
import { TestComponent } from './test/test.component';
import { MachineListComponent } from './Components/machine-list/machine-list.component';
import { RequestAndInteractionComponent } from './Components/request-and-interaction/request-and-interaction.component';
import { InvoiceAndFollowupComponent } from './Components/invoice-and-followup/invoice-and-followup.component';
import { RequestsMasterComponent } from './Components/Masters/requests-master/requests-master.component';
import { RequestListComponent } from './Components/request-list/request-list.component';
import { FolloUpListComponent } from './Components/follo-up-list/follo-up-list.component';
import { InteractionListComponent } from './Components/interaction-list/interaction-list.component';
import { InvoiceListComponent } from './Components/invoice-list/invoice-list.component';
import { TypeOfAttendMasterComponent } from './Components/Masters/type-of-attend-master/type-of-attend-master.component';
import { SandsMasterComponent } from './Components/Masters/sands-master/sands-master.component';
import { ZoneMasterComponent } from './Components/Masters/zone-master/zone-master.component';
import { EditCustomerListsComponent } from './Components/edit-customer-lists/edit-customer-lists.component';
import { CallLogScreenComponent } from './Components/call-log-screen/call-log-screen.component';
import { TravelBudgetComponent } from './Components/travel-budget/travel-budget.component';
import { FaultsComponent } from './Components/Masters/faults/faults.component';
import { ConsumablesComponent } from './Components/Masters/consumables/consumables.component';
import { TripSheetComponent } from './Components/trip-sheet/trip-sheet.component';
import { LocationdetailsComponent } from './Components/locationdetails/locationdetails.component';
import { LocationdetailslistComponent } from './Components/locationdetailslist/locationdetailslist.component';
import { DocumentmanagerComponent } from './Components/document manager/documentmanager/documentmanager.component';
import { DocumentTypeMasterComponent } from './Components/Masters/document-type-master/document-type-master.component';
import { ModeofTransportMasterComponent } from './Components/Masters/modeof-transport-master/modeof-transport-master.component';
import { TemplateComponent } from './Components/Masters/DocumentTemplate/template.component';
import { DocumentMailTemplateComponent } from './Components/Masters/document-mail-template/document-mail-template.component';
import { QuotationmanagerComponent } from './quotationmanager/quotationmanager.component';
import { QuotationtemplateComponent } from 'src/quotationtemplate/quotationtemplate.component';
import { BrochureComponent } from 'src/brochure/brochure.component';
import { MailquotationtemplateComponent } from 'src/mailquotationtemplate/mailquotationtemplate.component';
import { TestqmComponent } from 'src/testqm/testqm.component';
import { Quotation4020Component } from './quotation4020/quotation4020.component';
import { RapidITableComponent } from './rapid-i-table/rapid-i-table.component';
import { Rapid64Component } from './Components/QM TEMPLATES/rapid64/rapid64.component';
import { Rapidi2015JLXComponent } from './Components/QM TEMPLATES/rapidi2015-jlx/rapidi2015-jlx.component';
import { RapidIsparesComponent } from './Components/QM TEMPLATES/rapid-ispares/rapid-ispares.component';
import { RapiditrainingchargesComponent } from './Components/QM TEMPLATES/rapiditrainingcharges/rapiditrainingcharges.component';
import { V20152axesComponent } from './Components/QM TEMPLATES/v20152axes/v20152axes.component';
import { V4020Component } from './Components/QM TEMPLATES/v4020/v4020.component';
import { Rapidi64CamACSCComponent } from './Components/QM TEMPLATES/rapidi64-cam-acsc/rapidi64-cam-acsc.component';
import { V4030Component } from './Components/QM TEMPLATES/v4030/v4030.component';
import { Q4020Component } from './Components/QM TEMPLATES/q4020/q4020.component';
import { Q4020HTComponent } from './Components/QM TEMPLATES/q4020-ht/q4020-ht.component';
import { RapidtableComponent } from './Components/QM TEMPLATES/rapidtable/rapidtable.component';
import { QMComponent } from './Components/QUOTATIONMANAGER/qm/qm.component';

const routes: Routes = [
  {path : '', component: HomeComponent},
  {path : 'home', component: HomeComponent},
  {path : 'login', component: LoginComponent},
  {path : 'userRegistration', component:UserRegistrationComponent},
  {path : 'workFront', component:WorkFrontComponent},
  {path : 'roleMaster', component:RoleMasterComponent},
  {path : 'dashboard', component:DashBoardComponent},
  {path : 'newcustomerregistration', component:CustomerRegistrationComponent},
  {path : 'newmachineregistaration', component:MachineRegistrationComponent},
  {path : 'cityMaster', component: CityComponent},
  {path : 'clusterMaster', component: ClusterComponent},
  {path : 'countryMaster', component: CountryComponent},
  {path : 'regionMaster', component: RegionComponent},
  {path : 'routeNumberMaster', component: RouteNumberComponent},
  {path : 'statemaster', component: StateComponent},
  {path : 'zoneMaster', component: ZoneMasterComponent},
  {path : 'faultsMaster', component: FaultsComponent},
  {path : 'consumablesMaster', component: ConsumablesComponent},
  {path : 'userList', component: UserListComponent},
  {path : 'customerLists', component: CustomerListsComponent},
  {path : 'modelMaster', component: ModelMasterComponent},
  {path : 'featuresMaster', component: FeaturesMasterComponent},
  {path : 'invoiceParticulars', component: InvoicePerticularComponent},
  {path : 'machineLists', component: MachineListComponent},
  {path : 'request&interaction', component: RequestAndInteractionComponent},
  {path : 'invoice&followup', component: InvoiceAndFollowupComponent},
  {path : 'requestsMasters', component: RequestsMasterComponent},
  {path : 'requestList', component: RequestListComponent},
  {path : 'follow-upList', component: FolloUpListComponent},
  {path : 'interactionList', component: InteractionListComponent},
  {path : 'invoiceList', component: InvoiceListComponent},
  {path : 'attendTypeMaster', component: TypeOfAttendMasterComponent},
  {path : 's&s', component: SandsMasterComponent},
  {path : 'callLogScreen', component: CallLogScreenComponent},
  {path : 'travelBudget/:id', component: TravelBudgetComponent}, 
  {path : 'travelBudget', component: TravelBudgetComponent},
  {path : 'tripsheet', component: TripSheetComponent},
  {path : 'locationDetails', component: LocationdetailsComponent},
  {path : 'locationDetailslist', component: LocationdetailslistComponent},


{path:'quotationtemplate',component:QuotationtemplateComponent},
{path:'brochure',component:BrochureComponent},
{path:'mailquotationtemplate',component:MailquotationtemplateComponent},

  {path:'documentmanager',component:DocumentmanagerComponent},
{path:'DocumentType',component:DocumentTypeMasterComponent},
{path:'ModeofTransport',component:ModeofTransportMasterComponent},
{path:'Template',component:TemplateComponent},
{path:'DocumentMailTemplate',component:DocumentMailTemplateComponent},



{path:'rapid64' ,component:Rapid64Component},
{path:'rapid64/:id' ,component:Rapid64Component},
{path:'rapid2015' ,component:Rapidi2015JLXComponent},
{path:'rapidispares' ,component:RapidIsparesComponent},
{path:'rapidicharges' ,component:RapiditrainingchargesComponent},
{path:'v20152axes' ,component:V20152axesComponent},

{path:'v4020' ,component:V4020Component},
{path:'Rapidi64CamACSCComponent' ,component:Rapidi64CamACSCComponent},
{path:'V4030Component' ,component:V4030Component},
{path:'Q4020' ,component:Q4020Component},
{path:'Q4020HT' ,component:Q4020HTComponent},
{path:'rapidtable' ,component:RapidtableComponent},
{path:'QuotationManager',component:QMComponent},






  
  
  {path : 'test', component: TestComponent},

  {
    path:'editcustomer/:id',
    component:EditCustomerListsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }
