import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = () => {

  console.log('Guard executado');

  const router = inject(Router);

  if (localStorage.getItem('logado') === 'true') {
    return true;
  }

  router.navigate(['/login']);
  return false;
};