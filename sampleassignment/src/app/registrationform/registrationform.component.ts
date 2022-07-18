import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registrationform',
  templateUrl: './registrationform.component.html',
  styleUrls: ['./registrationform.component.css']
})
export class RegistrationformComponent implements OnInit {
public registrationForm: FormGroup = new FormGroup({
  firstname: new FormControl(null, [Validators.required,]),
  lastname: new FormControl(null, [Validators.required,]),
  // gender: new FormControl(null, [Validators.required,]),
  birth:new FormControl(null, [Validators.required,]),
  // country:new FormControl(null,[Validators.required,]),
  file:new FormControl(null,[Validators.required,])






});
register(){
  this.registrationForm.markAllAsTouched();
  console.log(this.registrationForm.value);
  
}
  constructor() { }

  ngOnInit(): void {
  }

}
