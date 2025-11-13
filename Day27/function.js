//•	All Arithmetic operation using functions

function add(a, b) {
    return a+b;

}
 let result = add(72,64)
 console.log(result);

 // subtraction

 function subtraction(a,b){
    return a-b;
 }
 let subresult = subtraction(76,63)
 console.log(subresult);


 // multiplication

 function multiplication(a,b){
    return a*b;
 }
 let mulresult = multiplication(9,11)
 console.log(mulresult);

// division

function division(a,b){
    return a/b;
}
let divresult = division(169,13)
console.log(divresult);


//•	Calculate total cart value
//	Hint: parameter we need to pass array [199, 299, 499]
//	Discount (Ex:10%)

function totalcartvalue( a,b,c){
    let total = a+b+c;
    let discount = total * (35/100);
    return total - discount;
}
let cartvalue = totalcartvalue(199,299,499)
console.log(cartvalue);


//•	Convert Celsius – Fahrenheit

function celsiusToFahrenheit(celsius){
    fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}

function fahrenheitToCelsius(fahrenheit){
    celsius = (fahrenheit - 32) * 5/9;
    return celsius;
}

console.log(celsiusToFahrenheit(37));
console.log(fahrenheitToCelsius(99.5));






         