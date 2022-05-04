import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {
  
  constructor() { }
  Loginform:any; //form
 
  ngOnInit(): void {
    this.Loginform = new FormGroup({
      // "emailId":  new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]*')]),
      "emailId":  new FormControl(null,[Validators.required,Validators.email]),
      "password":  new FormControl('',[Validators.required,Validators.pattern('((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,30})')]),
      
    });
  }

  // submit function
  submitData(){
    console.log(this.Loginform.value);

  }
  get emailid() { return this.Loginform.get('emailId'); } //emailId
  get Password() { return this.Loginform.get('password'); } //password
}
