var operations = require('../lib/operations');
var assert = require('assert');

describe('Operations', function(){
  it('sumar dos numeros', function(){
    assert.equal(5, operations.operation("+", [2, 3]));
  });

  it('sumar dos numeros', function(){
    assert.equal(-1, operations.operation("-", [2, 3]));
  });

  it('multiplicar dos numeros', function(){
    assert.equal(6, operations.operation("*", [2, 3]));
  });

  it('dividir numeros', function(){
    assert.equal(1.5, operations.operation("/", [3, 2]));
  });

  it('dividir por cero', function(){
    assert.equal("null", operations.operation("/", [3, 0]));
  });

  it('desconocido retorna null', function(){
    assert.equal("null", operations.operation('?', [1,2]))
  })
});
