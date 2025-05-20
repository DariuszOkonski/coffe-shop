
// this object is used for querySelect method
export const select = {
  home: {},
  contact: {},
  products: {},
  nav: {
    links: '.nav__list-items a'
  },
  templateOf: {
    home: '#template-home',
    products: '#template-products',
    contact: '#template-contact'
  },
  containerOf: {
    pages: '#pages',
    home: '.home-wrapper',
    products: '.products-wrapper',
    contact: '.contact-wrapper'
  }
};

// this object is used for adding, removing and toggling classes
export const classNames = {
  home: {},
  contact: {},
  products: {}
};

// this object is used for constants
export const settings = {
  db: {
    url: 'http://localhost:3232',
    products: 'products'
  }
};

export const templates = {
  homePage: Handlebars.compile(
    document.querySelector(select.templateOf.home).innerHTML
  ),
  productsPage: Handlebars.compile(
    document.querySelector(select.templateOf.products).innerHTML
  ),
  contactPage: Handlebars.compile(
    document.querySelector(select.templateOf.contact).innerHTML
  )
};

// export const templates = {
//   menuProduct: Handlebars.compile(
//     document.querySelector(select.templateOf.menuProduct).innerHTML
//   ),
//   cartProduct: Handlebars.compile(
//     document.querySelector(select.templateOf.cartProduct).innerHTML
//   ),
//   bookingWidget: Handlebars.compile(
//     document.querySelector(select.templateOf.bookingWidget).innerHTML
//   ),
//   homePage: Handlebars.compile(
//     document.querySelector(select.templateOf.homePage).innerHTML
//   ),
// };