import { Contact } from './+contacts/shared/models/';
import { CONTACTS } from './+contacts/shared/data/mock-contacts';

export class InMemoryDataService {
  createDb() {
    const contacts: Contact[] = CONTACTS;

    return {contacts};
  }
}
