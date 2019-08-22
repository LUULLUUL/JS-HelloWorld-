const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

/*Make a script script_4.jsthat will display in the console the following questions and their answers:*/

//Seventies
console.log("Filter in this list entrepreneurs who were born in the 70s");

  let seventies = entrepreneurs.filter(function(born){
    return  born.year > 1970 && born.year < 1980;
});
console.log(seventies);


//var marvelHeroes =  heroes.filter(function(hero) {
//	return hero.franchise == “Marvel”;
//});
//index = a.findIndex(x => x.prop2 ==="yutu");

//console.log(index);
//const ages = [11, 34, 8, 9, 23, 51, 17, 40, 14];

//let olderThan18 = ages.filter((age) => age > 18);
//console.log(olderThan18); //[34, 23, 51, 40]

//NAMES
console.log("Take out an array that contains the first and last names of the contractors:");
  const names = entrepreneurs.map(function(x){
    return {Firstname: x.first, Lastname:x.last}
});
console.log(names)

//AGES
console.log("How old would each inventor be today?");
  const ageToday = entrepreneurs.map(function(x){
    return {AgeToday: (2019 - x.year)}
});
console.log(ageToday) 

//Sort by last name 
console.log("Sort the entrepreneurs alphabetically by last name.");
  const order = entrepreneurs.sort(function(a, b){
    if(a.last < b.last) { return -1; }
    if(a.last > b.last) { return 1; }
    return 0;
});
console.log(order) 