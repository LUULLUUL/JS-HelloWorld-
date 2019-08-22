const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

//All borrowed once?
console.log("Have all the books been borrowed at least once?");
  const once = books.forEach(function(x){
   if (x.rented >1){
     return true;
   }
  });
  console.log(once);  

//most borrowed books
console.log("What is the most borrowed book?");
  const most = books.reduce(function(prev, current) {
    return (prev.rented > current.rented) ? prev : current
  });
  console.log(most);  

//least borrowed books
console.log("What is the least borrowed book?");
  const least = books.reduce(function(prev, current) {
    return (prev.rented < current.rented)? prev: current
  });
  console.log(least);

//Find one Book ID
console.log("Find the book with ID 873495:;");
  let find = books.find (function(x){
    return (x.id == 873495);
  });
  console.log(find);

//Deleter one Book ID 
console.log("Deletes the book with the ID 133712:;");
  let deleted = books.filter (function(x){
  return x.id !== 133712;
});
  console.log(deleted);

//
console.log("Sort the books in alphabetical order (without the one with the ID 133712because it is deleted).");

  let order = deleted.sort(function(a,b){
    if(a.title < b.title) {return -1;}
    if(a.title > b.title) {return 1;}
    return 0;
  });
  console.log(order);


