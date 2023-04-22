import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass'],
})
export class DashboardComponent {
  labelEmail: string = 'dashboard';
  infoEmail: string = 'xxxxxxxxxxxxxxxxxxxxxxxxx';
  datosRegistro: string = 'datos de registro';
  datosComplementarios: string = 'datos Complementarios';
  hobbies: string='hobbies'
  infoHobbies: string='Leer'

  labelTipoDocumento: string = 'tipo de documento';
  labelNumeroDocumento: string = 'numero de identificacion';
  labelNombre: string = 'nombre';
  labelApellidos: string = 'apellidos';
  labelFechaNacimiento: string = 'fecha de nacimiento';
  labelFechaExpedicion: string = 'fecha de expedicion';
  labelNumeroCelular: string = 'numero de celular';

  labelPaisResidencia: string = 'pais de residencia';
  labelCiudadResidencia: string = 'ciudad de residencia';
  labelDireccioResidencia: string = 'direccion de residencia';
  labelImagenPerfil: string = 'imagen de perfil';
}
