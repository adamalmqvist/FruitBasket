var cartSum = 0; 
var cartNum = 0;
// varje knapp i min html kod anropar på en av dessa funktioner. 
function addSmall() { //funktionen till small som kostar 100kr. 100 läggs till i cartNum och cartSum inkremeteras med 1.
  cartSum++
  cartNum += 100;
  display(); // anropar funktionen för att displaya antalet i kundkorgen samt totala kostnaden
}
function addMedium() {
  cartSum++
  cartNum += 150;
  display();
}
function addLarge() {
  cartSum++
  cartNum += 200;
  display();
}
function display(){ //funktion för att displaya hur många saker som finns i varukorger samt totala summan 
document.getElementById("cartSum").innerHTML = cartSum + " st"; //genom dom träder snappar jag upp paragrafen med id Cartsum och displayar cartSum
document.getElementById("cartNum").innerHTML = cartNum + " kr";
}


