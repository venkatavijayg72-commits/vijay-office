// SUM OF 1 TO 20 NUMBERS
let sum = 0; 

for (let i = 1; i <= 20; i++) { 
  sum += i; 
}
 
console.log("Sum of numbers from 1 to 20 is:", sum); 

// SUM OF 1 TO 50 EVEN NUMBERS
let num = 0 ;
for (let i = 1; i <= 50; i++) { 
  if (i % 2 === 0) { 
    num += i; 
  }
}
console.log("Sum of even numbers from 1 to 50 is:", num); 

// reverse countdown 10 to 1
for (let i = 10; i >= 1; i--) { 
  console.log("number",i); 
}
//  checking stock availability until quantity run out
let stock = 7; 

while (stock > 0) { 
  console.log("Item is available. Stock left:", stock); 
  stock--; 
}
console.log("Item is out of stock.");