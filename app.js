'use strict';
var BasicCard = require("./BasicCard.js");
var inquirer = require("inquirer");

var firstPresident = new BasicCard("Who was the first president of the United States?","George Washington");

console.log(firstPresident);
console.log(firstPresident.front);
console.log(firstPresident.back);
var question = [
    {
        type: "input",
        name: "You enter",
        message: firstPresident.front,
        choices: [firstPresident.back],
        validate: function(value) {
            var pass = value.match(firstPresident.back);
            if(pass) {
                console.log(" ");
                console.log("Correct!");
            } else { 
                console.log(" ");                
                console.log("Please enter again");}
        }
    }
];
inquirer.prompt(question).then(function(answer) {
    console.log("Your answer: ");
    console.log(JSON.stringify(answer, null, " "));
});