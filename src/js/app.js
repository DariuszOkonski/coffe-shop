import Contact from './components/Contact.js';
import Home from './components/Home.js';
import Product from './components/Product.js';
import { classNames, select, settings } from './settings.js';

const app = {
  init: function () {
    const thisApp = this;
    thisApp.dom = {};

    thisApp.initData();
    thisApp.initHome();
    thisApp.initProducts();
    thisApp.initContact();

    thisApp.initNavigation();
  },
  initNavigation: function() {
    const thisApp = this;
    console.log('initNavigation');
    thisApp.dom.navigation = document.querySelectorAll(select.nav.links);
    thisApp.dom.navigationContainer = document.querySelector(select.nav.container);
    
    thisApp.dom.navigation[0].classList.add(classNames.nav.active);
    thisApp.home.dom.homePageContainer.classList.add(classNames.pages.active);

    thisApp.dom.navigationContainer.addEventListener('click', (event) => {
      thisApp.removeActiveNavigation();
      event.target.classList.add(classNames.nav.active);

      console.log('============');
      const idFromHash = event.target.getAttribute('href').replace('#/', '');
      console.log(thisApp[idFromHash]);

      // thisApp[idFromHash].dom.productPage .classList.add(classNames.pages.active);
    });




    

    // const navLinks = 
  },  
  initHome: function() {
    const thisApp = this;
    const homeElement = document.querySelector(select.containerOf.home);
    thisApp.home = new Home(homeElement);
  },

  initProducts: function() {
    const thisApp = this;
    const productsElement = document.querySelector(select.containerOf.products);
    thisApp.products = new Product(productsElement);
  },

  initContact: function() {
    const thisApp = this;
    const contactElement = document.querySelector(select.containerOf.contact);
    thisApp.contact = new Contact(contactElement);
  },

  initData: function() {
    const url = settings.db.url + '/' + settings.db.products;

    this.data = {};
    fetch(url)
      .then((rawResponse) => {
        return rawResponse.json();
      })
      .then((parsedResponse) => {
        this.data.products = parsedResponse;
        // console.log('this.data: ', this.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  },

  removeActiveNavigation: function() {
    const thisApp = this;
    thisApp.dom.navigation.forEach((item) => {
      if(item.classList.contains(classNames.nav.active)) {
        item.classList.remove(classNames.nav.active);
      }
    });
  }
};

app.init();
