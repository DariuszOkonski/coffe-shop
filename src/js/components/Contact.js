import { select, templates } from '../settings.js';

class Contact {
  constructor(element) {
    const thisContact = this;

    thisContact.render(element);
  }

  render(element) {
    const thisContact = this;
    thisContact.dom = {};
    thisContact.dom.pageContainer = document.querySelector(select.pageContainerOf.contact);
    const generatedHTML = templates.contactPage();
    thisContact.dom.wrapper = element;
    thisContact.dom.wrapper.innerHTML = generatedHTML;
  }
}

export default Contact;