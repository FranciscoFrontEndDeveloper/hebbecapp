import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.sass'],
})
export class LoginformComponent {
  labelEmail: string = 'email';
  labelPassword: string = 'password';
  valuebutton: string = 'enviar';
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: [''],
    });
  }

  submitLogin() {
    console.log(this.loginForm.value);
    this.router.navigateByUrl("/dashboard")
  }
}
