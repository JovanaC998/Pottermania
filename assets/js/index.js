$(document).ready(function() {
	loadMoivesChb();
	document.getElementById("btnVote").addEventListener("click",proveraGlasanja);
	loadMoviesImgAndTitles();
});

function loadMoivesChb(){
	var movies = ["Sorcerers Stone", "Chamber of Secrets", "Prisoner of Azkaban", "Goblet of Fire", "Order of Phoenix", "Half Blood Prince", "Deathly Hallows Part 1", "Deathly Hallows Part 2"];
	var movieList = "<ul>"
	for( var i=0; i < movies.length; i++) {
		movieList += "<li><input type='checkbox' value='" + movies[i] + "' name='chbxVote'>" + movies[i] + "<br></li>"
	}
	movieList += "</ul>"
	document.getElementById("moviesList").innerHTML = movieList;
}

function proveraGlasanja() {
	var glasovi = document.getElementsByName("chbxVote");
	var izabrano = "";
	var vote = 0;

	for(var i=0; i < glasovi.length ; i++){
		if(glasovi[i].checked) {
			vote++;
			izabrano += "<i><p>Your choice "+ vote + ": " + glasovi[i].value + "</p></i>";
		} 
	} 
	if(vote > 2) {
		izabrano = "<p><b>You chose more than you can.</b></p>"
	} else if(vote == 0){
		izabrano = "<p><b>Choose two movies.</b></p>"
	} else {
		$("#btnVote").hide();
	}
	document.getElementById("vote").innerHTML = izabrano;
}

function loadMoviesImgAndTitles() {
	let movies = [
		{src: "prvi", title:"Sorcerer's Stone"}, 
		{src: "drugi", title:"Chamber of Secrets"}, 
		{src: "treci", title:"Prisoner of Azkaban"}, 
		{src: "cetvrti", title:"Goblet of Fire"}, 
		{src: "peti", title:"Order of Phoenix"}, 
		{src: "sesti", title:"Half Blood Prince"}, 
		{src: "sedmi", title:"Deathly Hallows Part 1"}, 
		{src: "sedmi2", title:"Deathly Hallows Part 2"}
	];
	
		var ispis = "";
		for(let i = 0; i < movies.length; i++) {
			
				ispis+=	`<figure class="slika">
				<img src="assets/images/${movies[i].src}.jpg" alt="Movie Part"/>
				<figcaption class="part">${movies[i].title}</figcaption>
				 </figure>`
			
		}
		document.getElementById("parts").innerHTML=ispis;
}
