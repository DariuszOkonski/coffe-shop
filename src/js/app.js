import Contact from './components/Contact.js';
import Home from './components/Home.js';
import Product from './components/Product.js';
import { classNames, select, settings } from './settings.js';

Handlebars.registerHelper('ifEven', function (index, options) {
  if (index % 2 !== 0) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
});

const app = {
  init: function () {
    const thisApp = this;
    thisApp.dom = {};

    thisApp.initData();
  },
  removeLoadingScreen() {
    const header = document.querySelector(select.home.header);
    header.classList.add(classNames.home.hide);
  },
  initPages: function () {
    const thisApp = this;
    thisApp.dom.navigation = document.querySelectorAll(select.nav.links);
    thisApp.dom.navigationContainer = document.querySelector(
      select.nav.container
    );
    thisApp.dom.pages = document.querySelectorAll(select.containerOf.pages);
  },
  initNavigation: function () {
    const thisApp = this;

    const hashId = window.location.hash
      ? window.location.hash.replace('#/', '')
      : 'home';

    thisApp.dom.navigation[thisApp.getActiveNavigation(hashId)].classList.add(
      classNames.nav.active
    );
    thisApp[hashId].dom.pageContainer.classList.add(classNames.pages.active);

    thisApp.dom.navigationContainer.addEventListener('click', (event) => {
      thisApp.removeActiveNavigation();
      event.target.classList.add(classNames.nav.active);

      thisApp.removeActivePages();
      const idFromHash = event.target.getAttribute('href').replace('#/', '');
      thisApp[idFromHash].dom.pageContainer.classList.add(
        classNames.pages.active
      );
    });
  },
  initHome: function () {
    const thisApp = this;
    const homeElement = document.querySelector(select.containerOf.home);

    const { products } = thisApp.data;
    thisApp.home = new Home(homeElement, products);
  },

  initProducts: function () {
    const thisApp = this;
    const productsElement = document.querySelector(select.containerOf.products);

    const { products } = thisApp.data;
    thisApp.products = new Product(productsElement, products);
  },

  initContact: function () {
    const thisApp = this;
    const contactElement = document.querySelector(select.containerOf.contact);
    thisApp.contact = new Contact(contactElement);
  },

  initData: function () {
    const url = settings.db.url + '/' + settings.db.products;
    const thisApp = this;

    thisApp.data = {};

    fetch(url)
      .then((response) => response.json())
      .then((parsedResponse) => {
        thisApp.data.products = parsedResponse;

        thisApp.removeLoadingScreen();
        thisApp.initComponents();
      })
      .catch((err) => {
        console.log(err.message);
      });
  },

  initComponents: function () {
    const thisApp = this;

    thisApp.initHome();
    thisApp.initProducts();
    thisApp.initContact();

    thisApp.initPages();
    thisApp.initNavigation();
  },

  getActiveNavigation(input) {
    switch (input) {
    case 'home':
      return 0;
    case 'products':
      return 1;
    case 'contact':
      return 2;
    default:
      return 0;
    }
  },

  removeActivePages: function () {
    const thisApp = this;

    thisApp.dom.pages.forEach((item) => {
      if (item.classList.contains(classNames.pages.active)) {
        item.classList.remove(classNames.pages.active);
      }
    });
  },

  removeActiveNavigation: function () {
    const thisApp = this;
    thisApp.dom.navigation.forEach((item) => {
      if (item.classList.contains(classNames.nav.active)) {
        item.classList.remove(classNames.nav.active);
      }
    });
  },
};

app.init();
