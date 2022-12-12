
$(document).ready(function() {

	populateDescription();
	makeTable();
});

function populateDescription (){
	var text= [
		"-Hogwarts was founded around 990 A.D. by two wizards and two witches: Godric Gryffindor, Helga Hufflepuff, Rowena Ravenclaw,and Salazar Slytherin. They each represented an aspect of personality that they wanted to bring out in new students.",
		"-Hogwarts School of Witchcraft and Wizardry is the British wizarding school, located in the Highlands of Scotland. It takes students from the United Kingdom of Great Britain and Northern Ireland, and Ireland.",
		"-The school's motto is Draco Dormiens Nunquam Titillandus (Draco Dormiens Nvnqvam Titillandvs), which, translated from Latin, means 'Never tickle a sleeping dragon'"
	]
	var ispis="";
	for (let i = 0; i < text.length; i++) {
		ispis+=`<div class = "col"><p class ="text"> ${text[i]}</p></div>`
	}
	document.getElementById("description").innerHTML=ispis;
}

function makeTable() {
	let houses = [
		{name: "Gryffindor", founder: "Godric Gryffindor", animal:"Lion", head:"Minerva McGonagall"},
		{name:"Hufflepuff", founder:"Helga Hufflepuff",animal:"Badger",head:"Filius Flitwick"},
		{name:"Ravenclaw",founder:"Rowena Ravenclaw",animal:"Eagle",head:"Horace Slughorn"},
		{name:"Slytherin",founder:"Salazar Slytherin",animal:"Snake",head:"Severus Snape"}
	];

	var ispis ="<tr><th>Name</th><th>Founder</th><th>Animal</th><th>Head</th></tr>";
	for (let i = 0; i < houses.length; i++) {
		ispis+=`<tr>
			<td>${houses[i].name}</td>
			<td>${houses[i].founder}</td>
			<td>${houses[i].animal}</td>
			<td>${houses[i].head}</td>
			</tr>`
	}
	document.getElementById("kuca").innerHTML=ispis;
	$('table tbody tr:even').css('background-color','#9CBACD')
	$('table tbody tr:odd').css('background-color','#eee')
}