const PubSub = require('../helpers/pub_sub.js')

const FactView = function(view){
  this.view = view;
}


// this listens for the published info from the API, and displays it //
FactView.prototype.setUpListenerForDataObtainedFromAPI = function() {
  PubSub.subscribe('Number:APINumberInfo', (event) => {
    this.displayInfoFromAPI(event.detail);


  })
}

// this displays the info from the API //
FactView.prototype.displayInfoFromAPI = function(data) {
  this.view.innerHTML ='';

  const number = document.createElement('h3');
  number.textContent = `Number: ${data.number}`;

  const text = document.createElement('h3');
  text.textContent = `The random fact: ${data.text}`;

  this.view.appendChild(number);
  this.view.appendChild(text);


}



module.exports = FactView;
