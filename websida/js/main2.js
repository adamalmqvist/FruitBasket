var cartSum = 0; 
var cartNum = 0;

function addSmall() {
  cartSum++
  cartNum += 100;
  display();
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
function display(){
document.getElementById("cartSum").innerHTML = cartSum + "st";
document.getElementById("cartNum").innerHTML = cartNum + "kr";
}
console.log("hej");