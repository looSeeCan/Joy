const getUserChoice = (userInput) => {
    if(userInput === 1) {
        return userInput = "rock";
    } else if (userInput === 2) {
        return userInput = "paper";
    } else if (userInput === 3) {
        return userInput = "scissors";
    } else {
        return `Error! Please input one of the following choices: 1, 2, 3.`;
    };
};


const getComputerChoioce = () => {
    const randomNumber = Math.floor(Math.random() * 3 + 1);
    switch (randomNumber) {
        case 1:
            return `rock`;
            case 2:
                return `paper`;
                case 3:
                    return `scissors`;
                };
            };
            // console.log(getComputerChoioce());
            
            const determineWinner = (userChoice, computerChoice) => {
    const win = `Congratulations, you won!`;
    const lose = `Sorry, computer won!`;
    
    if(userChoice === computerChoice) {
        return `The game is a tie`;
    }
    if(userChoice === `rock`) {
        if(computerChoice === `paper`) {
            return lose;
        } else {
            return win;//this would be scissors
        };
    }
    if(userChoice === `paper`) {
        if(computerChoice === `scissors`) {
            return lose;
        } else {
            return win;//this would be rock
        };
    }
    if(userChoice === `scissors`) {
        if(computerChoice === `rock`){
            return lose;
        } else {
            return win;//this would be paper
        };
    }
    
};

(() => {
    //To play game: Enter the number 1 for rock, Enter the number 2 for paper, Enter the number 3 for scissors
    const choose = getUserChoice(3);
    
    const computer = getComputerChoioce();
    const winner = determineWinner(choose, computer);
    //ternary
    choose === "rock" || choose ==='paper' || choose ==='scissors' ? console.log(`You have chosen ${choose}. The computer has chosen ${computer}. ${winner}.`) : console.log(choose);
    
})()

const getUserChoice1 = () => "hello"
console.log(getUserChoice1());