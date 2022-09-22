const x = 5;
console.log(x);
// x = 3 + 5;   
// console.log(x);


let y = 5;
console.log(y);
y = 3 + 5;
console.log(y);

console.group();
// Dog Years
//Dogs mature at a faster rate than human beings. We often say a dog’s age can be calculated in “dog years” to account for their growth compared to a human of the 
//same age. In some ways we could say, time moves quickly for dogs — 8 years in a human’s life equates to 45 years in a dog’s life. 
//How old would you be if you were a dog?
    let myAge = 43; 
    console.log("myAge:", myAge);
    let earlyYears = 2; 
    console.log("earlyYears:", earlyYears);//for the first 2 years of a dogs life, the dog ages 10.5 years each year.
    earlyYears *= 10.5; 
    console.log("earlyYears:",earlyYears);//the age of the dogs first two years
    let laterYears = myAge -2; 
    console.log("laterYears:", laterYears);
    laterYears = laterYears * 4; 
    console.log("laterYears:", laterYears);
    let myAgeInDogYears = earlyYears + laterYears; 
    console.log("myAgeInDogYears", myAgeInDogYears);
    let myName = "Lucycan"; 
    console.log("myName", myName);
    console.log(`My name is ${myName} I am ${myAge} years old in human years, which is ${earlyYears + laterYears} in dog years.`)
console.groupEnd();

