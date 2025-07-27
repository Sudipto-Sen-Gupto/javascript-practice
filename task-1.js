// Task-1
// You went to the supermarket to buy some oranges and apples. Calculate how much money the shopkeeper will return.

// Input:
// The first line of the input is the taka you have. The second line is the cost of 1 kg of oranges and 1 kg of apples.

// Output:
// Print the result.

var yourMoney=parseInt(prompt("Enter your money=")),apples=parseInt(prompt("Enter the price of 1kg apples=")),oranges=parseInt(prompt("Enter the price of 1kg oranges=")),returnMoney,wholePrice;

wholePrice=apples+oranges;
document.write("The whole price of apples and oranges=",wholePrice);

returnMoney=yourMoney-wholePrice;

document.write("The shopkeeper wil return",returnMoney,"Taka");



