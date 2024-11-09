import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";

export const authGuard: CanActivateFn = (route, state) => {
    const router: Router = inject(Router);

    const token = localStorage.getItem('token');

    if (!token) {
        return true;
    }

    return router.navigate(['admin', 'post', 'list']);
};
