

var randomnumber1 =Math.floor(Math.random()*6)+1; //1-6

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


