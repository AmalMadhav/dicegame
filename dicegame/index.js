function game(){
var randomOne=Math.floor(Math.random()*6) +1;
var randImage = "images/dice"+randomOne+".png";
document.querySelectorAll("img")[0].setAttribute("src",randImage);

var randtwo=Math.floor(Math.random() * 6) +1;
var randimage2 = "images/dice"+randtwo+".png";
document.querySelectorAll("img")[1].setAttribute("src",randimage2);

if (randImage > randimage2){
    document.querySelectorAll("span")[0].innerText="player 1 wins"
}
else if(randimage2 > randImage){
    document.querySelectorAll("span")[0].innerText="player 2 wins"
}
else{
    document.querySelectorAll("span")[0].innerText="DRAW!! try again"
}
}