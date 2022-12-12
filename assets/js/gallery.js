$(document).ready(function() {
    insertImg()
    $('.flexslider').flexslider({
      animation: "slide"
    });
});

function insertImg() {
    let imgList=[
        {src: "hari", alt:"Harry Potter"},
        {src: "battle", alt:"Harry Potter"},
        {src: "patronus", alt:"Patronus"},
        {src: "hrjh", alt:"Harry Hermione Ron"},
        {src: "lordvoldemort", alt:"Lord Voldemort"},
        {src: "lupin", alt:"Proffesor Lupin"},
        {src: "snape", alt:"Proffesor Snape"},
        {src: "dumbledore", alt:"Dumbledore"},
    ];

    let ispis= '<ul class="slides">'
    for (let i = 0; i < imgList.length; i++) {
        ispis+= `<li><img src="assets/images/${imgList[i].src}.jpg" alt="${imgList[i].alt}"></li>`
    }
    ispis+="</ul>"
    document.getElementById("inputImg").innerHTML=ispis;
}