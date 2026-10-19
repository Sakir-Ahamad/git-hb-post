var randomnumber1 =Math.floor(Math.random()*6)+1; //1-6

var randomdiceeimage ="dice" + randomnumber1 + ".png";

var randomimagesource="images/images/" + randomdiceeimage;

var image1=document.querySelectorAll(".img")[0];

image1.setAttribute("src" , randomimagesource);



var randomnumber2 =Math.floor (Math.random()*6)+1;

var randomdiceimage2="dice" +randomnumber2 +".png";

var randomimagesource="images/images/" + randomdiceimage2;

var image2=document.querySelectorAll (".img1")[1];

image2.setAttribute ("src" , randomdiceeimage2);