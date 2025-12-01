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
];
