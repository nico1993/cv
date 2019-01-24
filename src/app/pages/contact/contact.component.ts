import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { ContactForm } from '../../models/contact-form';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public contact: ContactForm = new ContactForm();

  constructor(public _contact: ContactService) { }

  ngOnInit() {
    this._contact.getContactData();
  }

  enviar(contactForm: NgForm) {
    if (contactForm.valid) {
      // enviar al back
      console.log(this.contact);
    }
  }
}
