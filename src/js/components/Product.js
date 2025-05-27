import { select, templates } from '../settings.js';

class Product {
  constructor(element, products) {
    const thisProduct = this;

    thisProduct.getData();
    thisProduct.render(element, products);
  }

  render(element, products) {
    console.log('Products render: ', products);

    const thisProduct = this;
    thisProduct.dom = {};
    thisProduct.dom.pageContainer = document.querySelector(select.pageContainerOf.products);
    const generatedHTML = templates.productsPage({products});

    thisProduct.dom.wrapper = element;
    thisProduct.dom.wrapper.innerHTML = generatedHTML;
  }

  getData() {

  }
}

export default Product;