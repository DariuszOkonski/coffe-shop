import { select, templates } from '../settings.js';

class Home {
  constructor(element) {
    const thisHome = this;
    
    thisHome.render(element);
  }

  render(element) {
    const thisHome = this;
    thisHome.dom = {};
    thisHome.dom.pageContainer = document.querySelector(select.pageContainerOf.home);
    const generatedHTML = templates.homePage();
    thisHome.dom.wrapper = element;
    thisHome.dom.wrapper.innerHTML = generatedHTML;
  }
}

export default Home;