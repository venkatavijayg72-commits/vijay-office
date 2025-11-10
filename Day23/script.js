let item1 = 92;
let item2 = 43;

let total = item1 + item2 ;

const discount = total/100*40 ;

let finalPrice = total - discount;

console.log("FinalPrice:", finalPrice );

let Country1 = "India";
let Country2 = "USA";
let Age = 20;

if(Age >= 18 && (Country1 == "India" || Country2 == "USA")){
    console.log("Allowed");
}else{
    console.log("Not Allowed");
}