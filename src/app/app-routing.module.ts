import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'user',
    canActivateChild: [authGuard],
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  },
  {
    path: 'themes',
    canActivateChild: [authGuard],
    loadChildren: () => import('./theme/theme.module').then(m => m.ThemeModule)
  },
  {
    path: '**',
    component: NotFoundComponent
  },
];

export const AppRoutingModule = RouterModule.forRoot(routes);
