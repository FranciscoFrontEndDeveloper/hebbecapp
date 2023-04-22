import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitialComponent } from './components/initial/initial.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EdituserformComponent } from './components/edituserform/edituserform.component';

const routes: Routes = [
  { path: '', component: InitialComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'edituserform', component: EdituserformComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
