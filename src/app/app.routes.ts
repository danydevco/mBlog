import { Routes } from '@angular/router';
import {AuthLayoutComponent} from "./auth/layouts/auth-layout/auth-layout.component";
import {LoginComponent} from "./auth/pages/login/login.component";

export const routes: Routes = [
    {
        path: '',
        component: AuthLayoutComponent,
        children:[
            {
                path: 'login',
                component: LoginComponent,
            }
        ]
    }
];
