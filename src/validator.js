const validator = {
  isValid: function (cardNumber) {
    let arrayDigits =  Array();
    /*It coverts string to Array*/
    let digits = cardNumber;
    for (let i = 0; i < digits.length; i++) {
      arrayDigits[i] = digits.charAt(i);
    }
    /*charAt is a string method that returns the character at the specific 
    index position in the string*/        
    let reverseDigits = arrayDigits.reverse();
    for (let i = 0; i < reverseDigits.length; i++) {
      let spot  = i + 1;
      if (spot % 2 == 0) {
        let luhn = reverseDigits[i] * 2; 

       /*1. parseInt is a function that allows to convert the typed data in an even number.
         2. toString converts a number to a string*/
        if (luhn > 9) {
          let algorithm = luhn.toString();
          luhn = parseInt(algorithm.charAt(0)) + parseInt(algorithm.charAt(1));
        }
        reverseDigits[i] = luhn;
      }
      
    }
    let result = 0;
    for (let i = 0; i < reverseDigits.length; i++) {
      result = result + parseInt(reverseDigits[i]);
    }   

    if (result % 10 == 0) {      
      return true;
    } else {      
      return false;
    }
  },
  /*substring is a method that extracts the characters from a string, between two specified indices, and returns the new substring*/
  maskify: function (cardNumber) {
    let maskify = ""
    for (let i = 0; i < cardNumber.length - 4; i++) {
      maskify = maskify + "#";
    }
    return maskify + cardNumber.substring(cardNumber.length - 4, cardNumber.length);
  }  
};

export default validator;
