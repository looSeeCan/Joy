//create a function that takes two num as arguments and return their sum
(() => {
    const takes2 = (one, two) => one + two;
    console.log(takes2(1, 2));
})();

//create a function that takes a number as its only argument and returns true if it's less than or equal to zero otherwise return false
(() => {
    const bool = (num) => {
        if(num <= 0 ) return true
        else return false;
    }
    console.log(bool(2));
})();


//create a function that takes the age in years and returns the age in days
(() => {
    const yearsToDays = (years) => years * 365
    console.log(yearsToDays(2));
})();

const two = (num, num2) => num + num2;

const one = (num, num2) => two(num, num2);

console.log(one(1,2));
