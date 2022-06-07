import $ from 'jquery';
import CommissionCalculator from './CommissionCalculator';

class App {
  constructor() {
    this.init();
  }

  init = () => {
    console.info('App Initialized ON THE WP FRONTEND');
    // COMMISSION CALCULATOR MODULE LOADED
    new CommissionCalculator();
  };
}

export default App;
