let myScores = [92, 98, 84, 76, 89, 99, 100];
let yourScores = [82, 98, 94, 88, 92, 100, 100];



function getAverage(myScores) {
    let sum = 0;
    let numScores = myScores.length;

    for (let i = 0; i < numScores; i++) {
        sum += myScores[i];
        
    }
    return sum;
}
let totalMarks = getAverage(myScores);

console.log("My Scores " + totalMarks.toFixed(2)); 
totalMarks = getAverage(yourScores);

console.log("Your Scores " + totalMarks.toFixed(2)); 


let lunch = [
    {item: "Chicken Fajitas", price: 19.95},
    {item: "Chips and Guacamole", price: 5.25},
    {item: "Sweet Tea", price: 2.79}
  ];

  function getMealCost(orders) {
    let sum = 0;
 
    let numOrders = orders.length;
    for(let i = 0; i < numOrders; i++) {
       sum += orders[i].price;
    }
 
    return sum;
 }
 

 let mealCost = getMealCost(lunch);
 let tax= mealCost * 0.8;
 let totalWithTip = mealCost +tax;
 console.log("My meal costs " + totalWithTip.toFixed(2));

 let teams = ["Red Sox", "Rangers", "Blue Jays",
             "Astros", "White Sox", "Rangers"];

let index = teams.indexOf("Blue Jays");     // returns 1
if (index == -1)
   console.log("Item not found");
else
   console.log("Item at position: " + index);

 function isOver60(arrayValue) {
    if (arrayValue > 60) {
       return true;
    }
    else {
       return false;
    }
 }
 
 // Here is array of numbers
 let numbers = [7, 9, 64, 60, 12, 13, 65, 62];

 let firstValOver60 = numbers.find(isOver60); 

 // If no value in the array was found, firstValOver60 will
// be undefined
if (firstValOver60 != undefined) {
    console.log(firstValOver60);
 }
 else {
    console.log("No values over 60");
 }

let firstValOver60Position = numbers.findIndex(isOver60);  
    // returns the index 2

if (firstValOver60Position != -1) {
   console.log("First value over 60 found at position " +
               firstValOver60Position);
}
else {
   console.log("No values over 60");
}

let allOver60 = numbers.filter(isOver60);  
    // returns an array containing [64, 67, 66]

if (allOver60.length > 0) {
   console.log(allOver60);  // displays the array
}
else {
   console.log("No values over 60");
}

 