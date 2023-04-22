import { Component } from '@angular/core';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.sass'],
})
export class LoginformComponent {
  labelEmail: string = 'Email';
  labelPassword: string = 'Password';
}
