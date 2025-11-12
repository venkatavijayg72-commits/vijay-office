//invert of right angle traiangle
for (let i = 1; i <= 5; i++) {
  let pattern = "";
  
  // spaces
  for (let j = 1; j <= 5 - i; j++) {
    pattern += "  ";
  }
  
  // stars
  for (let k = 1; k <= i; k++) {
    pattern += "* ";
  }
  
  console.log(pattern);
}
//Pyramid pattern
let n = 3; 

for (let i = 1; i <= n; i++) {
  let pattern = "";
  

  for (let j = 1; j <= n - i; j++) {
    pattern += "  ";
  }
  

  for (let k = 1; k <= 2 * i - 1; k++) {
    pattern += "* ";
  }
  
  console.log(pattern);
}
//display all products
// colors = ["Red", "Green", "Blue"];
// sizes = ["S", "M", "L"];
// output : red - S,red-M,red-L,green-S,green-M,green-L,blue-S,blue-M,blue-L
let colors = ["Red", "Green", "Blue"];
let sizes = ["S", "M", "L"];

for (let color of colors) {
  for (let size of sizes) {
    console.log(`${color} - ${size}`);
  }
}