import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signform',
  templateUrl: './signform.component.html',
  styleUrls: ['./signform.component.sass'],
})
export class SignformComponent {
  labelEmail: string = 'email';
  labelPassword: string = 'password';
  labeltext: string = 'text';
  selectOptions: any = [
    { name: 'Cedula de ciudadanía', abbrev: 'CC' },
    { name: 'Cedula de expedición', abbrev: 'CE' },
    { name: 'Tarjeta de identidad', abbrev: 'TI' },
    { name: 'Pasaporte', abbrev: 'PA' },
  ];

  labelTipoDocumento: string = 'tipo de documento';
  labelNumeroDocumento: string = 'numero de identificacion';
  labelNombre: string = 'nombre';
  labelApellidos: string = 'apellidos';
  labelFechaNacimiento: string = 'fecha de nacimiento';
  labelFechaExpedicion: string = 'fecha de expedicion';
  labelNumeroCelular: string = 'numero de celular';

  valuebutton: string = 'enviar';
  signForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.signForm = this.formBuilder.group({
      email: [''],
      password: [''],
      tipoDocumento: [''],
      numeroDocumento: [''],
      nombre: [''],
      apellidos: [''],
      fechaNacimiento: [''],
      fechaExpedicion: [''],
      numeroCelular: [''],
    });
  }

  submitSign() {
    console.log(this.signForm.value);
    this.router.navigateByUrl('/');
  }
}
