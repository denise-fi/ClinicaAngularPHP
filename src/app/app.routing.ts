// importar modulos del router de angular
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// importar componentes
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CambiarClaveComponent } from './cambiar-clave/cambiar-clave.component';
import { MenuComponent } from './menu/menu.component';
import { ErrorComponent } from './error/error.component';


// array de rutas
const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'registro', component: RegistroComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'menu', component: MenuComponent},
    {path: 'cambiarClave', component: CambiarClaveComponent},
    {path: '**', component: ErrorComponent}
];


// exportar modulo del router

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
