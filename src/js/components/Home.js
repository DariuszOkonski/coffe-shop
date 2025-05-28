import { select, templates } from '../settings.js';
import { homeHeaderMainText } from '../homeData.js';


class Home {
  constructor(element, products) {
    const thisHome = this;
    thisHome.render(element, products);

    thisHome.displayRandomMainText(homeHeaderMainText);
  }

  render(element, products) {
    const thisHome = this;
    thisHome.dom = {};
    thisHome.dom.pageContainer = document.querySelector(
      select.pageContainerOf.home
    );
    thisHome.dom.headerFirstText = document.querySelector(select.home.headerFirstText);
    thisHome.dom.headerSecondText = document.querySelector(select.home.headerSecondText);

    const generatedHTML = templates.homePage({ products });
    thisHome.dom.wrapper = element;
    thisHome.dom.wrapper.innerHTML = generatedHTML;
  }

  displayRandomMainText(data) {
    const thisHome = this;
    const randomText = Math.floor(Math.random() * data.length);
    const textToDisplay = data[randomText];

    thisHome.dom.headerFirstText.textContent = textToDisplay.firstText;
    thisHome.dom.headerSecondText.textContent = textToDisplay.secondText;
  }
}

export default Home;
