import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegistrationService } from 'src/app/Services/Registration/registration.service';

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
  mileageCng: number;
  vehicle: any;
  mileagePetrol: number;
  fuelPriceReqd : number;
  mileageDiesel: number;
  FuelPriceCNG: number;
  FuelPricePetrol: number;
  FuelPriceDiesel: number;
  fuelReqd: number;
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
timeDifference?: string;
totalEstTravelTime: number = 0;
formattedTotalEstTravelTime: string = '';
totalFoodFuel: number = 0;
formattedTotalFoodFuel: string = '';
totalEstJobTime: number = 0;
formattedTotalEstJobTime: string = '';
totalEstDistKms: number = 0;
  tableLength: any;
  tripSheetNo: any;

  constructor( private router: ActivatedRoute, private route: Router, private regSv: RegistrationService,
    private http: HttpClient){
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
  ngOnInit(): void {
    this.getTripSheetNo();
  }
  getTripSheetNo() {
    this.regSv.getTripSheetNo().subscribe((result: any) => {
      this.tableLength = result.length + 1; 
      this.tripSheetNo = this.tableLength.toString().padStart(3, '0');
    })
  }
  public value = new Date();
  reSequence(){
    this.route.navigate(['/workFront']);
  }
  private apiUrl = 'http://localhost:44303/api';
  recalculateFuel() {
    // Ensure totalEstDistKms is greater than zero to avoid division by zero
    if (this.totalEstDistKms > 0) {
      let mileage: number | undefined;
      let fuelPrice: number | undefined;
  
      if (this.mileageCng !== null && this.mileageCng !== undefined && this.mileageCng !== 0) {
        mileage = this.mileageCng;
        fuelPrice = this.FuelPriceCNG;
      } else if (this.mileagePetrol !== null && this.mileagePetrol !== undefined && this.mileagePetrol !== 0) {
        mileage = this.mileagePetrol;
        fuelPrice = this.FuelPricePetrol;
      } else if (this.mileageDiesel !== null && this.mileageDiesel !== undefined && this.mileageDiesel !== 0) {
        mileage = this.mileageDiesel;
        fuelPrice = this.FuelPriceDiesel;
      } else {
        // Handle the case where no valid mileage value is provided
        this.fuelReqd = null;
        this.fuelPriceReqd = null;
        return;
      }
  
      if (mileage !== null && mileage !== undefined && mileage !== 0) {
        this.fuelReqd = this.totalEstDistKms / mileage;
        this.fuelPriceReqd = this.fuelReqd * (fuelPrice || 0);
      } else {
        // Handle the case where mileage is zero or undefined
        this.fuelReqd = null;
        this.fuelPriceReqd = null;
      }
    } else {
      // Handle the case where totalEstDistKms is zero
      this.fuelReqd = null;
      this.fuelPriceReqd = null;
    }
  }
  
  onInputChange() {
    this.recalculateFuel();
  }
 
  updateScheduleTimes() {
    let cumulativeTime = this.getMinutesFromTime(this.initialTime);
    this.totalEstTravelTime = 0;
    this.totalFoodFuel = 0;
    this.totalEstJobTime = 0;
    this.totalEstDistKms = 0;
    for (let i = 0; i < this.selectedData.length; i++) {
      const item = this.selectedData[i];
      // Update cumulative time
        const estTravelTimeMinutes = this.getMinutesFromTime(item.estTravelTime);
        const foodFuelMinutes = this.getMinutesFromTime(item.FoodFuel);
        const estJobTimeMinutes = this.getMinutesFromTime(item.estJobTime);
        const estDistKms = parseFloat(item.estDistKms) || 0; 
        // Handle undefined values
        const validEstTravelTime = !isNaN(estTravelTimeMinutes);
        const validFoodFuel = !isNaN(foodFuelMinutes);
        const validEstJobTime = !isNaN(estJobTimeMinutes);

        if (validEstTravelTime) {
          cumulativeTime += estTravelTimeMinutes;
          // Add estTravelTime to the total sum
          this.totalEstTravelTime += estTravelTimeMinutes;
        }
        if (validFoodFuel) {
          cumulativeTime += foodFuelMinutes;
          this.totalFoodFuel += foodFuelMinutes;
        }
      
    if (validEstJobTime) {
      cumulativeTime += estJobTimeMinutes;
      this.totalEstJobTime += estJobTimeMinutes;
    }
    this.totalEstDistKms += estDistKms;

      // Update the schedule time in the current row
      item.schdET1 = this.addMinutesToTime(this.initialTime, cumulativeTime);
      this.formattedTotalEstTravelTime = this.formatMinutesToHHMM(this.totalEstTravelTime);
      this.formattedTotalFoodFuel = this.formatMinutesToHHMM(this.totalFoodFuel);
      this.formattedTotalEstJobTime = this.formatMinutesToHHMM(this.totalEstJobTime);
    // Calculate time difference and update a property for display
    const timeDifferenceMinutes = this.getMinutesFromTime(item.schdET1) - this.getMinutesFromTime(this.initialTime);
    this.timeDifference = this.formatMinutesToHHMM(timeDifferenceMinutes);
    
  }
  console.log('final data:',this.selectedData);
}

formatMinutesToHHMM(minutes: number): string {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  return `${this.padZero(hours)}:${this.padZero(remainingMinutes)}`;
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

  save(){
    const apiUrl = 'http://localhost:44303/api/';

    const data = {
        tripSheetNo: this.tripSheetNo,
        ArrayValues: this.selectedData,
        totalEstDistKms : this.totalEstDistKms,
        formattedTotalEstTravelTime:this.formattedTotalEstTravelTime,
        formattedTotalFoodFuel:this.formattedTotalFoodFuel,
        formattedTotalEstJobTime:this.formattedTotalEstJobTime,
        timeDifference: this.timeDifference,
        Engineer: this.userName,
        mileageCng : this.mileageCng,
        mileagePetrol: this.mileagePetrol,
        mileageDiesel: this.mileageDiesel,
        fuelReqd: this.fuelReqd,
        FuelPriceCNG: this.FuelPriceCNG,
        FuelPricePetrol: this.FuelPricePetrol,
        FuelPriceDiesel: this.FuelPriceDiesel,
        fuelPriceReqd: this.fuelPriceReqd,
        sparesReqd: this.sparesReqd,
        vehicle: this.vehicle,
        startPlace:this.startPlace,
        startCluster:this.startCluster,
        initialTime:this.initialTime
    };

    return this.http.post(apiUrl, data);
  }

}
