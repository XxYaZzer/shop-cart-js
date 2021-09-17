var quantity = 1;
var quantit =  quantity ;
var pprix;
window.onload = function() {
	pprix = document.getElementById("price").innerHTML;
    
 };


function add(){
var quantiteInHtml = document.getElementById("quantite");
quantity=quantity+1;
quantiteInHtml.innerHTML=quantity;
var prix = document.getElementById("quantite").innerHTML;

var x= pprix*prix
document.getElementById("price").innerHTML=x;

}

function substract() {
if (quantity > 0 ) {     

var quantityInHtml = document.getElementById("quantite");
quantity--;
quantityInHtml.innerHTML=quantity;
var prix = document.getElementById("quantite").innerHTML;
    
    var x= pprix*prix
document.getElementById("price").innerHTML=x;
 
}
}

var nbrOfClicks=0;
function becomeRed()
{
    if(nbrOfClicks%2==0)
    {
        document.getElementById('heart').style.color="red";
    }else
    {
        document.getElementById('heart').style.color="pink";
    }

   
    nbrOfClicks++;

}



