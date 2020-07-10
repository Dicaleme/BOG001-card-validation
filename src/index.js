import validator from './validator.js';
document.getElementById("submit").addEventListener("click", payment);

function payment() {
  let digits = document.getElementById("number").value;
  document.getElementById("number").value = validator.maskify(digits);

  let luhn = validator.isValid(digits);
  
  let maskDigits = validator.maskify(digits);
  let purchase = document.getElementById("purchase");
  if (luhn == true) {
    
    purchase.textContent="Payment approved through credit card number" + maskDigits;
    return true;
  } else {
    purchase.textContent="Payment declined through credit card number " + maskDigits;
    
    return false;
  }


}