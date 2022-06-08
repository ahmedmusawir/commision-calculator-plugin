<article class="<?php echo $width; ?>">

  <h2 class="text-center mb-5">Commission Calculator</h2>

  <section class="calculator-box">
    <form>

      <div class="form-group">
        <label for="exampleInputEmail1">Enter Amount</label>
        <div class="input-group mb-2">
          <div class="input-group-prepend">
            <div class="input-group-text">$</div>
          </div>
          <input type="text" class="form-control" id="enter-amount" placeholder="Value of your property">
        </div>
        <small id="emailHelp" class="form-text text-muted">(Numbers Only.)</small>
      </div>
      <div class="form-group row">
        <div class="col-md-6">
          <label for="exampleInputPassword1">Our Base Commission</label>
          <div id="display-base-commission" class="card p-5">Result goes here...</div>
        </div>
        <div class="col-md-6">
          <label for="exampleInputPassword1">Your Commission</label>
          <div id="display-calculated-commission" class="card p-5">Result go here...</div>
        </div>
      </div>
      <div class="form-check">
        <input type="checkbox" class="form-check-input" id="vacant-house">
        <label class="form-check-label mr-5" for="vacant-house">Vacant House (.25%)</label>
      </div>
      <div class="form-check">
        <input type="checkbox" class="form-check-input" id="inspection">
        <label class="form-check-label mr-5" for="inspection">Inspection Done (.20%)</label>
      </div>
      <div class="form-check">
        <input type="checkbox" class="form-check-input" id="appraisal">
        <label class="form-check-label mr-5" for="appraisal">Appraisal Done (.20%)</label>
      </div>
      <div class="form-check">
        <input type="checkbox" class="form-check-input" id="survery">
        <label class="form-check-label mr-5" for="survery">Survey Done (.20%)</label>
      </div>
      <div class="form-check">
        <input type="checkbox" class="form-check-input" id="agreement-online">
        <label class="form-check-label mr-5" for="agreement-online">For Completing the Lisitng agreement online</label>
      </div>

      <hr>

      <div class="">
        <label for="exampleInputPassword1">Your Total Savings</label>
        <div id="display-total-savings" class="card p-5">Click any choice above...</div>
      </div>


      <!-- <button id="calculate-btn" type="button" class="btn btn-primary">Submit</button> -->
    </form>
  </section>

</article>