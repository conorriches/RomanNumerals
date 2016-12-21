var romanNumerals = require("../libraries/romanNumerals.js");

var assert = require('assert');

describe('generate', function(){
	it('should not allow no arguments', function(){
		assert.equal(romanNumerals.generate().error,true);
	});

	it('should not allow non integers', function(){
		assert.equal(romanNumerals.generate({}).error,true);
		assert.equal(romanNumerals.generate("").error,true);
		assert.equal(romanNumerals.generate("IV").error,true);
	});

	it('should not allow negatives', function(){
		assert.equal(romanNumerals.generate(-1).error,true);
	});

	it('should not allow zero (edge)', function(){
		assert.equal(romanNumerals.generate(0).error,true);
	});

	it('should not allow large numbers (edge)', function(){
		assert.equal(romanNumerals.generate(4000).error,true);
	});

	it('should not allow extreme numbers', function(){
		assert.equal(romanNumerals.generate(10000).error,true);
	});

	it('should generate I for 1', function(){
		var toTest = romanNumerals.generate(1);
		assert.equal(toTest.error, false);
		assert.equal(toTest.value,"I");	
	});

	it('should generate MMMCMXCIX for 3999', function(){
		var toTest = romanNumerals.generate(3999);
		assert.equal(toTest.error, false);
		assert.equal(toTest.value,"MMMCMXCIX");	
	});

	it('should generate V for 5', function(){
		var toTest = romanNumerals.generate(5);
		assert.equal(toTest.error, false);
		assert.equal(toTest.value,"V");	
	});

	it('should generate CD for 400', function(){
		var toTest = romanNumerals.generate(400);
		assert.equal(toTest.error, false);
		assert.equal(toTest.value,"CD");	
	});


});



describe('parse', function(){
	it('should not allow empty string', function(){
		assert.equal(romanNumerals.parse("").error,true);
	});

	it('should not allow non-strings', function(){
		assert.equal(romanNumerals.parse().error,true);
		assert.equal(romanNumerals.parse({}).error,true);
		assert.equal(romanNumerals.parse(42).error,true);
	});

	it('should not allow invalid characters', function(){
		assert.equal(romanNumerals.parse("MA").error,true);
		assert.equal(romanNumerals.parse("QQQQQ").error,true);
		assert.equal(romanNumerals.parse("Z").error,true);
		assert.equal(romanNumerals.parse("MMMCMXFCIX").error,true);
	});

	it('should convert I to 1', function(){
		var toTest = romanNumerals.parse("I");
		assert.equal(toTest.error,false);
		assert.equal(toTest.value,1);
	});

	it('should convert IX to 9', function(){
		var toTest = romanNumerals.parse("IX");
		assert.equal(toTest.error,false);
		assert.equal(toTest.value,9);
	});

	it('should convert X to 10', function(){
		var toTest = romanNumerals.parse("X");
		assert.equal(toTest.error,false);
		assert.equal(toTest.value,10);
	});

	it('should deal with lowercase', function(){
		var toTest = romanNumerals.parse("mmmcmxcix");
		assert.equal(toTest.error,false);
		assert.equal(toTest.value,3999);
	});

	it('should convert IV to 4', function(){
		var toTest = romanNumerals.parse("IV");
		assert.equal(toTest.error,false);
		assert.equal(toTest.value,4);
	});

	it('should convert MMMCMXCIX to 3999', function(){
		var toTest = romanNumerals.parse("MMMCMXCIX");
		assert.equal(toTest.error,false);
		assert.equal(toTest.value,3999);
	});

	it('should not allow numbers over 3999', function(){
		var toTest = romanNumerals.parse("MMMM");
		assert.equal(toTest.error,true);
	});




})


