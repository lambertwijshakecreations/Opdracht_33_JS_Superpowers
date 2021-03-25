const superheroes = [
    {
    "name": "Batman",
    "publisher": "DC Comics",
    "alter_ego": "Bruce Wayne",
    "first_appearance": "Detective Comics #27",
    "weight": "210"
    },
    {
    "name": "Superman",
    "publisher": "DC Comics",
    "alter_ego": "Kal-El",
    "first_appearance": "Action Comics #1",
    "weight": "220"
    },
    {
    "name": "Flash",
    "publisher": "DC Comics",
    "alter_ego": "Jay Garrick",
    "first_appearance": "Flash Comics #1",
    "weight": "195"
    },
    {
    "name": "Green Lantern",
    "publisher": "DC Comics",
    "alter_ego": "Alan Scott",
    "first_appearance": "All-American Comics #16",
    "weight": "186"
    },
    {
    "name": "Green Arrow",
    "publisher": "DC Comics",
    "alter_ego": "Oliver Queen",
    "first_appearance": "All-American Comics #16",
    "weight": "195"
    },
    {
    "name": "Wonder Woman",
    "publisher": "DC Comics",
    "alter_ego": "Princess Diana",
    "first_appearance": "The Incredible Hulk #180",
    "weight": "165"
    },
    {
    "name": "Blue Beetle",
    "publisher": "DC Comics",
    "alter_ego": "Dan Garret",
    "first_appearance": "Mystery Men Comics #1",
    "weight": "145"
    },
    {
    "name": "Spider Man",
    "publisher": "Marvel Comics",
    "alter_ego": "Peter Parker",
    "first_appearance": "Amazing Fantasy #15",
    "weight": "167"
    },
    {
    "name": "Captain America",
    "publisher": "Marvel Comics",
    "alter_ego": "Steve Rogers",
    "first_appearance": "Captain America Comics #1",
    "weight": "220"
    },
    {
    "name": "Iron Man",
    "publisher": "Marvel Comics",
    "alter_ego": "Tony Stark",
    "first_appearance": "Tales of Suspense #39",
    "weight": "250"
    },
    {
    "name": "Thor",
    "publisher": "Marvel Comics",
    "alter_ego": "Thor Odinson",
    "first_appearance": "Journey into Myster #83",
    "weight": "200"
    },
    {
    "name": "Hulk",
    "publisher": "Marvel Comics",
    "alter_ego": "Bruce Banner",
    "first_appearance": "The Incredible Hulk #1",
    "weight": "1400"
    },
    {
    "name": "Wolverine",
    "publisher": "Marvel Comics",
    "alter_ego": "James Howlett",
    "first_appearance": "The Incredible Hulk #180",
    "weight": "200"
    },
    {
    "name": "Daredevil",
    "publisher": "Marvel Comics",
    "alter_ego": "Matthew Michael Murdock",
    "first_appearance": "Daredevil #1",
    "weight": "200"
    },
    {
    "name": "Silver Surfer",
    "publisher": "Marvel Comics",
    "alter_ego": "Norrin Radd",
    "first_appearance": "The Fantastic Four #48",
    "weight": "unknown"
    }
    ]

    //1 : maak een array van alle superheronamen
   /*const heroes = superheroes.map((array) => {
       return array.name
   });

   console.log(heroes);

   //2 : maak eeb array van alle "lichte" superhelden (< 190 pounds)
   
   const heroesweight1 = superheroes.filter((array) => {
       return array.weight < 190
   });
   console.log(heroesweight1);

   //3 : maak een array met de "namen" van de superhelden die 200 pound wegen

   const heroes200weight = superheroes.filter((array) => {
    return array.weight == 200
    });
 const hero = heroes200weight.map((array) => {
     return array.name
 })

   console.log(hero);

   //4 : Maak een array met alle comics waar de superhelden hun "first appearances" hebben gehad.

   const firsttime = superheroes.map((array) => {
    return array.first_appearance
    });

    console.log(firsttime);


//5a : Maak een array met alle superhelden in DC Comics


const dccomics = superheroes.filter((array) => {
    return array.publisher == 'DC Comics'
    });
 
    console.log(dccomics);

//5b maak een array met alle superhelden in de Marvel comics

const marvelcomics = superheroes.filter((array) => {
    return array.publisher == 'Marvel Comics'
    });
 
    console.log(marvelcomics);


//6 tel het gewicht van alle superhelden van DC comics bij elkaar op.

const dccomics = superheroes.filter((array) => {
    return array.publisher == 'DC Comics'
    });
 const herodc = dccomics.map((array) => {
     return array.weight
 });

const totaldc = herodc.reduce(
    (accumulator, currentValue) => accumulator + currentValue
);

console.log(totaldc);

//7 tel het gewicht van alle superhelden van Marvel comics bij elkaar op.

const marvelcomics = superheroes.filter((array) => {
    return array.publisher == 'Marvel Comics'
    });
 const herom = marvelcomics.map((array) => {
     return array.weight
 });

const totalm = herom.reduce(
    (accumulator, currentValue) => accumulator + currentValue
);

console.log(totaldc);
*/

//8 Bonus zoek de zwaarste superheld!

const heavyhero = superheroes.filter((array) => {
 return array.weight > 500
});

console.log(heavyhero);




