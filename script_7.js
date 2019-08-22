/* 
If asked a question (= the sentence ended with "?"), The bot responds "Yeah Yeah ...";
If we shout too much on it (= the sentence is 100% uppercase), the bot responds "Pwa, calm down ...";
If the phrase you say contains the word "Fortnite", the bot responds "did you submit to it?" ;
If you send him an empty message, the bot answers "Are you in PLS?" ;
For any other phrase you send, the bot responds "balek." ; */

var answer = prompt("Say soemthing now.");

if (answer.includes("?")) {
  console.log("Yeah yeah...")
} else if ( answer == answer.toUpperCase() && answer.length !==0){
 console.log ("Pwa, calm down ...")
} else if (answer.includes("Fortnite")) {
 console.log("Did you submit to it?")
} else if (answer.length === 0){
 console.log("Are you in PLS?")
} else {
  console.log("balek")
};








