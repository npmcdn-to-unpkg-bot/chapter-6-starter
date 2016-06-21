import { provideRouter, RouterConfig } from '@angular/router';

import { ContactsComponent } from './+contacts/contacts.component';

export const routes: RouterConfig = [
  { path: '', component: ContactsComponent }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
