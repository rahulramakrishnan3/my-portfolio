import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home').then((m) => m.Home),
  },
  {
    path: 'contact-form',
    loadComponent: () =>
      import('./components/contact-form/contact-form').then((m) => m.ContactForm),
  },
  {
    path: 'about',
    loadComponent: () => import('./components/about/about').then((m) => m.About),
  },
  {
    path: 'projects',
    loadComponent: () => import('./components/projects/projects').then((m) => m.Projects),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
