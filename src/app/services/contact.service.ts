import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  public contacts: Contact[] = [];

  response = {
    contacts: [
      {
        icon: 'fas fa-phone fa-3x',
        detail: '261-2072701'
      },
      {
        icon: 'fas fa-at fa-3x',
        detail: 'contacto@ndona.net'
      },
      {
        icon: 'fab fa-linkedin fa-3x',
        detail: '/in/nicolas-dona',
        link: 'https://www.linkedin.com/in/nicolas-dona'
      },
      {
        icon: 'fab fa-skype fa-3x',
        detail: 'nicolas.dona1'
      }
    ]
  };

  constructor() { }

  getContactData() {
    this.contacts = this.response.contacts;
  }
}
