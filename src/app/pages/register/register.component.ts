import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

 public user = {
    username: '',
    password: '',
    firstName: '',
    lastname: '',
    email: '',
    phone: '',
  }

  constructor() { }


  ngOnInit(): void {
  }
formSubmit() {
    if (this.user.username == "" || this.user.firstName == null) {
      alert: "user is required";
    }
}
}
