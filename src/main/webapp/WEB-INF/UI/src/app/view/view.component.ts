import { Component, OnInit, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { Http, Headers, Response } from "@angular/http";
import { User } from '../models/User';

/*for modal popup
	http://embed.plnkr.co/mbPzd8/
*/

import {Modal} from "angular2-modal/plugins/bootstrap";

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  providers: [Modal]
})

export class ViewComponent implements OnInit {
  
  public filterText: string;

  usersList : any;

  selectedUser: any;
  
  constructor(private http: Http, public modal : Modal) {}

	ngOnInit() {		
		this.http.get("http://localhost:3000/readJSON").subscribe(usersList => {
	    this.usersList = usersList.json();
	  });
	}
  

  	editUser(user: User): void {
  		this.selectedUser = user;
  		
  		var templateString0 = `<h4>Alert is a classic (title/body/footer) 1 button modal window that 
            does not block.</h4>
            <b>Configuration:</b>
            <ul>
                <li>Non blocking (click anywhere outside to dismiss)</li>
                <li>Size large</li>
                <li>Dismissed with default keyboard key (ESC)</li>
                <li>Close wth button click</li>
                <li>HTML content</li>
            </ul>`;

        var templateString = `<div class="main-login main-center">
								<form class="form-horizontal" method="post" action="">
									<div class="form-group">
										<label for="firstName" class="cols-sm-2 control-label">First Name</label>
										<div class="cols-sm-10">
											<div class="input-group">
												<span class="input-group-addon"><i class="fa fa-user fa" aria-hidden="true"></i></span>
												<input type="text" class="form-control" name="firstName" id="firstName" [(ngModel)]="selectedUser.firstName" placeholder="Enter your First Name"/>
											</div>
										</div>
									</div>
									<div class="form-group">
										<label for="lastName" class="cols-sm-2 control-label">Last Name</label>
										<div class="cols-sm-10">
											<div class="input-group">
												<span class="input-group-addon"><i class="fa fa-envelope fa" aria-hidden="true"></i></span>
												<input type="text" [(ngModel)]="selectedUser.lastName" class="form-control" name="lastName" id="lastName"  placeholder="Enter your Last Name"/>
											</div>
										</div>
									</div>
									<div class="form-group">
										<label for="email" class="cols-sm-2 control-label">Email</label>
										<div class="cols-sm-10">
											<div class="input-group">
												<span class="input-group-addon"><i class="fa fa-users fa" aria-hidden="true"></i></span>
												<input type="text" class="form-control" name="email" id="email" [(ngModel)]="selectedUser.email" placeholder="Enter your Email Id"/>
											</div>
										</div>
									</div>

									<div class="form-group">
										<label for="address" class="cols-sm-2 control-label">Address</label>
										<div class="cols-sm-10">
											<div class="input-group">
												<span class="input-group-addon"><i class="fa fa-lock fa-lg" aria-hidden="true"></i></span>
												<input type="text" class="form-control" name="address" id="address" [(ngModel)]="selectedUser.address" placeholder="Enter your Address"/>
											</div>
										</div>
									</div>

									<div class="form-group ">
										<button type="button" class="btn btn-primary btn-sm btn-block login-button" (click)="updateUser(selectedUser)">Update</button>
										<button type="button" class="btn btn-warning btn-sm btn-block" data-dismiss="modal">Cancel</button>
									</div>

								</form>
							</div>
		      </div>`;    

  		/*this.modal.alert()
        .size('lg')
        .showClose(true)
        .title('Edit User Details')
        .body(templateString).open();*/

	}

	updatedUser: any;
	updateUser(uUser: User): void{
		this.updatedUser = uUser;
		alert('update...'+JSON.stringify(this.updatedUser));
		//for(this.usersList
	}

}