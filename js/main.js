console.log("main working")

$(document).ready(function(){
	$('#submit').click(function(event){
		event.preventDefault();
		validateForm()
	})
})

function isName(val){
	var regex = /^[A-Za-z]+$/
	return regex.test(val);
}

function isEmail(val){
	var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
 	return regex.test(val);
}

function fieldMissing(val){
	if(val == ""){
		return false;
	}else{
		return true;
	}
}

function validateForm(){

	var name = $('#inputName').val()
	var email = $('#inputEmail').val()
	var message = $('textarea').val()

	if(isName(name) && isEmail(email) && fieldMissing(name, email, message) == true){
		$("span").hide();
		$("#success").hide();
		$(".successMsj").show();
		$.ajax({
		    url: "https://formspree.io/contacto@optimalcrop.cl", 
		    method: "POST",
		    data: {message, name, email},
		    dataType: "json"
		});
	}else{
		$("span").show();
	}
}