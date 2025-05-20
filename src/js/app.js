import Contact from './components/Contact.js';
import Home from './components/Home.js';
import Product from './components/Product.js';
import { select, settings } from './settings.js';

const app = {
  init: function () {
    const thisApp = this;

    // thisApp.pages = document.querySelector(select.containerOf.pages);

    // console.log(thisApp.pages)

    thisApp.initData();
    thisApp.initHome();
    thisApp.initProducts();
    thisApp.initContact();
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
    // console.log(select);

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
  }
};

app.init();
