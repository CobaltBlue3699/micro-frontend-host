import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

const isLogin = () => {
  return true
}

export const loginGuard: CanActivateFn = (route, state) => {
  if (state.url === '/login') { // 目的地 = login
    if (isLogin()) {
      const router = inject(Router);
      router.navigate(['/dashboard'])
      return false;
    }
    return true;
  }
  return isLogin();
};
