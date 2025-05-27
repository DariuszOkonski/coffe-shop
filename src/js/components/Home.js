import { select, templates } from '../settings.js';

class Home {
  constructor(element, products) {
    const thisHome = this;
    
    thisHome.render(element, products);
  }

  render(element, products) {

    console.log('Home render: ', products);

    const thisHome = this;
    thisHome.dom = {};
    thisHome.dom.pageContainer = document.querySelector(select.pageContainerOf.home);
    const generatedHTML = templates.homePage({products});
    thisHome.dom.wrapper = element;
    thisHome.dom.wrapper.innerHTML = generatedHTML;
  }
}

export default Home;