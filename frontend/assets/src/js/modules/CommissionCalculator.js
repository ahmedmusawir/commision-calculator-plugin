import $ from 'jquery';

class CommissionCalculator {
  constructor() {
    this.enterAmountInput = $('#enter-amount');
    this.displayResultBox = $('#display-result');
    this.calculateBtn = $('#calculate-btn');
    console.log(this.calculateBtn);

    this.init();
    this.setEvents();
  }

  init = () => {
    console.info('CommissionCalculator Initialized ON THE WP FRONTEND');
  };

  setEvents = () => {
    this.calculateBtn.on('click', this.calculateHandler);
  };

  calculateHandler = () => {
    alert('submit clicked');
    console.timeLog('submit clicked');
  };
}

export default CommissionCalculator;
