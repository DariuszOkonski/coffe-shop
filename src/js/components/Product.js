import { select, templates } from '../settings.js';

class Product {
  constructor(element) {
    const thisProduct = this;

    thisProduct.getData();
    thisProduct.render(element);
  }

  render(element) {
    const thisProduct = this;
    thisProduct.dom = {};
    thisProduct.dom.pageContainer = document.querySelector(select.pageContainerOf.products);
    const generatedHTML = templates.productsPage();
    thisProduct.dom.wrapper = element;
    thisProduct.dom.wrapper.innerHTML = generatedHTML;
  }

  getData() {

  }
}

export default Product;