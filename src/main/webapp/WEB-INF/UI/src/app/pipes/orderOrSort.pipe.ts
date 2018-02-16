import { Injectable, Pipe } from '@angular/core';

@Pipe({name: 'orderBy'})

@Injectable()
export class OrderOrSortPipe {
  transform(aItems: any[], orderBy: string): any[] {
    //console.log('order by...'+orderBy);
    aItems.sort((a: any, b: any) => {
      if(a[orderBy] < b[orderBy]) {
        return -1;
      }else if (a[orderBy] > b[orderBy]) {
        return 1;
      }else {
        return 0;
      }
    });
    return aItems;
  }
}

  
