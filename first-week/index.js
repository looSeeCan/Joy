// const x = 5;
// console.log(x);
// // x = 3 + 5;   
// // console.log(x);


// let y = 5;
// console.log(y);
// y = 3 + 5;
// console.log(y);

console.group();
/// Dog Years
/// Dogs mature at a faster rate than human beings. We often say a dog’s age can be calculated in “dog years” to account for their growth compared to a human of the 
/// same age. In some ways we could say, time moves quickly for dogs — 8 years in a human’s life equates to 45 years in a dog’s life. 
/// How old would you be if you were a dog?

/// formula: (yourage -2)(4) + 2(10.5).... (your age -2 for the first 2 years of a dogs life)(times 4, the dog has an age ratio of 4 dog years to human years)
/// + 2(times 10.5, the first two years of a dogs life).
    
    /// declare a variable named myAge and give it a vaule of: your age (a number)
    /// declare a variable named earlyYears and give it a value of: 2
    /// reasign the variable earlyYears to: 2 * 10.5
    /// declare a variable named laterYears and give it a value of: myAge -2
    /// reasign laterYears so that laterYears is multiplied by 4
    /// declare a variable named myAgeInDogYears and give it a value of: earlyYears + laterYears;

    /// using template literals, log: My name is Lucycan. I am 43 years old in human years, which is 185 in dog years.
    /// you must use these variables: myName, myAge, earlyYears, laterYears.


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
    console.log(`My name is ${myName}. I am ${myAge} years old in human years, which is ${earlyYears + laterYears} years old in dog years.`)
console.groupEnd();

