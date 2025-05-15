import { select } from './settings.js';

const app = {
  init: function() {
    const thisApp = this;
      
    thisApp.initProduct();
  },

  initProduct: function() {
    console.log('initProduct');
    console.log(select);
  }
};

app.init();