import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppGlobals } from 'src/app/AppGlobals';
@Injectable({
  providedIn: 'root',
})
export class RegistrationService {
  getDatewiserequestfollowup: any;
  GetDatewiserequestinvoice: any;
 
  constructor(private http: HttpClient, private globalurl: AppGlobals) {}
  //User Registartion
  userRegister(userRegData: any) {
    return this.http.post(
      this.globalurl.weburl + 'Registration/PostSaveUserRegistration',
      userRegData
    );
  }
  UpdateUserRegister(userRegData: any) {
    return this.http.post(
      this.globalurl.weburl + 'Registration/PostSaveUpdateUserRegistration',
      userRegData
    );
  }
  getUsers() {
    return this.http.get(this.globalurl.weburl + 'Registration/GetAllUsers');
  }
  deleteUser(userid: any) {
    return this.http.get(
      this.globalurl.weburl + 'Registration/DeleteUserData/' + userid
    );
  }
  //Customer Registartion
  customerRegistration(customerRegData: any) {
    return this.http.post(
      this.globalurl.weburl +
      'CustomerRegistration/PostSaveCustomerRegistration',
      customerRegData
    );
  }
  updateCustomerRegistration(customerupdateRegDate:any){
    return this.http.post(
      this.globalurl.weburl +
      'CustomerRegistration/PostSaveUpdateCustomerRegistration',
      customerupdateRegDate
    );
  }
  updateMachineRegistration(machinepdateRegData:any){
    return this.http.post(
      this.globalurl.weburl +
      'MachineRegistration/PostSaveUpdateMachinerRegistration',
      machinepdateRegData
    );
  }
  getCustomer() {
    return this.http.get(this.globalurl.weburl + 'CustomerRegistration/GetAllCustomer');
  }
  getFollowup(){
    return this.http.get(this.globalurl.weburl + 'FollowUp/GetAllListtoFollowUp');
  }
  getCustomerDetails(id:any){
    return this.http.get(this.globalurl.weburl + "CustomerRegistration/GetParticularCustomer/"+id);
  }
  //Edit and delete Contact Details
  deleteContactDeatils(id: any) {
    return this.http.get(
      this.globalurl.weburl + 'MachineRegistration/DeleteContactDetails/' + id
    );
  }
  updateContactDetails(data:any){
    return this.http.post(
      this.globalurl.weburl + 'MachineRegistration/UpdateContactDetails',
      data
    );
  }
  deleteCustomer(customerid: any) {
    return this.http.get(
      this.globalurl.weburl + 'CustomerRegistration/DeleteCustomerData/' + customerid
    );
  }
  deleteCustomerdetails(customerid:any){
    return this.http.get(this.globalurl.weburl + 'CustomerRegistration/DeleteCustomerdetails/' + customerid); 
  }
  deleteMachine(data: any) {
    return this.http.post(
      this.globalurl.weburl + 'MachineRegistration/DeleteMachineData/', data
    );
  }
  getPerticularCustomer(data: any) {
    return this.http.get(this.globalurl.weburl + 'CustomerRegistration/GetPerticularCustomer/' + data)
  }
  getPerticularCust(data: any) {
    return this.http.get(this.globalurl.weburl + 'CustomerRegistration/GetPerticularCust/' + data)
  }
  getMachineTicketDetails(id:any){
    return this.http.get(this.globalurl.weburl + 'CustomerRegistration/GetMachineTicketDetails/' + id)
  }
  getRequestForById(id:any){
    return this.http.get(this.globalurl.weburl + 'Requests/GetRequestForById/' + id)
  }
  getMachineInLocation(id:any){
    return this.http.get(this.globalurl.weburl + 'MachineRegistration/GetMachineInLocation/'+id)
  }
  getPerticularPriority(data : any){
    return this.http.get(this.globalurl.weburl + 'Requests/getPerticularPriority/'+ data)
  }
  getPerticularCustomerRequests(data:any){
    return this.http.get(this.globalurl.weburl + 'RequestAndInteractions/GetMachineRequestsFromCustomer/'+ data);
  }
  getPerticularCustomerInvoice(data : any){
    return this.http.get(this.globalurl.weburl + 'CustomerRegistration/GetPerticularCustomerInvoice/'+ data)
  }
  //Machine Registartion
  postcontactdetails(contactdata: any) {
    return this.http.post(this.globalurl.weburl + 'MachineRegistration/Postcontactdetails', contactdata)
  }
  getCustomerContactDetails(id:any){
    return this.http.get(this.globalurl.weburl + 'MachineRegistration/GetCustomerContactDetails/'+id);
  }
  GetCustomerContactDetailsForQM(id:any){
    return this.http.get(this.globalurl.weburl + 'MachineRegistration/getCustomerContactDetailsForQM/'+id);
  }
  getCustomerTickets(id:any){
    return this.http.get(this.globalurl.weburl + 'MachineRegistration/GetCustomerTickets/'+id);
  }
  postMachineRegistration(machineData : any){
    return this.http.post(this.globalurl.weburl + 'MachineRegistration/PostMachineRegistration', machineData)
  }
  GetAllMachines() {
    return this.http.get(this.globalurl.weburl + 'MachineRegistration/GetAllMachines');
  }
  getPerticularMachine(id: any) {
    return this.http.get(this.globalurl.weburl + 'MachineRegistration/GetPerticularMachines/' + id)
  }
  GetMachineCustomerDetails() {
    return this.http.get(this.globalurl.weburl + 'MachineRegistration/GetMachineCustomerDetails')
  }
  getCustomerFollowup(id: any) {
    return this.http.get(this.globalurl.weburl + 'FollowUp/GetPerticularFollowupforCustomer/' + id)
  }
  getCustomerFollowupCompleteCustomer(id: any) {
    return this.http.get(this.globalurl.weburl + 'FollowUp/GetPerticularFollowupforCustomerComplete/' + id)
  }
  getCustomerFollowupComplete(){
    return this.http.get(this.globalurl.weburl + 'FollowUp/GetPerticularFollowupComplete')
  }
  getCustomerFollowupPending(){
    return this.http.get(this.globalurl.weburl + 'FollowUp/GetPerticularFollowupPending')
  }
  getFollowupListsforCustomer(id:any){
    return this.http.get(this.globalurl.weburl + 'FollowUp/GetFollowupListsforCustomer/'+id)
  }
  getFollowupLists() {
    return this.http.get(this.globalurl.weburl + 'FollowUp/GetFollowupList')
  }
  getCustomerFollowupPendingCustomer(id:any){
    return this.http.get(this.globalurl.weburl + 'FollowUp/GetPerticularFollowupforCustomerPending/'+id)
  }
  //request & Interactions
  getMachineFromMachineNumber(machineId: any) {
    return this.http.get(this.globalurl.weburl + 'RequestAndInteractions/GetMachineFromMachineNumber/' + machineId);
  }
  getTicketDetailsFromTicket(ticketNo :any){
    return this.http.get(this.globalurl.weburl + 'RequestAndInteractions/GetTicketDetailsFromTicket/' + ticketNo);
  }
  getMachineRequestsFromMachineNumber(machineId:any){
    return this.http.get(this.globalurl.weburl + 'RequestAndInteractions/GetMachineRequestsFromMachineNumber/'+ machineId);
  }
  saveRequestFormData(rqData: any) {
    return this.http.post(this.globalurl.weburl + 'RequestAndInteractions/PostSaveRequestForm', rqData)
  }
  getPendingrequest() {
    return this.http.get(this.globalurl.weburl + 'RequestAndInteractions/GetPendingRequests')
  }
  GetPendingRequestsfordashboard(){
    return this.http.get(this.globalurl.weburl + 'RequestAndInteractions/GetPendingRequestsfordashboard')
  }
  getWorkfrontrequest(){
    return this.http.get(this.globalurl.weburl + 'RequestAndInteractions/GetPendingRequestsforWorkFront')
  }
  getWorkfrontrequestzonewise(data:any){
    return this.http.get(this.globalurl.weburl + 'RequestAndInteractions/GetPendingRequestsforWorkFrontZonewise/'+ data);
  }
  getAllrequest(){
    return this.http.get(this.globalurl.weburl + 'RequestAndInteractions/GetAllRequests')
  }
  getAllInteractions() {
    return this.http.get(this.globalurl.weburl + 'RequestAndInteractions/GetAllInteractions')
  }
  postSaveInteraction(data: any) {
    return this.http.post(this.globalurl.weburl + 'RequestAndInteractions/PostSaveNewInteraction', data)
  }
  GetMachineId(){
    return this.http.get(this.globalurl.weburl + 'Registration/GetMachineId')
  }
  // Travel sheet component
  getTripSheetNo(){
    return this.http.get(this.globalurl.weburl + 'TravelBudget/GetTripSheetNo')
  }
  // Travel Budget Component
  saveTravelBudget(budgetdata: any) {
    return this.http.post(this.globalurl.weburl + 'TravelBudget/saveTravelBudget', budgetdata)
  }
  GetTravelBudget() {
    return this.http.get(this.globalurl.weburl + 'TravelBudget/GetAllTravelBudget');
  }
  GetTravelBudgetbyUser(userid:any){
    return this.http.get(this.globalurl.weburl + 'TravelBudget/GetTravelBudgetbyUser/'+ userid);
  }
  GetTravelBudgetbyTravelId(travelId:any){
    return this.http.get(this.globalurl.weburl + 'TravelBudget/GetTravelBudgetbyTravelId/'+ travelId);
  }
  GetTravelBudgetbyDistance(travelId:any){
    return this.http.get(this.globalurl.weburl + 'TravelBudget/GetTravelBudgetbyTravelId/'+ travelId);
  }
//Quotationmanagertemplates
GetRefNo(){
  return this.http.get(this.globalurl.weburl + 'QuotationManagerTemplates/GetAllRefNo/');
}
getCustomerBillingAddress(id:any)
{
  return this.http.get(this.globalurl.weburl + 'QuotationManagerTemplates/Getbillingaddress/'+ id);
}



//quotation 2015 templates
getCustomerBillingAddress1(id:any)
{
  return this.http.get(this.globalurl.weburl + 'quotation2015/Getbillingaddress/'+ id);
}
getKindAttention(){
  return this.http.get(this.globalurl.weburl + 'quotation2015/GetKindAttention/');
}
GetRefNo1(){
  return this.http.get(this.globalurl.weburl + 'quotation2015/GetAllRefNo/');
}

// save templates
postSavequotationtemplate(data:any)
{
  return this.http.post(this.globalurl.weburl + 'quotation2015/Savequotationtemplate/', data)
}
postSavequotationtemplate2015(data:any)
{
  return this.http.post(this.globalurl.weburl + 'quotation2015/Savequotationtemplate2015/', data)
}

GetSavetemplatecommonRefID(data: any) {
  return this.http.post(this.globalurl.weburl + 'quotation2015/SavetemplatecommonRefID/', data)
}

gettemplatedetails2015(id:any)
{
  return this.http.get(this.globalurl.weburl + 'quotation2015/Gettemplatedetails2015/'+ id);
}

gettemplatedetails2015HT(id:any)
{
  return this.http.get(this.globalurl.weburl + 'QuotationManagerTemplates/Gettemplatedetails2015HT/'+ id);
}

gettemplatedetails2015z25(id:any)
{
  return this.http.get(this.globalurl.weburl + 'QuotationManagerTemplates/Gettemplatedetails2015z25/'+ id);
}
gettemplatedetails4020INdollor(id:any)
{
  return this.http.get(this.globalurl.weburl + 'QuotationManagerTemplates/Gettemplatedetails4020INdollor/'+ id);
}
gettemplatedetails4020z25(id:any)
{
  return this.http.get(this.globalurl.weburl + 'QuotationManagerTemplates/Gettemplatedetails4020z25/'+ id);
}
gettemplatedetails4030(id:any)
{
  return this.http.get(this.globalurl.weburl + 'QuotationManagerTemplates/Gettemplatedetails4030/'+ id);
}
gettemplatedetails4030indollor(id:any)
{
  return this.http.get(this.globalurl.weburl + 'QuotationManagerTemplates/Gettemplatedetails4030indollor/'+ id);
}
gettemplatedetails4030z25(id:any)
{
  return this.http.get(this.globalurl.weburl + 'QuotationManagerTemplates/Gettemplatedetails4030z25/'+ id);
}
gettemplatedetails5030(id:any)
{
  return this.http.get(this.globalurl.weburl + 'QuotationManagerTemplates/Gettemplatedetails5030/'+ id);
}
gettemplatedetails5030z25jlx(id:any)
{
  return this.http.get(this.globalurl.weburl + 'QuotationManagerTemplates/Gettemplatedetails5030z25jlx/'+ id);
}
postSavequotationtemplate2015HT(data:any)
{
  return this.http.post(this.globalurl.weburl + 'quotation2015/Savequotationtemplate2015HT/', data)
}

postSavequotationtemplate2015Z25(data:any)
{
  return this.http.post(this.globalurl.weburl + 'quotation2015/Savequotationtemplate2015Z25/', data)
}

postSavequotationtemplate4020INDOLLOR(data:any)
{
  return this.http.post(this.globalurl.weburl + 'quotation2015/Savequotationtemplate4020INDOLLOR/', data)
}


postSavequotationtemplate4030(data:any)
{
  return this.http.post(this.globalurl.weburl + 'quotation2015/Savequotationtemplate4030/', data)
}


postSavequotationtemplate4030INDOLLOR(data:any)
{
  return this.http.post(this.globalurl.weburl + 'quotation2015/Savequotationtemplate4030INDOLLOR/', data)

}


postSavequotationtemplate4030Z25(data:any)
{
  return this.http.post(this.globalurl.weburl + 'quotation2015/Savequotationtemplate4030Z25/', data)
}

postSavequotationtemplate4020Z25(data:any)
{
  return this.http.post(this.globalurl.weburl + 'quotation2015/Savequotationtemplate4020Z25/', data)
}
postSavequotationtemplate5030(data:any)
{
  return this.http.post(this.globalurl.weburl + 'quotation2015/Savequotationtemplate5030/', data)
}
postSavequotationtemplate5030Z25ZLX(data:any)
{
  return this.http.post(this.globalurl.weburl + 'quotation2015/Savequotationtemplate5030Z25ZLX/', data)
}

postSavequotationtemplateRapidIAMC(data:any)
{
  return this.http.post(this.globalurl.weburl + 'quotation2015/SavequotationtemplateRapidIAMC/', data)
}


postSavequotationtemplateRapidI5APRIL2015(data:any)
{
  return this.http.post(this.globalurl.weburl + 'quotation2015/SavequotationtemplateRapidI5APRIL2015/', data)
}
  //location details List
  getAlldetails(id:any){
    return this.http.get(this.globalurl.weburl + 'RequestAndInteractions/GetAllDetails/'+id)
  }
 getClusterdetails(data:any){
    return this.http.get(this.globalurl.weburl + 'RequestAndInteractions/GetClusterdetails/'+data); 
  }
  getCluster() {
    return this.http.get(this.globalurl.weburl + 'RequestAndInteractions/GetAllCluster')
  }
  getPerticularCustomerdetails(data:any){
    return this.http.get(this.globalurl.weburl + 'RequestAndInteractions/Getparticularcustomerdetails/'+data); 
  }
  getDatewiserequest(id:any){
    return this.http.get(this.globalurl.weburl + 'RequestAndInteractions/GetDatewiserequest/'+id)
  }
  getDatewiserequestinvoice(id:any){
    return this.http.get(this.globalurl.weburl + 'RequestAndInteractions/GetDatewiserequestinvoice/'+id)
  }
  getDatewiserequestInteraction(id:any){
    return this.http.get(this.globalurl.weburl + 'RequestAndInteractions/GetDatewiserequestInetraction/'+id)
}
getDatewiserequestfollowupDate(id:any){
  return this.http.get(this.globalurl.weburl + 'RequestAndInteractions/GetDatewiserequestfollowupDate/'+id)
}
getCustomerContactDetailss(id:any){
  return this.http.get(this.globalurl.weburl + 'MachineRegistration/GetCustomerContactDetails/'+id);
}

getQuotationDetailsByRefID(RefNo: any) {
  return this.http.get(this.globalurl.weburl + 'MachineRegistration/GetCustomerContactDetails/'+RefNo);
}

}
