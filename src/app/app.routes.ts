import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login';
import { HomeComponent } from './pages/home/home';
import { DashboardComponent } from './pages/dashboard/dashboard';
import { Atendimento } from './pages/atendimento/atendimento';
import { ConsultaComponent } from './pages/consulta/consulta';
import { BibliotecaComponent } from './pages/biblioteca/biblioteca';


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
        component: HomeComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'atendimentos',
        component: Atendimento
    },
    {
        path: 'consulta',
        component: ConsultaComponent
    },
    {
        path: 'biblioteca',
        component: BibliotecaComponent
    },



];

