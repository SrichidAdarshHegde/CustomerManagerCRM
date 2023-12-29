import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
  initialTime: string; // Set your initial time here
  cumulativeTime: number = 0;
startPlace: any;
startCluster: any;
  constructor( private router: ActivatedRoute, private route: Router){
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
  reSequence(){
    this.route.navigate(['/workFront']);
  }

  updateScheduleTimes() {
    let cumulativeTime = this.getMinutesFromTime(this.initialTime);

    for (let i = 0; i < this.selectedData.length; i++) {
      const item = this.selectedData[i];

      // Update cumulative time
      if (item.requestFor == '') {
        const estTravelTimeMinutes = this.getMinutesFromTime(item.estTravelTime);
        const foodFuelMinutes = this.getMinutesFromTime(item.FoodFuel);
        const estJobTimeMinutes = this.getMinutesFromTime(item.estJobTime);

        cumulativeTime += estTravelTimeMinutes + foodFuelMinutes + estJobTimeMinutes;
      }

      // Use setTimeout to ensure that the update occurs after (ngModel) has been updated
      setTimeout(() => {
        // Update the schedule time in the current row
        item.schdET1 = this.addMinutesToTime(this.initialTime, cumulativeTime);
      });
    }
  }

  getMinutesFromTime(time: string): number {
    if (!time) {
      return 0; // or handle the case where time is undefined/null
    }

    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;
  }

  addMinutesToTime(time: string, minutes: number): string {
    if (!time) {
      return ''; // or handle the case where time is undefined/null
    }

    const [hours, oldMinutes] = time.split(':').map(Number);
    const newMinutes = oldMinutes + minutes;
    const newHours = Math.floor(newMinutes / 60);
    const adjustedMinutes = newMinutes % 60;

    return `${this.padZero(newHours)}:${this.padZero(adjustedMinutes)}`;
  }

  padZero(num: number): string {
    return num < 10 ? `0${num}` : `${num}`;
  }

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
