import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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
  errorLogin!: string;
  errorMessageEmail!: string;
  errorMessagePassword!: string;
  errorBoolean: boolean;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
    this.errorBoolean = false;
  }

  submitLogin() {
    if (
      this.loginForm.value.email === 'example@example.com' &&
      this.loginForm.value.password === '123456'
    ) {
      this.router.navigateByUrl('/dashboard');
    } else {
      this.errorBoolean = true;
      this.errorLogin = 'Usuario o contraseña invalido'
    }
  }
}
