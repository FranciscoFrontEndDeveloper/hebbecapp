import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogoComponent } from './components/logo/logo.component';
import { InitialComponent } from './components/initial/initial.component';
import { LogsignbuttomsComponent } from './components/logsignbuttoms/logsignbuttoms.component';
import { LoginformComponent } from './components/loginform/loginform.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    InitialComponent,
    LogsignbuttomsComponent,
    LoginformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
