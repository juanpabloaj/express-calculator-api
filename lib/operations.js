function suma(numbers) {
  var total = 0;
  for (var i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
}

function resta(numbers) {
  var total = numbers[0];
  for (var i = 1; i < numbers.length; i++) {
    total -= numbers[i];
  }
  return total;
}

function multi(numbers) {
  var total = 1;
  for (var i = 0; i < numbers.length; i++) {
    total *= numbers[i];
  }
  return total;
}

function dividir(numbers) {
  var total = numbers[0];
  for (var i = 1; i < numbers.length; i++) {

    if (numbers[i] === 0) {
      return "null"
    }

    total /= numbers[i];
  }
  return total;
}

module.exports = {
  operation: function(operation, numbers){
    switch (operation) {
      case '+':
        return suma(numbers);
        break;
      case '-':
        return resta(numbers);
        break;
      case '*':
        return multi(numbers);
        break;
      case '/':
        return dividir(numbers);
        break;
      default:
        return "null";
    }
  }
}
