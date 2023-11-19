console.log("Hello world");

let age: number = 20;

if(age < 50)
{
    age +=10;
}
console.log(age);
let sales: number= 123_4567_89;  //added underscore to show it is a large number .More readable
console.log(sales);
let level ;  //type of any

//type of any is not goog because
level = 1;
level = "Rahul";

//type any can be used to be like any data type


// function render(document) //!here the parameter is implicityly set to any type
// {
//     console.log(document);
// }

let isPusblished: boolean = true;


//!array


let numbers: number[] = [1,2,3,4];
// let news = [];  //!type of any array to avoid this
// news[0] = 1;
// news[1] = "1";

let newNumber: number[] = [];

newNumber = [1,2,3,4,5];
// newNumber.forEach(i => i.); since the compiler identifies this as a number it give number methods


//! Tuple
// Tuple means a fixed size  where each element has a fixed type
let user: [number, string] = [1,"Rahul"];
// user[0].  compiler gives the number object here because we have it as number
// user[1].  compiler gives the string object here because we have it as string



//!ENUMS

//defining the size of tshirt
// const small = 1;
// const medium = 2;
// const large = 3;

//to replace this 3 const sizes we can group the under an enum
//groups related constants together

// enum Size{
//     Small=1,
//     Medium,
//     Large
// }

//! by initializing small to one the rest will be initialized to 2 and 3 repectively
//!when we initialize it with the number


//!but when we give small a string value  we need to initialize all the 3 sizes
// enum Size{
//     Small="r",
//     Medium=3,
//     Large= "G"
// }
// let MySize :Size = Size.Medium;
// //varible : type = type.constant
// console.log(MySize);

//! ENUM TO JS
// var Size;
// (function (Size) {
//     Size[Size["Small"] = 1] = "Small";
//     Size[Size["Medium"] = 2] = "Medium";
//     Size[Size["Large"] = 3] = "Large";
// })(Size || (Size = {}));
// let MySize = Size.Medium;
// console.log(MySize);

//!if we add a const before enum compiler will give more optimized code
 const enum Size{
    Small=1,
    Medium,
    Large
}
let MySize :Size = Size.Medium;
//varible : type = type.constant
console.log(MySize);
//! const enum to js
//let MySize = 2;
// console.log(MySize);


//!FUNCTIONS
// if we don't return anything the type of function is void

function calculateTax(income: number): void
{
    console.log(income);  //if we add return here it will be error
}
//if we return something we need to specify its type or the type of the function will be automatically assigned to the returning thing type

function demo(income: number): number{ 
    return income;
}

//we turned on noUnused parameter from tsconfig
//shows a warning that if the function parameters are not used
// function test1(income: number): number{
//  return 0;
// }

//! JS  will return undefined
//!this fn has type number || undefined
//we turned on no implicit return in tsconfig
//so that we added the else part
function test1(income: number): number{
    // let x; definiton on line 138 and 139
if(income > 50_000)
{
    return income *2;
}
else{
    return income;
}
}
//turned on nounsed locals
//means if we declare a variable and not used it ( in function ig)


//!giving a parameter a defined value
function test2(income: number , taxYear: number = 2022): number{
    
if(taxYear > 2022)
{
    return income *2;
}
else{
    return income;
}
}

//optional parameter taxyear? :number

//enable the three fn in tsconfig file and detail in function ( types and things)


//! OBJECT
// in js object is dynamic that we can change its size ie we can add more things to the object
//but in TS we cannot 

