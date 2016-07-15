import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Contact } from '../';
import { CONTACTS } from '../';

@Injectable()
export class ContactService {
  private CONTACTS_URL: string = 'app/heroes';

  constructor(private http: Http) { }

  public getContacts(): Promise<Contact[]> {
        // return this.http.get(this.CONTACTS_URL)
        //        .toPromise()
        //        .then(response => response.json().data)
        //        .catch(this.handleError);
    return Promise.resolve(CONTACTS);
  }

  public getContactsSlowly(): Promise<Contact[]> {
    return new Promise<Contact[]>(resolve =>
      setTimeout(() => resolve(CONTACTS), 2000));
  }

  public getContact() {

  }

  public save() {

  }

  public delete() {

  }

  public post() {

  }

  public put() {

  }

  public handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
