
//map roman numerals
var ref = {
	"M": 1000,
	"CM": 900,
	"D": 500,
	"CD": 400,
	"C" : 100,
	"XC": 90,
	"L": 50,
	"XL": 40,
	"X": 10,
	"IX": 9,
	"V": 5,
	"IV": 4,
	"I": 1
};


/**
 * Given a number, generate the roman numerals
 **/
exports.generate = function(number) {

	if(!Number.isInteger(number)) return manageError("Must be an integer");
	if(number < 1) return manageError("Zero or nagatives not allowed");
	if(number >= 4000) return manageError("Large numbers not allowed");

	var toReturn = ""; //roman numerals
	var i=0;

	//For each roman numberal that we know
	for (i in ref) {

		//Remove the largest denominator that we have available
		// adding that to the string, and removing the value from what is provided
		while ( number >= ref[i] ) {
			toReturn += i;
			number -= ref[i];
		}
	}

	return {
		"error": false,
		"value":toReturn
	}
};


/**
 * Given roman numberals, generate a number
 **/
exports.parse = function(str){

	//Validate arguments
	if(typeof str != "string") return manageError("must provide a string");
	if(str.length < 1) return manageError("must provide a string with length >=1");

	//make uppercase
	str = str.toUpperCase();

	
	var prev = 0;
	var toReturn = 0;

	//Loop through each letter
	for(var i=0; i<str.length; i++){

		//get the character
		var c = str.charAt(i);

		//check it's legit
		if(ref[c] == undefined) return manageError("Error parsing");

		//add the number to the running total
		toReturn += ref[c];

		//if the next number is larger than the previous, we have a "one less" to correct in our total
		if(ref[c] > ref[prev]){

			//remove the previous character, as the one we looked at last was part of this number
			toReturn -= ref[prev];

			//subtract it again, as we have looked at the current number, and need to subtract what was before/
			toReturn -= ref[prev];

		}

		prev = c;
	}

	return (toReturn > 3999) ? manageError("Value is over 3999") :  {error:false, value:toReturn};;
	

}


function manageError(str) {
	return {
		"error" : true,
		"message" : str
	};
}