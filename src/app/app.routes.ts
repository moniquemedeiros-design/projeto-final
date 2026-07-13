import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login';
import { HomeComponent } from './pages/home/home';
import { DashboardComponent } from './pages/dashboard/dashboard';
import { Atendimento } from './pages/atendimento/atendimento';
import { ConsultaComponent } from './pages/consulta/consulta';
import { BibliotecaComponent } from './pages/biblioteca/biblioteca';
import { authGuard } from './guards/auth-guard';


export const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'home',
        component: HomeComponent,
        canActivate: [authGuard]
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [authGuard]
    },
    {
        path: 'atendimentos',
        component: Atendimento,
        canActivate: [authGuard]
    },
    {
        path: 'consulta',
        component: ConsultaComponent,
        canActivate: [authGuard]
    },
    {
        path: 'biblioteca',
        component: BibliotecaComponent,
        canActivate: [authGuard]
    },



];

