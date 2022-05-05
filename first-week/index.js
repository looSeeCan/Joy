// const x = 5;
// console.log(x);
// // x = 3 + 5;   
// // console.log(x);

// let y = 5;
// console.log(y);
// y = 3 + 5;
// console.log(y);

console.group();
    let myAge = 36;
    let earlyYears = 2;
    earlyYears = earlyYears * 10.5;
    let laterYears = myAge -2;
    laterYears = laterYears * 4;
    let myAgeInDogYears = earlyYears + laterYears;
    let myName = "Joy".toLowerCase();
    console.log(`My name is ${myName} I am ${myAge} old in human years, which is ${earlyYears + laterYears} in dog years.`)
console.groupEnd();