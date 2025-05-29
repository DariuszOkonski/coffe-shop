export const select = {
  home: {
    headerFirstText: '.header__first-text',
    headerSecondText: '.header__second-text',
    header: '.header',
  },
  nav: {
    container: '.nav__list-items',
    links: '.nav__list-items a',
  },
  templateOf: {
    home: '#template-home',
    products: '#template-products',
    contact: '#template-contact',
  },
  pageContainerOf: {
    home: '#home',
    products: '#products',
    contact: '#contact',
  },
  containerOf: {
    pages: '#pages section',
    home: '.home-wrapper',
    products: '.products-wrapper',
    contact: '.contact-wrapper',
  },
};

export const classNames = {
  nav: {
    active: 'active',
  },
  pages: {
    active: 'active',
  },
  home: {
    hide: 'hide-before',
  },
};

export const settings = {
  db: {
    url: 'http://localhost:3232',
    products: 'products',
  },
};

export const templates = {
  homePage: Handlebars.compile(
    document.querySelector(select.templateOf.products).innerHTML
  ),
  productsPage: Handlebars.compile(
    document.querySelector(select.templateOf.products).innerHTML
  ),
  contactPage: Handlebars.compile(
    document.querySelector(select.templateOf.contact).innerHTML
  ),
};
