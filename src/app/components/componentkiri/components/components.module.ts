import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DivisionInfoComponent } from './division-info/division-info.component';
import { DivisionInfoTowComponent } from './division-info-tow/division-info-tow.component';
import { FooterComponent } from './footer/footer.component';
import { MatrizMenuComponent } from './matriz-menu/matriz-menu.component';
import { LoginComponent } from './login/login.component';
import { LoginFormsComponent } from './login-forms/login-forms.component';
import { RegisterComponent } from './register/register.component';
import { AppRoutingComponentModule } from './app-routing-component.module';

@NgModule({
  declarations: [
    DivisionInfoComponent,
    DivisionInfoTowComponent,
    FooterComponent,
    MatrizMenuComponent,
    LoginComponent,
    LoginFormsComponent,
    RegisterComponent,
  ],
  imports: [CommonModule, AppRoutingComponentModule],
  exports: [
    DivisionInfoComponent,
    DivisionInfoTowComponent,
    FooterComponent,
    MatrizMenuComponent,
    LoginComponent,
    LoginFormsComponent,
    RegisterComponent,
  ],
})
export class ComponentsModule {}
