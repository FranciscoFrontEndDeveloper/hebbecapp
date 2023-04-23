import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-hobbiesform',
  templateUrl: './hobbiesform.component.html',
  styleUrls: ['./hobbiesform.component.sass'],
})
export class HobbiesformComponent {
  labelHobbie: string = 'Ingrese un hobbie o pasatiempo';
  labeltext: string = 'text';
  valuebutton: string = 'enviar';
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      hobbie: [''],
    });
  }

  submitLogin() {
    console.log(this.loginForm.value);
  }
}
