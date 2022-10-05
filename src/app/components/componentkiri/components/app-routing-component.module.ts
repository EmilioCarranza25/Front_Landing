import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { LoginFormsComponent } from './login-forms/login-forms.component';
import { RegisterComponent } from './register/register.component';

const rutas: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginFormsComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(rutas)],
  exports: [RouterModule],
})
export class AppRoutingComponentModule {}
