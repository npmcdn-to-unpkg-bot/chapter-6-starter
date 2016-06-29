import { Component, Input } from '@angular/core';

import { 
  Contact,
  ContactService,
  FavoriteIconDirective,
  PhoneNumberPipe,
  ShowContactsDirective 
} from '../shared';

@Component({
  moduleId: module.id,
  selector: 'ca-contact-list',
  templateUrl: 'contact-list.component.html',
  styleUrls: ['contact-list.component.css'],
  directives: [FavoriteIconDirective, ShowContactsDirective],
  pipes: [PhoneNumberPipe]
})
export class ContactListComponent {
  public noContactsMessage: string = 'You do not have any contacts yet';

  constructor(private contactService: ContactService) {}

  @Input('contacts') contacts: Contact[];

  public deleteContacts() {
    this.contacts = [];
  }

  public addContacts() {
    this.contactService.getContacts()
      .then(contacts => this.contacts = contacts);
  }
}
