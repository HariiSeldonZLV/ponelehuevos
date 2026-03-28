import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const adminGuard = () => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const user = authService.getCurrentUser();

  if (user && user.email === 'admin@ponelehuevos.cl') {
    return true;
  }

  return router.parseUrl('/');
};
