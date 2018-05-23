const NumberFormView = require('./views/number_form_view.js');
const FactView = require('./views/number_fact_view.js');
const Number = require('./models/number.js');

document.addEventListener('DOMContentLoaded', () => {
  const displayNumberTextFromAPI = document.querySelector('#number-fact')
  const numberFactView = new FactView(displayNumberTextFromAPI);
  numberFactView.setUpListenerForDataObtainedFromAPI();

  const number = new Number();
  number.getUserSubmittedNumber();

  const numberForm = document.querySelector('form#number-form');
  const numberFormView = new NumberFormView(numberForm);
  numberFormView.bindEvents(); // this is to check when the button has been pressed. when event is pressed, starts the stuff. 
});
