import $ from 'jquery';

class CommissionCalculator {
  constructor() {
    this.money = 0;
    this.amount = 0;
    this.BASE = 0.06;
    this.enterAmountInput = $('#enter-amount');
    this.displayBaseCommission = $('#display-base-commission');
    this.displayCalculatedCommission = $('#display-calculated-commission');
    this.displayTotalSavings = $('#display-total-savings');
    //CHECKBOXES
    this.vacantHouse = $('#vacant-house');
    this.inspection = $('#inspection');
    this.appraisal = $('#appraisal');
    this.survery = $('#survery');
    this.agreementOnline = $('#agreement-online');

    this.init();
    this.setEvents();
  }

  init = () => {
    console.info('CommissionCalculator Initialized ON THE WP FRONTEND');
  };

  getSavings = (amount) => {
    const baseCommission = amount * this.BASE;
    const additionalCommission = this.displayCalculatedCommission.text();
    const commissionNumber = Number(additionalCommission.substring(1));
    const savings = baseCommission - commissionNumber;
    console.log('SAVINGS', savings);
    this.displayTotalSavings.text('$' + savings.toFixed(2));
  };

  // CUSTOM SOLUTIION
  // Following is to replace jQuery's depricated .isNumeric funciton
  // This returns TRUE for numbers and FALSE for alpha characters
  isNumeric = (n) => {
    return !isNaN(parseFloat(n)) && isFinite(n);
  };

  setEvents = () => {
    this.enterAmountInput.on('keyup', this.amountInputHandler);
    // SETTING CHECKBOX EVENTS
    this.vacantHouse.on('change', this.vacantHouseHandler);
    this.inspection.on('change', this.inspectionHandler);
    this.appraisal.on('change', this.appraisalHandler);
    this.survery.on('change', this.surveryHandler);
    this.agreementOnline.on('change', this.agreementOnlineHandler);
  };

  amountInputHandler = () => {
    const amount = this.enterAmountInput.val();
    //RESETTING ALL CHECKBOXES
    this.vacantHouse.prop('checked', false);
    this.inspection.prop('checked', false);
    this.appraisal.prop('checked', false);
    this.survery.prop('checked', false);
    this.agreementOnline.prop('checked', false);

    // CHECKING FOR NUMERIC INPUT
    const result = this.isNumeric(amount);

    // SETTING RED BORDER FOR NON NUMERIC INPUT
    if (result === false) {
      this.enterAmountInput.css('border', '4px solid red');
    } else {
      this.enterAmountInput.css('border', '1px solid #e3e3e3');
    }

    const baseCommission = this.calculateCommission(amount, this.BASE);
    // const calculatedCommssion = this.displayCalculateCommission.text();
    this.displayBaseCommission.text('$' + baseCommission.toFixed(2));
    // this.displayTotalSavings.text('ffdfdfdf');
  };

  vacantHouseHandler = () => {
    // COLLECTING AMOUNT
    this.amount = this.enterAmountInput.val();
    const percentage = 0.0025;
    let money = this.calculateCommission(this.amount, percentage);

    if (this.vacantHouse.prop('checked')) {
      // DISABLING TEXT INPUT
      this.enterAmountInput.prop('disabled', true);

      this.money = this.money + money;

      this.displayCalculatedCommission.text('$' + this.money.toFixed(2));
      this.getSavings(this.amount);
    } else {
      // DISABLING TEXT INPUT
      this.enterAmountInput.prop('disabled', false);

      this.money = this.money - money;

      this.displayCalculatedCommission.text('$' + this.money.toFixed(2));
      this.getSavings(this.amount);
    }
  };

  inspectionHandler = () => {
    // COLLECTING AMOUNT
    this.amount = this.enterAmountInput.val();
    const percentage = 0.002;
    let money = this.calculateCommission(this.amount, percentage);

    if (this.inspection.prop('checked')) {
      this.money = this.money + money;

      this.displayCalculatedCommission.text('$' + this.money.toFixed(2));
      this.getSavings(this.amount);
    } else {
      this.money = this.money - money;

      this.displayCalculatedCommission.text('$' + this.money.toFixed(2));
      this.getSavings(this.amount);
    }
  };

  appraisalHandler = () => {
    // COLLECTING AMOUNT
    this.amount = this.enterAmountInput.val();
    const percentage = 0.002;
    let money = this.calculateCommission(this.amount, percentage);

    if (this.appraisal.prop('checked')) {
      this.money = this.money + money;

      this.displayCalculatedCommission.text('$' + this.money.toFixed(2));
      this.getSavings(this.amount);
    } else {
      this.money = this.money - money;

      this.displayCalculatedCommission.text('$' + this.money.toFixed(2));
      this.getSavings(this.amount);
    }
  };

  surveryHandler = () => {
    // COLLECTING AMOUNT
    this.amount = this.enterAmountInput.val();
    const percentage = 0.002;
    let money = this.calculateCommission(this.amount, percentage);

    if (this.survery.prop('checked')) {
      this.money = this.money + money;

      this.displayCalculatedCommission.text('$' + this.money.toFixed(2));
      this.getSavings(this.amount);
    } else {
      this.money = this.money - money;

      this.displayCalculatedCommission.text('$' + this.money.toFixed(2));
      this.getSavings(this.amount);
    }
  };

  agreementOnlineHandler = () => {
    // COLLECTING AMOUNT
    this.amount = this.enterAmountInput.val();
    const percentage = 0.002;
    let money = this.calculateCommission(this.amount, percentage);

    if (this.agreementOnline.prop('checked')) {
      this.money = this.money + money;

      this.displayCalculatedCommission.text('$' + this.money.toFixed(2));
      this.getSavings(this.amount);
    } else {
      this.money = this.money - money;

      this.displayCalculatedCommission.text('$' + this.money.toFixed(2));
      this.getSavings(this.amount);
    }
  };

  calculateCommission = (amount, percentage) => {
    const commission = amount * percentage;
    return Number(commission);
  };
}

export default CommissionCalculator;
