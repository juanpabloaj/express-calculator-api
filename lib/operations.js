function suma(numbers) {
  var total = 0;
  for (var i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
}

module.exports = {
  operation: function(operation, numbers){
    switch (operation) {
      case '+':
        return suma(numbers);
        break;
      default:
        return "null";
    }
  }
}
