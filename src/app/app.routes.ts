import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { HomeComponent } from './pages/home/home';
import { DashboardComponent } from './pages/dashboard/dashboard';
import { Atendimento } from './pages/atendimento/atendimento';
import { Perfil } from './pages/perfil/perfil';
import { BibliotecaComponent } from './pages/biblioteca/biblioteca';


export const routes: Routes = [
    {
        path: '',
        component: Login
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
        path: 'perfil',
        component: Perfil
    },
    {
        path: 'biblioteca',
        component: BibliotecaComponent
    }
    

];

    