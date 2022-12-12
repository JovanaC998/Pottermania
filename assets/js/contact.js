$(document).ready(function() {
	loadHouses();
	document.getElementById("submitContact").addEventListener("click",proveraKontakt);
	document.getElementById("btnLogin").addEventListener("click", proveraLogin);
	document.getElementById("btnRegister").addEventListener("click", proveraRegister);
});

var reEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var reUsername = /^[a-zA-Z0-9]{3,30}$/;
var rePass = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[.#?!@$%^&*-]).{8,}$/;


function proveraKontakt() {
	var nameContact = document.getElementById("fullName");
	var phoneContact = document.getElementById("phoneContact");
	var textContact = document.getElementById("textContact");

	var reName = /^[A-ZŠĐČĆŽ][a-zšđčćž]{1,11}(\s[A-ZŠĐČĆŽ][a-zšđčćž]{1,11})+$/;
	var rePhone = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
	var reText = /^[a-zA-Z0-9_ ]{3,}$/;

	var nizGreske = [];
	var nizOk = ["You have successfully sent a message: "];

	if(!reName.test(nameContact.value)) {
		nizGreske.push("You didn't enter the Name and Surname correctly!")
	} else {
		nizOk.push(nameContact.value);
	}

	if(!reEmail.test(emailContact.value)) {
		nizGreske.push("You didn't enter Email correctly!")
	} else {
		nizOk.push(emailContact.value);
	}

	if(!rePhone.test(phoneContact.value)) {
		nizGreske.push("You didn't enter Phone correctly!")
	} else {
		nizOk.push(phoneContact.value);
	}

	if(!reText.test(textContact.value)) {
		nizGreske.push("You didn't enter your message correctly! Your message needs to have at least 3 characters!")
	} else {
		nizOk.push(textContact.value);
	}
	
	var lista = "<ul>";
	if(nizGreske != 0) {
		for(var i=0; i < nizGreske.length; i++) {
			lista += "<li style='color:#ff0000'>" + nizGreske[i] + "</li>"
		}
	} else {
		for(var i=0; i < nizOk.length; i++) {
			lista += "<li style='color:#48688a'>" + nizOk[i] + "</li>";
			$("#contactForm").trigger("reset");
		}
	}
	lista += "</ul>"

	$("#validInfo").html(lista);
}

function proveraLogin() {
	var username = document.getElementById("usernameLogin");
	var password = document.getElementById("passwordLogin");

	var nizGreske = [];
	var nizOk = [];

	if(!reUsername.test(username.value)) {
		nizGreske.push("You didn't enter Username correctly!")
	} else {
		nizOk.push(username.value);
	}

	if(!rePass.test(password.value)) {
		nizGreske.push("You didn't enter Password correctly!")
	} else {
		nizOk.push(password.value);
	}

	var lista = "<ul>";
	if(nizGreske != 0) {
		for(var i=0; i < nizGreske.length; i++) {
			lista += "<li style='color:#ff0000'>" + nizGreske[i] + "</li>"
		}
	} else {
		lista = "<li style='color:#48688a'>You have successfully logged in!</li>"
	}
	lista += "</ul>";

	$("#loginForm").trigger("reset");
	$("#validLogin").html(lista);

}
function proveraRegister() {
	var username = document.getElementById("usernameRegister");
	var password = document.getElementById("passwordRegister");
	var confPass = document.getElementById("confPasswordRegister");
	var email = document.getElementById("emailRegister");
	var houseDdl = document.getElementById("ddlHouses");
	var selectedHouse = houseDdl.options[houseDdl.selectedIndex].value;

	var nizGreske = [];
	var nizOk = [];

	if(!reUsername.test(username.value)) {
		nizGreske.push("You didn't enter Username correctly. Username must be composed of letters or numbers with a length of 3 to 30 characters!")
	} else {
		nizOk.push("Your username is: " + username.value);
	}

	if(!reEmail.test(email.value)) {
		nizGreske.push("You didn't enter Email correctly!");
	} else {
		nizOk.push("Your email is: " + email.value);
	}

	if(selectedHouse == "0") {
		nizGreske.push("You didn't choose a house!");
	} else {
		nizOk.push("You choose the house: " + selectedHouse);
	}
	
	if(!rePass.test(password.value)) {
		nizGreske.push("You didn't enter Password correctly. Password must have a large letter, a number, a special character and mustn't be shorter than 8 characters!")
		password.value = "";
		confPass.value = "";
	} else if(password.value != confPass.value) {
		nizGreske.push("You didn't enter the same password!");
		password.value = "";
		confPass.value = "";
	}

	var lista = "<ul>";
	if(nizGreske != 0) {
		for(var i=0; i < nizGreske.length; i++) {
			lista += "<li style='color:#ff0000'>" + nizGreske[i] + "</li>"
		}
	} else {
		for(var i=0; i < nizOk.length; i++) {
			lista += "<li style='color:#48688a'>" + nizOk[i] + "</li>"
		}
		$("#registerForm").trigger("reset");
	}
	lista += "</ul>"
	
	$("#validReg").html(lista);


}
function loadHouses() {
	var houses = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];

	var ispis = "<select id='ddlHouses' class='houses-select'>";
	ispis += "<option value = 0>Select</option>";
	for(var i=0; i < houses.length; i++) {
		ispis += "<option value='" + houses[i] + "'>" + houses[i] + "</option>";
	}
	ispis += "</select></br></br>";

	$("#passwordRegister").before(ispis);
}
