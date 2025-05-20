
// this object is used for querySelect method
export const select = {
  home: {},
  contact: {},
  products: {},
  templateOf: {},
  containerOf: {
    pages: '#pages'
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
  products: Handlebars.compiled(
    document.querySelector(select.containerOf.pages).innerHTML
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