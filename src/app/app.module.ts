import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { routing, appRoutingProviders } from './app.routing';
import { HttpClientModule } from "@angular/common/http";



import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CambiarClaveComponent } from './cambiar-clave/cambiar-clave.component';
import { MenuComponent } from './menu/menu.component';
import { RegistroComponent } from './registro/registro.component';
import { ErrorComponent } from './error/error.component';
import { DashboardService } from './dashboard/dashboard.service';

import {
  NbThemeModule,
  NbLayoutModule,
  NbSidebarModule,
  NbCardModule,
  NbMenuModule,
  NbIconModule,
  NbSelectModule,
  NbInputModule,
  NbSpinnerModule
} from '@nebular/theme';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    DashboardComponent,
    CambiarClaveComponent,
    ErrorComponent,
    MenuComponent,
    RegistroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbEvaIconsModule,
    NbSidebarModule.forRoot(),
    NbLayoutModule,
    NbCardModule,
    NbMenuModule.forRoot(),
    NbInputModule,
    routing,
    NbIconModule,
    NbSelectModule,
    NbSpinnerModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    appRoutingProviders,
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    DashboardService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
