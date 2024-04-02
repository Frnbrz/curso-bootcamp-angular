import { Routes } from '@angular/router'
import { ContactDetailPageComponent } from './pages/contact-detail-page/contact-detail-page.component'
import { ContactsPageComponent } from './pages/contacts-page/contacts-page.component'
import { HomePageComponent } from './pages/home-page/home-page.component'
import { LoginPageComponent } from './pages/login-page/login-page.component'
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component'

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomePageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'contacts', component: ContactsPageComponent },
  { path: 'contact/:id', component: ContactDetailPageComponent },
  { path: '**', component: NotFoundPageComponent }
]
