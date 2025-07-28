/***

Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
*/
var yourMoney=parseInt(prompt("Enter the Your money.Which burger do you want to purchase? What is your budget for burger"));
console.log("My budget is =",yourMoney);


if(yourMoney>500){
    console.log("You will get burger with free coke");
}
else{
    console.log("You must pay for coke. The price of coke is 30 taka");
}