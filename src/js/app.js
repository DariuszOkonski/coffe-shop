import { select, settings } from './settings.js';

const app = {
  init: function () {
    const thisApp = this;

    thisApp.initData();
  },

  initData: function() {
    console.log(select);

    const url = settings.db.url + '/' + settings.db.products;

    this.data = {};
    fetch(url)
      .then((rawResponse) => {
        return rawResponse.json();
      })
      .then((parsedResponse) => {
        this.data.products = parsedResponse;
        console.log('this.data: ', this.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
};

app.init();
