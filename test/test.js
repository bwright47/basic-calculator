var chai = require('chai');
var assert = chai.assert; //these tests are using the "assert" style of Chai

var func = require('./../functions');

describe ('Plus', function (){
  it ("adds two numbers correctly", function() {
    assert.strictEqual(func.plus(1,1),2);
    assert.strictEqual(func.plus(-2,3),1);
    assert.strictEqual(func.plus(350,-450),-100);
    //assert.strictEqual(func.plus(.2,.1),.3); javascript known issue
  });
});

describe ('Multiple', function() {
  it ("is the sum of two numbers times each other", function () {
    assert.strictEqual(func.multiple(4,5),20);
  });
  it ("does not accept non numeric values", function () {
      assert.isNaN(func.divide('foo + 5',4),'foo is NaN');
  });
});

describe ('Subtract', function() {
  it ("is the difference of two numbers", function () {
    assert.strictEqual(func.subtract(100, 40), 60);
  });
});

describe ('Divide', function() {
  it ("has the value of two disivible numbers", function () {
    assert.strictEqual(func.divide(20,5),4);
  });
  it ("does not accept non numeric values", function () {
     assert.isNaN(func.divide('foo / 5',4),'foo is NaN');
  });
  it ("Throw an error when dividing by Zero", function () {
    var divideByZero = function(){
      func.divide(4,0);
    };
    assert.throws(divideByZero);
  });

});
