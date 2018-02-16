import { Component, OnInit } from '@angular/core';
import { Http, Headers, Response } from "@angular/http";
import { User } from '../models/User';

@Component({
  selector: 'app-multi-select',
  templateUrl: './multi-select.component.html',
  styles: []
})
export class MultiSelectComponent implements OnInit {

	/*angular-2-multi-select*/
	dropdownList = [];
    selectedItems = [];
    dropdownSettings = {};
  

  usersList: any;
  constructor(private http: Http, public user : User) { }

  ngOnInit() {
  /*angular-2-multi-select*/
  	this.dropdownList = [
                              {"id":1,"itemName":"India"},
                              {"id":2,"itemName":"Singapore"},
                              {"id":3,"itemName":"Australia"},
                              {"id":4,"itemName":"Canada"},
                              {"id":5,"itemName":"South Korea"},
                              {"id":6,"itemName":"Germany"},
                              {"id":7,"itemName":"France"},
                              {"id":8,"itemName":"Russia"},
                              {"id":9,"itemName":"Italy"},
                              {"id":10,"itemName":"Sweden"}
                            ];
    this.selectedItems = [
                            {"id":2,"itemName":"Singapore"},
                            {"id":3,"itemName":"Australia"},
                            {"id":4,"itemName":"Canada"},
                            {"id":5,"itemName":"South Korea"}
                        ];
    this.dropdownSettings = { 
                              singleSelection: false, 
                              text:"Select Countries",
                              selectAllText:'Select All',
                              unSelectAllText:'UnSelect All',
                              enableSearchFilter: true,
                              classes:"myclass custom-class"
                            };   
    /*angular-2-multi-select*/

  	this.http.get("http://localhost:3000/readJSON").subscribe(usersList => {
	    this.usersList = usersList.json();
	    console.log('ngOnInit...'+JSON.stringify(this.usersList));
	});
  }

  	onItemSelect(item:any){
        console.log(item);
        //console.log(this.selectedItems2);
    }
	
	OnItemDeSelect(item:any){
	    console.log(item);
	    //console.log(this.selectedItems2);
	}
	
	onSelectAll(items: any){
	    console.log(items);
	}
	
	onDeSelectAll(items: any){
	    console.log(items);
	}

  	onInput($event) {
    	$event.preventDefault();
    	console.log('selected: ' + $event.target.value);
  	}


}
