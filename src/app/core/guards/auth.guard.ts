import { inject } from '@angular/core';
import { CanActivateChildFn, Router } from '@angular/router';
import { AuthService } from '../auth.service';

export const authGuard: CanActivateChildFn = (route) => {
  const isLoggedFromData = route.data['isLogged'];
  const router = inject(Router);
  const authService = inject(AuthService);

  if (isLoggedFromData === authService.isLogged) {
    return true;
  }

  const url = router.url;
  router.navigateByUrl(url);

  return false;
};
