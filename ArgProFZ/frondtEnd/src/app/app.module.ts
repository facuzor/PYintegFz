import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { EducacionComponent } from './component/educacion/educacion.component';
import { ExperienciaComponent } from './component/experiencia/experiencia.component';
import { HysComponent } from './component/hys/hys.component';
import { LogoApComponent } from './component/logo-ap/logo-ap.component';
import { BannerComponent } from './component/banner/banner.component';
import { AcercaDeComponent } from './component/acerca-de/acerca-de.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ProyectoComponent } from './component/proyecto/proyecto.component';
import { FooterComponent } from './component/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component'
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EducacionComponent,
    ExperienciaComponent,
    HysComponent,
    LogoApComponent,
    BannerComponent,
    AcercaDeComponent,
    ProyectoComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
