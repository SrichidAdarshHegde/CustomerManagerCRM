import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { UserRegistrationComponent } from './Components/user-registration/user-registration.component';
import { NgxDocViewerModule } from 'ngx-doc-viewer';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppGlobals } from './AppGlobals';
import { FooterComponent } from './Components/footer/footer.component';
import { WorkFrontComponent } from './Components/work-front/work-front.component';
import { DashBoardComponent } from './Components/dash-board/dash-board.component';
import { RoleMasterComponent } from './Components/Masters/role-master/role-master.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ToUpperPipe } from './to-upper.pipe';
import { CustomerRegistrationComponent } from './Components/customer-registration/customer-registration.component';
import { MachineRegistrationComponent } from './Components/machine-registration/machine-registration.component';
import { CountryComponent } from './Components/Masters/country/country.component';
import { StateComponent } from './Components/Masters/state/state.component';
import { CityComponent } from './Components/Masters/city/city.component';
import { ClusterComponent } from './Components/Masters/cluster/cluster.component';
import { RouteNumberComponent } from './Components/Masters/route-number/route-number.component';
import { RegionComponent } from './Components/Masters/region/region.component';
import { ZoneComponent } from './Components/Masters/zone/zone.component';
import { UserListComponent } from './Components/user-list/user-list.component';
import { CustomerListsComponent } from './Components/customer-lists/customer-lists.component';
import { ModelMasterComponent } from './Components/Masters/model-master/model-master.component';
import { FeaturesMasterComponent } from './Components/Masters/features-master/features-master.component';
import { InvoicePerticularComponent } from './Components/Masters/invoice-perticular/invoice-perticular.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { TestComponent } from './test/test.component';
import { MachineListComponent } from './Components/machine-list/machine-list.component';
import { RequestAndInteractionComponent } from './Components/request-and-interaction/request-and-interaction.component';
import { InvoiceAndFollowupComponent } from './Components/invoice-and-followup/invoice-and-followup.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RequestsMasterComponent } from './Components/Masters/requests-master/requests-master.component';
import { InvoiceListComponent } from './Components/invoice-list/invoice-list.component';
import { RequestListComponent } from './Components/request-list/request-list.component';
import { FolloUpListComponent } from './Components/follo-up-list/follo-up-list.component';
import { InteractionListComponent } from './Components/interaction-list/interaction-list.component';
import { TypeOfAttendMasterComponent } from './Components/Masters/type-of-attend-master/type-of-attend-master.component';
import { SandsMasterComponent } from './Components/Masters/sands-master/sands-master.component';
import { ZoneMasterComponent } from './Components/Masters/zone-master/zone-master.component';
import { EditCustomerListsComponent } from './Components/edit-customer-lists/edit-customer-lists.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { CallLogScreenComponent } from './Components/call-log-screen/call-log-screen.component';
import { TravelBudgetComponent } from './Components/travel-budget/travel-budget.component';
import { FaultsComponent } from './Components/Masters/faults/faults.component';
import { ConsumablesComponent } from './Components/Masters/consumables/consumables.component';
import { TripSheetComponent } from './Components/trip-sheet/trip-sheet.component';
import { LocationdetailsComponent } from './Components/locationdetails/locationdetails.component';
import { LocationdetailslistComponent } from './Components/locationdetailslist/locationdetailslist.component';
import { SearchPipe } from './search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    UserRegistrationComponent,
    FooterComponent,
    WorkFrontComponent,
    DashBoardComponent,
    RoleMasterComponent,
    ToUpperPipe,
    CustomerRegistrationComponent,
    MachineRegistrationComponent,
    CountryComponent,
    StateComponent,
    CityComponent,
    ClusterComponent,
    RouteNumberComponent,
    RegionComponent,
    ZoneComponent,
    UserListComponent,
    CustomerListsComponent,
    ModelMasterComponent,
    FeaturesMasterComponent,
    InvoicePerticularComponent,
    TestComponent,
    MachineListComponent,
    RequestAndInteractionComponent,
    InvoiceAndFollowupComponent,
    RequestsMasterComponent,
    InvoiceListComponent,
    RequestListComponent,
    FolloUpListComponent,
    InteractionListComponent,
    TypeOfAttendMasterComponent,
    SandsMasterComponent,
    ZoneMasterComponent,
    EditCustomerListsComponent,
    CallLogScreenComponent,
    TravelBudgetComponent,
    FaultsComponent,
    ConsumablesComponent,
    TripSheetComponent,
    LocationdetailsComponent,
    LocationdetailslistComponent,
    SearchPipe,

    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxDocViewerModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    InfiniteScrollModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule,
    CommonModule,
    NgxPaginationModule,
    NgSelectModule,
    FontAwesomeModule,
  ],
  providers: [AppGlobals, NgbActiveModal,{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
