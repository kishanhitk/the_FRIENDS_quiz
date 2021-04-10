
var readlineSync = require("readline-sync");
const chalk = require('chalk');

var score = 0;


var userName = readlineSync.question("So, what's your name? ");
console.log(chalk.red.bold(`\nWelcome ${userName},`));
console.log(chalk.red.bold("How YOU doin'?\n\n\n"))

function showQuestion(question, answer) {
    var userAnswer = readlineSync.question(`Who said: ${question}`);
    if (userAnswer === answer) {
        console.log(chalk.greenBright("That's right :)"));
        score = score + 1;
    }
    else {
        console.log(chalk.redBright("That's wrong, you should rewatch FRIENDS"));
        score = score - 1;
    }
    console.log(chalk.green("Score: ", score));
}

var questions = [
    {
        question: ` Vanilla? I'm Not Vanilla! I Do Lots Of Crazy Things. I Mean, I Got Drunk And Married In Vegas.
  
    a. Monica
    b. Rachel 
    c. Phoebe\n `,
        answer: "b",
    },
    {
        question: `Oh, It's Me And LePooh. Wow, I Miss That Dog. 

    a. Monica
    b. Rachel 
    c. Phoebe\n `,
        answer: "b",
    },
    {
        question: `Something Is Wrong With The Left Phalange.

    a. Monica
    b. Rachel 
    c. Phoebe\n `,
        answer: "c",
    },
    {
        question: ` Right, You Only Go For Them Five Minutes Before They Get Married.

    a. Monica
    b. Rachel 
    c. Phoebe\n `,
        answer: "a",
    },
    {
        question: `Her Name's Precious? Is She A Pure Breed, Or Did You Pick Her Up At The Pound?

    a. Monica
    b. Rachel 
    c. Phoebe\n `,
        answer: "c",
    },
    {
        question: `I Have Not Been Sick In Over Three Years.

    a. Monica
    b. Rachel 
    c. Phoebe\n `,
        answer: "a",
    },
    {
        question: `I'd Take A Little Crying Any Day Over Howard, The "I Win" Guy!

    a. Monica
    b. Rachel 
    c. Phoebe\n `,
        answer: "a",
    },
    {
        question: `Just So You Know, It's Not That Common. It Doesn't Happen To Every Guy. And It Is A Big Deal!

    a. Monica
    b. Rachel 
    c. Phoebe\n `,
        answer: "b",
    },
]

for (var i = 0; i < questions.length; i++) {
    var currentquestion = questions[i];
    showQuestion(currentquestion.question, currentquestion.answer);
}

console.log(chalk.blue.bold("Woohooo!, you scored :", score));
