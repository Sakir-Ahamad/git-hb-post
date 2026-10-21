

/*var randomnumber1 =Math.floor(Math.random()*6)+1; //1-6

var randomdiceeimage ="dice" + randomnumber1 + ".png";

var randomimagesource="images/" + randomdiceeimage;

var image1=document.querySelectorAll("img")[0];

image1.setAttribute("src" , randomimagesource);



var randomnumber2 =Math.floor (Math.random()*6)+1;

var randomdiceimage2="dice" +randomnumber2 +".png";

var randomimagesource="images/" + randomdiceimage2;

var image2=document.querySelectorAll ("img1")[1];

image2.setAttribute ("src" , randomdiceeimage2);



//win players output//

if (randomnumber1 >randomnumber2);
{
   document.querySelector("h1").innerHTML="player1 win!";

}

 else if (randomnumber2 >randomnumber1 );
{
    document.querySelector ("h1").innerHTML="player2 win!";

}
 
else 
{
  document.querySelector ("h1").innerHTML="draw!";  
}
*/

// 1 ku 6 varai random numbers eduthukolluthal
var randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1 to 6
var randomNumber2 = Math.floor(Math.random() * 6) + 1; // 1 to 6

// Dice images-ai change seivathu (dice1.png to dice6.png)
var randomImageSource1 = "images/dice" + randomNumber1 + ".png";
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

// HTML-il ulla img tags-il images-ai update seivathu
document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1);
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

// Yaar win seivathu enbathai kandpidithu h1 text-ai maatruval
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
} else {
    document.querySelector("h1").innerHTML = "Draw!";
}

