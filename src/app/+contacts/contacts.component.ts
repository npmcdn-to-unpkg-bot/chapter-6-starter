import { Component } from '@angular/core';

import { Contact } from './shared';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactService } from './shared/services/contact.service';

@Component({
  moduleId: module.id,
  selector: 'ca-contacts',
  templateUrl: 'contacts.component.html',
  styleUrls: ['contacts.component.css'],
  directives: [ContactListComponent],
  providers: [ContactService]
})
export class ContactsComponent {
  contacts: Contact[] = [];

  constructor(private contactService: ContactService) {}

  ngOnInit() {
    this.contactService.getContacts()
      .then(contacts => this.contacts = contacts);
  }
}
