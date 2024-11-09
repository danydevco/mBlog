import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";


export const dashboardGuard: CanActivateFn = (route, state) => {
    const router: Router = inject(Router);

    const token = localStorage.getItem('token');

    if (token) {
        return true;
    }

    return router.navigate(['auth', 'login']);
};
