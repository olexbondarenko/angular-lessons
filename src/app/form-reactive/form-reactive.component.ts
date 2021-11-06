import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { phoneNumber } from '../validators';

interface User {
  firstName: string,
  lastName: string,
  email: string,
  phone: string,
  message: string
}

@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.scss']
})

export class FormReactiveComponent {
  isFormSubmited = false;
  user: User = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  }
  formReactive = this.fb.group({
    firstName: ["", [Validators.required, Validators.pattern("[A-Za-z]{1,32}")]],
    lastName: ["", [Validators.required, Validators.pattern("[A-Za-z]{1,32}")]],
    email: ["", [Validators.required, Validators.email]],
    phone: ["", [Validators.required, phoneNumber]],
    message: [""],
  });

  constructor(private fb: FormBuilder) { }

  onSubmitForm() {
    this.isFormSubmited = true;
    this.user.firstName = this.formReactive.value.firstName;
    this.user.lastName = this.formReactive.value.lastName;
    this.user.email = this.formReactive.value.email;
    this.user.phone = this.formReactive.value.phone;
    this.user.message = this.formReactive.value.message;
    this.formReactive.reset()
  }

  onResetForm() {
    this.isFormSubmited = false;
    this.formReactive.reset()
  }
}
