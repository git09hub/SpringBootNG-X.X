import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'filter'})

@Injectable()
export class FilterPipe implements PipeTransform {

  transform(items: any[], searchText: string, sCriteria): any[] {
	    if(!items) return [];
	    if(!searchText) return items;


		searchText = searchText.toLowerCase();

		console.log('--'+sCriteria);
		return items.filter( it => {
		      if(sCriteria=='firstName'){
		      	return it.firstName.toLowerCase().includes(searchText);
		      }else if(sCriteria=='lastName'){
		      	return it.lastName.toLowerCase().includes(searchText);
		      }else if(sCriteria=='email'){
		      	return it.email.toLowerCase().includes(searchText);
		      }else if(sCriteria=='address'){
		      	return it.address.toLowerCase().includes(searchText);
		      }else{
		      	return it.firstName.toLowerCase().includes(searchText);
		      }
		});
		//return [];
	}

}
