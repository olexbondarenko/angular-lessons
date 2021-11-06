import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

interface User {
  firstName: string,
  lastName: string,
  email: string,
  phone: string,
  message: string
}

@Component({
  selector: 'app-form-driven',
  templateUrl: './form-driven.component.html',
  styleUrls: ['./form-driven.component.scss']
})

export class FormDrivenComponent {
  isFormSubmited = false;
  user: User = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  }

  onSubmitForm(formDriven: NgForm) {
    this.isFormSubmited = true;
    this.user.firstName = formDriven.value.firstName;
    this.user.lastName = formDriven.value.lastName;
    this.user.email = formDriven.value.email;
    this.user.phone = formDriven.value.phone;
    this.user.message = formDriven.value.message;
    formDriven.reset();
  }

  onResetForm(formDriven: NgForm) {
    this.isFormSubmited = false;
    formDriven.reset();
  }
}
