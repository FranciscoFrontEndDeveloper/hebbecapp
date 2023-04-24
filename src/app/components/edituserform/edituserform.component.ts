import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edituserform',
  templateUrl: './edituserform.component.html',
  styleUrls: ['./edituserform.component.sass'],
})
export class EdituserformComponent {
  datosRegistro: string = 'datos de registro';
  datosComplementarios: string = 'datos Complementarios';
  labelEmail: string = 'email';
  labelPassword: string = 'password';
  labeltext: string = 'text';

  labelTipoDocumento: string = 'tipo de documento';
  labelNumeroDocumento: string = 'numero de identificacion';
  labelNombre: string = 'nombre';
  labelApellidos: string = 'apellidos';
  labelFechaNacimiento: string = 'fecha de nacimiento';
  labelFechaExpedicion: string = 'fecha de expedicion';
  labelNumeroCelular: string = 'numero de celular';
  valuebutton: string = 'Editar';
  editUserSigninData: FormGroup;
  editUserComplementaryData: FormGroup;

  labelPaisResidencia: string = 'pais de residencia';
  labelCiudadResidencia: string = 'ciudad de residencia';
  labelDireccioResidencia: string = 'direccion de residencia';
  labelImagenPerfil: string = 'imagen de perfil';
  selectOptions: any = [
    { name: 'Cedula de ciudadanía', abbrev: 'CC' },
    { name: 'Cedula de expedición', abbrev: 'CE' },
    { name: 'Tarjeta de identidad', abbrev: 'TI' },
    { name: 'Pasaporte', abbrev: 'PA' },
  ];
  labelNumber: string = 'number';
  labelData: string = 'date';

  constructor(private formBuilder: FormBuilder) {
    this.editUserSigninData = this.formBuilder.group({
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
    this.editUserComplementaryData = this.formBuilder.group({
      pais: [''],
      ciudad: [''],
      direccion: [''],
      imagen: [''],
    });
  }

  editUserFormSignIn() {
    console.log(this.editUserSigninData.value);
  }
  editUserFormComplementary() {
    console.log(this.editUserComplementaryData.value);
  }
}
