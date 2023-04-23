import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitialComponent } from './components/initial/initial.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EdituserformComponent } from './components/edituserform/edituserform.component';
import { SignformComponent } from './components/signform/signform.component';
import { SelectformComponent } from './components/selectform/selectform.component';

const routes: Routes = [
  { path: '', component: InitialComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'edituserform', component: EdituserformComponent},
  { path: 'sign', component: SignformComponent},
  { path: 'select', component: SelectformComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
