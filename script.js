var calculator = {
	calcArray: [],
	clear: function() {
 		this.calcArray = [];
    view.displayCalculator();
  },
  input: function (x) {
		this.calcArray.push(x);
    view.displayCalculator();
  },
  calculateView: function() {
		this.calcArray = [this.calc(this.calcArray)];
    view.displayCalculator();
  },
  calc: function (array) {
  	return eval(array.join(''));
  }
};

var view = {
	setUpEventListeners: function () {
    $('div div').on('click', function(event) {
      if(event.target.id === '=') {
				calculator.calculateView();
      } else if (event.target.id === 'clear') {
      	calculator.clear();
      } else {
				calculator.input(event.target.id);
      }
    })
  },
  displayCalculator: function() {
  	var display = $('#display');
    display.empty();
  	display.append("Screen: " + calculator.calcArray.join(' '));
  }
};

view.setUpEventListeners();
