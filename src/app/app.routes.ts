import { Routes } from '@angular/router'
import { authGuard } from './guards/auth.guard'
import { HomePageComponent } from './pages/home-page/home-page.component'

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomePageComponent },
  { path: 'login', loadComponent: () => import('./pages/login-page/login-page.component').then(m => m.LoginPageComponent) },
  {
    path: 'users', loadComponent: () => import('./pages/users-page/users-page.component').then(m => m.UsersPageComponent),
  },
  {
    path: 'contacts',
    canActivate: [authGuard],
    children: [
      { path: '', loadComponent: () => import('./pages/contacts-page/contacts-page.component').then(m => m.ContactsPageComponent) },

      { path: ':id', loadComponent: () => import('./pages/contact-detail-page/contact-detail-page.component').then(m => m.ContactDetailPageComponent) },
    ],
  },
  { path: '**', loadComponent: () => import('./pages/not-found-page/not-found-page.component').then(m => m.NotFoundPageComponent) },
]
