import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-travel-sheet',
  templateUrl: './travel-sheet.component.html',
  styleUrls: ['./travel-sheet.component.css']
})
export class TravelSheetComponent {
  userName: any;
  roleId: any;
  IsLoggedIn: any;
  selectedData: any[] = [];
  userId: any;
  travel: any;
  estDistKms: any;
  estTravelTime: any;
  estJobTime: any;
  FoodFuel: any;
  schdET: any;
  mileageCng: any;
  vehicle: any;
  mileagePetrol: any;
  FuelReqd: any;
  mileageDiesel: any;
  FuelPriceCNG: any;
  FuelPricePetrol: any;
  FuelPriceDiesel: any;
  fuelReqd: any;
  sparesReqd: any;
  constructor(private router: ActivatedRoute){
    if (localStorage.getItem('IsLoggedIn') == 'true') {
      this.userName = localStorage.getItem('UserName');
      this.roleId = localStorage.getItem('Role');
      this.userId = localStorage.getItem('UserID');
      this.IsLoggedIn = true;
    }

    this.router.paramMap.subscribe(params => {
      const state = window.history.state;
      this.selectedData = state.selectedData || [];

      console.log('Selected Data:', this.selectedData);
      
    });
  }
  public value = new Date();
}
