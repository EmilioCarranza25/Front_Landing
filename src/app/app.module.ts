import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages/pages.module';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './pages/home/home.component';
import { LandingComponent } from './components/componentkiri/landing/landing.component';
import { ComponentsModule } from './components/componentkiri/components/components.module';
import { AppRoutingComponentModule } from './components/componentkiri/components/app-routing-component.module';

@NgModule({
  declarations: [AppComponent, HomeComponent, LandingComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    PagesModule,
    ComponentsModule,
    AppRoutingComponentModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
