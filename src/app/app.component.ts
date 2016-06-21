import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { ContactsComponent, Contactsz } from './+contacts/contacts.component';

@Component({
  moduleId: module.id,
  selector: 'ca-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ROUTER_DIRECTIVES, ContactsComponent, Contactsz]
})
export class AppComponent {
  title: string = 'Contacts';
}
