const PubSub = require('../helpers/pub_sub.js')

const NumberFormView = function (form) {
  this.form = form;
};

// when the submit button is pressed, it looks for the handleSsubmit, which publishes the value of the target (whatever was submitted) //
 NumberFormView.prototype.bindEvents = function () {
  this.form.addEventListener('submit', (evt) => {
    this.handleSubmit(evt);
  })
};

NumberFormView.prototype.handleSubmit = function (evt) {
  evt.preventDefault();
  PubSub.publish('NumberFormView:submit', evt.target.number.value);
};

module.exports = NumberFormView;
