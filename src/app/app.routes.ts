import {Routes} from '@angular/router';
import {AuthLayoutComponent} from "./auth/layouts/auth-layout/auth-layout.component";
import {LoginComponent} from "./auth/pages/login/login.component";
import {CreatePostComponent} from "./admin/components/create-post/create-post.component";
import {RegisterComponent} from "./auth/pages/register/register.component";
import {AdminLayoutComponent} from "./admin/layout/admin-layout/admin-layout.component";
import {ShowPostComponent} from "./admin/components/show-post/show-post.component";
import {UpdatePostComponent} from "./admin/components/update-post/update-post.component";
import {ListPostComponent} from "./admin/components/list-post/list-post.component";
import {PostListComponent} from "./admin/pages/admin/post-list/post-list.component";
import {PostCreateComponent} from "./admin/pages/admin/post-create/post-create.component";
import {PostShowComponent} from "./admin/pages/admin/post-show/post-show.component";

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
        component: AdminLayoutComponent,
        children: [
            {
                path: 'post',
                children: [
                    {
                        path: 'list',
                        component: PostListComponent
                    },
                    {
                        path: 'create',
                        component: PostCreateComponent
                    },
                    {
                        path: 'edit',
                        component: UpdatePostComponent
                    },
                    {
                        path: 'show/:id',
                        component: PostShowComponent
                    },

                ]
            }
        ]
    },
    {
        path: 'admin',
        component: CreatePostComponent
    }
];
