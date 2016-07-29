import { provideRouter, RouterConfig }  from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: RouterConfig = [
  {
  path: '',
  redirectTo: '/dashboard',
  pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    
    path: 'profile',
    component: ProfileComponent
  }
];

export const appRouterProviders = [
  provideRouter(routes)
];
