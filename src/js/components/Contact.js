import { templates } from '../settings.js';

class Contact {
  constructor(element) {
    const thisContact = this;

    thisContact.render(element);
  }

  render(element) {
    const thisContact = this;
    thisContact.dom = {};
    const generatedHTML = templates.contactPage();
    thisContact.dom.wrapper = element;
    thisContact.dom.wrapper.innerHTML = generatedHTML;
  }
}

export default Contact;