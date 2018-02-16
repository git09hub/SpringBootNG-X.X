import { Component, OnInit } from '@angular/core';
import { AUser } from './models/AUser';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styles: []
})

export class AddComponent implements OnInit {

  user: any = {};
  users: any = [];

  view;
  submitted;
  constructor() {
    this.view = false;
    this.submitted = true;
  }

  ngOnInit() {
  }

  
  max = 0;
  
  saveUser(u: AUser){
  	alert(this.users.length+'saveuser...'+JSON.stringify(u));
  	this.user = u;

    if(this.users.length>0){
          this.user.id = this.users.length+1;
          this.users.push(this.user);
          this.view = true;
    }else{
          this.user.id = 1;
          this.users.push(this.user);
          this.view = true;
    }
    console.log('users arra...'+JSON.stringify(this.users));
    this.user = {};
  	this.submitted = false;
  }

  selectedUser = {};
  editUser(user: AUser): void {
      this.selectedUser = user;
  }

  updateUser(updateUser: AUser): void{
    
    alert(this.users.length+'-------'+JSON.stringify(this.selectedUser));
    
    if(this.users.length>0){
      for (var i = 0; i < this.users.length; i++) {
        if(this.users[i].id == updateUser.id) {
          this.users[i] = updateUser;
        }
      }
    }
    //$('#editModal').modal('hide');
    console.log(JSON.stringify(this.users));
  }

}