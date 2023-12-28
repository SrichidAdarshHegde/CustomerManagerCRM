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
 // travel: any;
 // estDistKms: any;
 // estTravelTime: any;
  estJobTime: any;
 // FoodFuel: any;
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
//initialTime: any;
 // initialTime: string = '00:00';
  travel: string = '';
  estDistKms: string = '';
  estTravelTime: string = '';
  FoodFuel: string = '';
 // totalSchdET: string = this.initialTime;
  initialTime: string = "00:00"; // Set your initial time here
  cumulativeTime: number = 0;
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

//   calculateTime(item: any) {
//     // Assuming estTravelTime is in HH:mm format
//     const estTravelTimeParts = item.estTravelTime.split(':');
//     const estTravelHours = parseInt(estTravelTimeParts[0], 10);
//     const estTravelMinutes = parseInt(estTravelTimeParts[1], 10);

//     // Assuming FoodFuel is in HH:mm format
//     const foodFuelParts = item.FoodFuel.split(':');
//     const foodFuelHours = parseInt(foodFuelParts[0], 10);
//     const foodFuelMinutes = parseInt(foodFuelParts[1], 10);

//     // Calculate the total minutes for estTravelTime and FoodFuel
//     const estTravelTotalMinutes = estTravelHours * 60 + estTravelMinutes;
//     const foodFuelTotalMinutes = foodFuelHours * 60 + foodFuelMinutes;

//     // Add estTravelTotalMinutes and foodFuelTotalMinutes to cumulativeTime
//     this.cumulativeTime += estTravelTotalMinutes + foodFuelTotalMinutes;

//     // Calculate hours and minutes for schdET1
//     const schdET1Hours = Math.floor(this.cumulativeTime / 60);
//     const schdET1Minutes = this.cumulativeTime % 60;

//     // Format the result as HH:mm
//     item.schdET1 = `${schdET1Hours.toString().padStart(2, '0')}:${schdET1Minutes.toString().padStart(2, '0')}`;
// }

}
