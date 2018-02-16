import { Component, OnInit } from '@angular/core';
import { User } from '../../app/models/user';
import { Http, Headers, Response } from "@angular/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  constructor(private http: Http) { }

  ngOnInit() {

  }

  response: any;
  body: any;
  loginUser(email, password): void {
	//alert(email+'----'+password);
	this.body = {"email":email,"password":password};
	alert(JSON.stringify(this.body));
	const req = this.http.post('http://localhost:3000/expresslogin', this.body);
	req.subscribe(response => {
	    this.response = response.json();
	    alert("--27--"+JSON.stringify(this.response));
	});
  }

}
