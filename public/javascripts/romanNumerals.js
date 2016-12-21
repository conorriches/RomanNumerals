$(function() {

	/**
	* Called when the user clicks on the convert Roman to Number button
	**/
	$('#js-convertRoman').on('click',function(){
		var roman = $('#js-romanInput').val(); //get the value of the text box

		var jqxhr = $.get( "/api/parse/" + roman, function(data) {
			
			if(data.error === false){
				$('#js-numberInput').val(data.value);
				$('#js-romanError').attr("class","hidden");
			}else{
				$('#js-romanError').attr("class","error");
			}
			
		})
		.fail(function() {
			alert( "error" );
		});
	});

	/**
	* Called when the user clicks on the convert Number to Roman button
	**/
	$('#js-convertNumber').on('click',function(){
		var number = $('#js-numberInput').val(); //get the value of the text box
		var jqxhr = $.get( "/api/convert/" + number, function(data) {
			
			if(data.error === false){
				$('#js-romanInput').val(data.value);
				$('#js-numberError').attr("class","hidden");
			}else{
				$('#js-numberError').attr("class","error");
			}
			
		})
		.fail(function() {
			alert( "error" );
		});

	});



});