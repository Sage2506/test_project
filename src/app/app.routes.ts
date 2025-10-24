import { CanMatchFn, RedirectCommand, Router, Routes } from '@angular/router';
import { inject } from '@angular/core';
import { Home } from './home/home';


const dummyCanMatch: CanMatchFn = (route, segments) => {
  const router = inject(Router);
  const shouldGetAccess = Math.random();
  if (shouldGetAccess < 1) {
    return true;
  }
  return new RedirectCommand(router.parseUrl('/unauthorized'));
};

export const routes: Routes = [
    {path: '',
        loadChildren: () => import('./home/home.routes').then(m => m.homeRoutes),
        canMatch: [dummyCanMatch],
     },
];
