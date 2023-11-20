import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppGlobals } from 'src/app/AppGlobals';

@Injectable({
  providedIn: 'root',
})
export class RegistrationService {
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
  deleteCustomer(customerid: any) {
    return this.http.get(
      this.globalurl.weburl + 'CustomerRegistration/DeleteCustomerData/' + customerid
    );
  }
  deleteMachine(data: any) {
    return this.http.post(
      this.globalurl.weburl + 'MachineRegistration/DeleteMachineData/' , data
    );
  }
  getPerticularCustomer(data : any){
    return this.http.get(this.globalurl.weburl + 'CustomerRegistration/GetPerticularCustomer/'+ data)
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
  postcontactdetails(contactdata:any){
    return this.http.post(this.globalurl.weburl + 'MachineRegistration/Postcontactdetails', contactdata)
  }


  getCustomerContactDetails(id:any){
    return this.http.get(this.globalurl.weburl + 'MachineRegistration/GetCustomerContactDetails/'+id);
  }


  postMachineRegistration(machineData : any){
    return this.http.post(this.globalurl.weburl + 'MachineRegistration/PostMachineRegistration', machineData)
  }
  GetAllMachines() {
    return this.http.get(this.globalurl.weburl + 'MachineRegistration/GetAllMachines');
  }
  getPerticularMachine(id:any){
    return this.http.get(this.globalurl.weburl + 'MachineRegistration/GetPerticularMachines/'+id)
  }
  getCustomerFollowup(id:any){
    return this.http.get(this.globalurl.weburl + 'FollowUp/GetPerticularFollowupforCustomer/'+id)
  }
  getCustomerFollowupCompleteCustomer(id:any){
    return this.http.get(this.globalurl.weburl + 'FollowUp/GetPerticularFollowupforCustomerComplete/'+id)
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
  getFollowupLists(){
    return this.http.get(this.globalurl.weburl + 'FollowUp/GetFollowupList')
  }

  getCustomerFollowupPendingCustomer(id:any){
    return this.http.get(this.globalurl.weburl + 'FollowUp/GetPerticularFollowupforCustomerPending/'+id)
  }
  //request & Interactions
  getMachineFromMachineNumber(machineId:any){
    return this.http.get(this.globalurl.weburl + 'RequestAndInteractions/GetMachineFromMachineNumber/'+ machineId);
  }

  getMachineRequestsFromMachineNumber(machineId:any){
    return this.http.get(this.globalurl.weburl + 'RequestAndInteractions/GetMachineRequestsFromMachineNumber/'+ machineId);

  }
  saveRequestFormData(rqData:any){
    return this.http.post(this.globalurl.weburl + 'RequestAndInteractions/PostSaveRequestForm', rqData)
  }
  getPendingrequest(){
    return this.http.get(this.globalurl.weburl + 'RequestAndInteractions/GetPendingRequests')
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
  getAllInteractions(){
    return this.http.get(this.globalurl.weburl + 'RequestAndInteractions/GetAllInteractions')

  }
  postSaveInteraction(data:any){
    return this.http.post(this.globalurl.weburl + 'RequestAndInteractions/PostSaveNewInteraction', data)
  }

  GetMachineId(){
    return this.http.get(this.globalurl.weburl + 'Registration/GetMachineId')
  }
  
 
  // Travel Budget Component
  saveTravelBudget(budgetdata:any){
    return this.http.post(this.globalurl.weburl + 'TravelBudget/saveTravelBudget', budgetdata)
  }
  GetTravelBudget(){
    return this.http.get(this.globalurl.weburl + 'TravelBudget/GetAllTravelBudget');
  }

  GetTravelBudgetbyUser(userid:any){
    return this.http.get(this.globalurl.weburl + 'TravelBudget/GetTravelBudgetbyUser/'+ userid);
  }

  GetTravelBudgetbyTravelId(travelId:any){
    return this.http.get(this.globalurl.weburl + 'TravelBudget/GetTravelBudgetbyTravelId/'+ travelId);

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

}
