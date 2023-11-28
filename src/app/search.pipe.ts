import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items) return [];
    if (!searchText) return items;

    searchText = searchText.toLowerCase();

    return items.filter(item => 
     (item.companyName && item.companyName.toLowerCase().includes(searchText)) ||
       (item.customerName && item.customerName.toLowerCase().includes(searchText)) 
      
    );
  }
  

}
