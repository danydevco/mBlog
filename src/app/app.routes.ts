import {Routes} from '@angular/router';
import {AuthLayoutComponent} from "./auth/layouts/auth-layout/auth-layout.component";
import {LoginComponent} from "./auth/pages/login/login.component";
import {CreatePostComponent} from "./admin/components/create-post/create-post.component";
import {RegisterComponent} from "./auth/pages/register/register.component";

export const routes: Routes = [
    {
        path: 'auth',
        component: AuthLayoutComponent,
        children: [
            {
                path: 'login',
                component: LoginComponent,
            },
            {
                path: 'register',
                component: RegisterComponent
            }
        ]
    },
    {
        path: 'admin',
        component: AuthLayoutComponent,
        children: [
            {
                path: 'post',
                component: LoginComponent,
                children: [

                ]
            },
            {
                path: 'register',
                component: RegisterComponent
            }
        ]
    },
    {
        path: 'admin',
        component: CreatePostComponent
    }
];
