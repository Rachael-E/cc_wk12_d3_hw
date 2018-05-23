const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js');

const Number = function () {
  this.numberInfo = {
    text: null,
    number: null
  };
}


// gets the API data, and then publishes it. 
Number.prototype.publishAPIData = function (number) {

  const request = new Request(`http://numbersapi.com/${number}?json`)
  request.get((data)=>{
    //console.log(data);
    this.numberInfo.text = data.text;
    this.numberInfo.number = data.number;

    PubSub.publish('Number:APINumberInfo', this.numberInfo)

  })
}


// this gets the number that was submitted in the number_form_view.js, and calls getAPIData
Number.prototype.getUserSubmittedNumber = function () {
  PubSub.subscribe('NumberFormView:submit', (event) => {
    const numberSubmittedByUser = event.detail;
    this.publishAPIData(numberSubmittedByUser);

  })

}

module.exports = Number;
