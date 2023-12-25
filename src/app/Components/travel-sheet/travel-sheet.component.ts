import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-travel-sheet',
  templateUrl: './travel-sheet.component.html',
  styleUrls: ['./travel-sheet.component.css']
})
export class TravelSheetComponent {
  selectedData: any[] = [];
  constructor(private router: ActivatedRoute){
    this.router.paramMap.subscribe(params => {
      const state = window.history.state;
      this.selectedData = state.selectedData || [];

      console.log('Selected Data:', this.selectedData);
    });
  }
}
