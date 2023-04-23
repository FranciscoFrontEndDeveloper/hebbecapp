import { Component, OnInit } from '@angular/core';
import { User, UserComplemetary } from 'src/app/interfaces/user';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass'],
})
export class DashboardComponent {
  labelEmail: string = 'dashboard';
  infoEmail: string = 'xxxxxxxxxxxxxxxxxxxxxxxxx';
  userData!: User[];
  userDataComplementary!: UserComplemetary[];
  datosRegistro: string = 'datos de registro';
  datosComplementarios: string = 'datos Complementarios';
  hobbies: string = 'hobbies';
  infoHobbies: string = 'Leer';

  labelEmailAddres: string = 'email';
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

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.httpService.getUserData().subscribe((dataUser) => (this.userData = dataUser));
    this.httpService.getUserDataComplementary().subscribe((dataUser) => (this.userDataComplementary = dataUser));
  }
}
