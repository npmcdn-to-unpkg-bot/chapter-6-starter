import { Component, Input, OnInit } from '@angular/core';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_ICON_DIRECTIVES, MdIconRegistry } from '@angular2-material/icon';

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
  directives: [FavoriteIconDirective, ShowContactsDirective, MD_BUTTON_DIRECTIVES, MD_ICON_DIRECTIVES],
  pipes: [PhoneNumberPipe],
  providers: [ContactService, MdIconRegistry]
})
export class ContactListComponent implements OnInit {
  public noContactsMessage: string = 'You do not have any contacts yet';
  public loadingMessage: string = 'Loading contacts...';
  public isLoading: boolean = true;

  constructor(private contactService: ContactService) {}

  ngOnInit() {
    this.addContacts();
  }

  @Input('contacts') contacts: Contact[];

  public deleteContacts() {
    this.contacts = [];
  }

  public addContacts() {
    this.isLoading = true;
    this.contactService.getContacts()
      .then(contacts => {
        this.isLoading = false;
        this.contacts = contacts;
      });
  }
}
