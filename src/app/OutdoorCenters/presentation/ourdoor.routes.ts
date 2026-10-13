import { Routes } from '@angular/router';
export const bookstoreRoutes: Routes = [
  {
    path: 'overview',
    loadComponent: () => import('./pages/outdoor-overview').then((m) => m.OutdoorOverview),
  },
];
