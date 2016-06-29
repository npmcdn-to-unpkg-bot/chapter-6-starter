import { Component, Input } from '@angular/core';

import { Contact } from '../shared/models/contact.model';
import { FavoriteIconDirective } from '../shared/favorite-icon/favorite-icon.directive';
import { ShowContactsDirective } from '../shared/show-contacts/show-contacts.directive';
import { PhoneNumberPipe } from '../shared/phone-number/phone-number.pipe';
import { ContactService } from '../shared/services/contact.service';

@Component({
  moduleId: module.id,
  selector: 'ca-contact-list',
  templateUrl: 'contact-list.component.html',
  styleUrls: ['contact-list.component.css'],
  directives: [FavoriteIconDirective, ShowContactsDirective],
  pipes: [PhoneNumberPipe]
})
export class ContactListComponent {
  private noContactsMessage: string = 'You do not have any contacts yet';

  constructor(private contactService: ContactService) {}

  @Input('contacts') contacts: Contact[];

  private deleteContacts() {
    this.contacts = [];
  }

  private addContacts() {
     this.contactService.getContacts()
      .then(contacts => this.contacts = contacts);
  }
}