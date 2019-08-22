

var num = parseInt( prompt("De quel nombre veut tu calculer la factorielle ?", "0"
), 10);
var fact = 1;

for (var i=num; i >= 1; i--){
  fact = fact * i
};

console.log(`The result is: ${fact}`); 