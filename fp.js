// Convert the following code to use `.map`

// var peoplesAges = []
var people = [
  {name: "Jane", age: 32},
  {name: "Jessica", age: 34},
  {name: "Jasmine", age: 39}
]
// people.forEach(function(person){
//   peoplesAges.push(person.age)
// });

var peoplesAges = people.map(function(person){
  return person.age;
})

// Convert the following code to use `.filter`

// var peopleYoungerThan35 = []
var people = [
  {name: "Jane", age: 32},
  {name: "Jessica", age: 34},
  {name: "Jasmine", age: 39}
]
// people.forEach(function(person) {
//   if(person.age < 35){
//     peopleYoungerThan35.push(person)
//   }
// });

var peopleYoungerThan35 = people.filter(function(person){
  return person.age < 35;
})

// Convert the following to use `.forEach`

var people = [
  {name: "Jane", age: 32},
  {name: "Jessica", age: 34},
  {name: "Jasmine", age: 39}
]
// var peopleWhoseNamesHaveTheLetterS = people.filter(function(person){return person.name.match("s")});
var peopleWhoseNamesHaveTheLetterS = [];
people.forEach(function(person){
  if (person.name.match("s") != null){
    peopleWhoseNamesHaveTheLetterS.push(person.name);
  }
})
