var operations = require('../lib/operations');
var assert = require('assert');

describe('Operations', function(){
  it('sumar dos numeros', function(){
    assert.equal(5, operations.operation("+", [2, 3]));
  });

  it('desconocido retorna null', function(){
    assert.equal("null", operations.operation('?', [1,2]))
  })
});
