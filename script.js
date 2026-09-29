// Logical Operations

// 1
console.log(10 > 5 && 20 > 15);

// 2
console.log(10 > 15 && 20 > 10);

// 3
console.log(10 > 20 || 15 > 10);

// 4
console.log(5 > 10 || 20 < 15);

// 5
console.log(!(10 > 5));

// 6
console.log(!(10 < 5));

// 7
let a = 18;
let b = 12;
console.log(a < 15 && b <= 20 || a >= b);

// 8
let c = 20;
let d = 25;
let e = 15;
console.log(c < d && e > d && c !== d);


// Ternary Operator

// 9
let age = 22;
age >= 18 ? console.log("Eligible") : console.log("Not Eligible");

// 10
let marks = 80;
marks >= 35 ? console.log("Pass") : console.log("Fail");

// 11
let num = 17;
num > 10 ? console.log("Greater than 10") : console.log("Not Greater than 10");

// 12
let n1 = 9;
n1 % 2 == 0 ? console.log("Even") : console.log("Odd");

// 13
let salary = 40000;
salary > 30000 ? console.log("Good Salary") : console.log("Low Salary");


// Concatenation & Template Strings

// 14
let firstName = "Vijay";
let lastName = "Anand";
let city = "Komarapalayam";

console.log(firstName + " " + lastName + " " + "city:", city);

// 15
let name = "Vijay Anand";
let myage = 22;

console.log("name:", name + " & " + "myage:", myage);

// 16
let product = "Laptop";
let price = 60000;
let brand = "Acer";

console.log(product + " " + "price is", price + " " + "and brand is", brand);

// 17
let name1 = "Vijay Anand";
let qualification = "IT";
let company = "Stackly";

console.log(`My name is ${name1} and my qualification is ${qualification} and I am working at ${company}.`);

// 18
let empname = "Vijay Anand";
let empage = 22;
let empcity = "Komarapalayam";

console.log(`My name is ${empname} and I am ${empage} years old and my city is ${empcity}`);


// Type Casting - Implicit

// 19
let f = "Vijay Anand";
let g = 22;

console.log(f + g);
console.log(typeof (f + g));

// 20
let h = 10;
let i = 5;

console.log(h + i);
console.log(typeof (h + i));

// 21
let j = 10;
let k = true;

console.log(j + k);
console.log(typeof (j + k));

// 22
let l = 10;
let m = null;

console.log(l + m);
console.log(typeof (l + m));

// 23
let n = "Hello Vijay";
let o = true;

console.log(n + " is", o);
console.log(typeof (n + o));

// 24
let text = "Fruits: ";
let fruits = ["Apple", "Mango"];

console.log(text + fruits);
console.log(typeof (text + fruits));

// 25
let num1 = 10;
let obj = {};

console.log(num1 + obj);
console.log(typeof (num1 + obj));

// 26
console.log("10" + 5);
console.log(10 + true);
console.log(10 + 5);

console.log(typeof ("10" + 5));
console.log(typeof (10 + true));
console.log(typeof (10 + 5));


// Type Casting - Explicit

// 27
let p = "100";
console.log(Number(p));

// 28
let q = "25";
console.log(Number(q));
console.log(typeof Number(q));

// 29
console.log(Number(true));

// 30
console.log(Number(false));

// 31
console.log(Number(""));

// 32
console.log(Number("Vijay"));

// 33
console.log(Number(undefined));

// 34
console.log(Boolean("Vijay Anand"));

// 35
console.log(Boolean(""));

// 36
console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean(-1));

// 37
let fruit = ["Apple", "Mango"];
console.log(Boolean(fruit));

// 38
let person = {
    name: "Vijay Anand",
    age: 22,
    city: "Komarapalayam"
};

console.log(Boolean(person));


// Conditional Statements

// 39
let Age = 22;

if (Age >= 18) {
    console.log("Eligible");
}

// 40
let votingAge = 22;

if (votingAge >= 18) {
    console.log("Eligible to Vote");
} else {
    console.log("Not Eligible to Vote");
}

// 41
let Marks = 80;

if (Marks >= 35) {
    console.log("Pass");
} else {
    console.log("Fail");
}

// 42
let time = 15;

if (time >= 1 && time <= 6) {
    console.log("Early Morning");
} else if (time >= 7 && time <= 12) {
    console.log("Morning");
} else if (time >= 13 && time <= 17) {
    console.log("Afternoon");
} else if (time >= 18 && time <= 19) {
    console.log("Evening");
} else if (time >= 20 && time <= 24) {
    console.log("Night");
} else {
    console.log("Invalid Time");
}

// 43
let temperature = 30;

if (temperature > 35) {
    console.log("Hot");
} else if (temperature >= 20 && temperature <= 35) {
    console.log("Normal");
} else {
    console.log("Cold");
}

// 44
let personAge = 22;
let height = 172;
let weight = 63;

if (personAge >= 18) {
    if (height >= 170) {
        if (weight >= 60) {
            console.log("Eligible");
        } else {
            console.log("Your required weight is less, so you are not selected");
        }
    } else {
        console.log("Your required height is less, so you are not selected");
    }
} else {
    console.log("Your required age is less, so you are not selected");
}


// Switch Statement

// 45
let trafficLight = "yellow";

switch (trafficLight) {
    case "red":
        console.log("Stop");
        break;

    case "yellow":
        console.log("Get Ready");
        break;

    case "green":
        console.log("Go");
        break;

    default:
        console.log("Invalid Traffic Light");
}

// 46
let day = "Saturday";

switch (day) {
    case "Monday":
        console.log("Monday");
        break;

    case "Tuesday":
        console.log("Tuesday");
        break;

    case "Wednesday":
        console.log("Wednesday");
        break;

    case "Thursday":
        console.log("Thursday");
        break;

    case "Friday":
        console.log("Friday");
        break;

    case "Saturday":
        console.log("Saturday");
        break;

    case "Sunday":
        console.log("Sunday");
        break;

    default:
        console.log("Invalid Day");
}

// 47
let choice = 1;

switch (choice) {
    case 1:
        console.log("Start");
        break;

    case 2:
        console.log("Settings");
        break;

    case 3:
        console.log("Exit");
        break;

    default:
        console.log("Invalid Choice");
}


// Loops

// 48
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 49
let x = 10;

while (x >= 1) {
    console.log(x);
    x--;
}

// 50
let fruitsList = ["Apple", "Mango", "Orange", "Banana"];

for (let fruit of fruitsList) {
    console.log(fruit);
}

// 51 - Employee Details
let employee = {
    name: "Vijay Anand",
    age: 22,
    qualification: "IT",
    college: "KSR Institute",
    city: "Komarapalayam",
    company: "Stackly",
    role: "Software Developer",
    experience: "Fresher"
};

for (let key in employee) {
    console.log(key + ": " + employee[key]);
}
