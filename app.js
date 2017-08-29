'use strict';
var BasicCard = require("./BasicCard.js");
var inquirer = require("inquirer");

var hurricane = new BasicCard("What is the name of the hurricane that recently occured in Texas","harvey");

/* console.log(hurricane);
console.log(hurricane.front);
console.log(hurricane.back); */
var question = [
    {
        type: "input",
        name: "You enter",
        message: hurricane.front,
        choices: [hurricane.back],
        validate: function(value) {
            var pass = value.match(hurricane.back);
            if(pass) {
                console.log(" ");
                console.log(hurricane.back);
            } else { 
                console.log(" ");                
                console.log("Please enter again");}
        }
    }
];
inquirer.prompt(question).then(function(answer) {
    console.log(JSON.stringify(answer, null, " "));
});