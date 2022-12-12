window.onload=function(){
    populateMenu();

    document.querySelector(".icon").addEventListener("click", myFunction);
}

function myFunction() {
    var x = document.getElementById("meni");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function populateMenu(){
    var ispis="<ul>";
    var ispisFuter = "<ul>";
    var menu = ["Home","Hogwarts", "Gallery","Contact","About"];
    for (let i = 0; i < menu.length; i++) {
        if(menu[i].toLowerCase() == "home") {
            ispis+=`<li><a href="index.html">${menu[i]}</a></li>`
            ispisFuter += `<li><a href="index.html">&#x25C6 ${menu[i]}</a></li>`
        } else {
            ispis+=`<li><a href="${menu[i].toLowerCase()}.html">${menu[i]}</a></li>`
            ispisFuter += `<li><a href="${menu[i].toLowerCase()}.html">&#x25C6 ${menu[i]}</a></li>`
        } 

    }
    ispis+='<li><a href="javascript:void(0);" class="icon"><span class="fa fa-bars"></span></a></li></ul>';
    ispisFuter += "</ul>"
    document.getElementById("meni").innerHTML=ispis;
    document.getElementById("meniFuter").innerHTML = ispisFuter;
}

