import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogoComponent } from './components/logo/logo.component';
import { InitialComponent } from './components/initial/initial.component';
import { LogsignbuttomsComponent } from './components/logsignbuttoms/logsignbuttoms.component';
import { LoginformComponent } from './components/loginform/loginform.component';
import { LabelformComponent } from './components/labelform/labelform.component';
import { ButtonformComponent } from './components/buttonform/buttonform.component';
import { InputformComponent } from './components/inputform/inputform.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    InitialComponent,
    LogsignbuttomsComponent,
    LoginformComponent,
    LabelformComponent,
    ButtonformComponent,
    InputformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
