const persons = [
  { name: "Jake", age:28},
  { name: "Kirby", age:29},
  { name: "Jorge", age:20},
  { name: "Danny", age:70},
  { name: "Andrew", age:58},
  { name: "Reese", age:98},
  { name: "Paola", age:65}
]
for (var i = 0; i < persons.length; i++){
  document.writeln(persons[i].name + "<br>");
}

const olders = persons.filter(person => person.age > 25);
console.log(olders);

const kirby = persons.find(person => person.name == "Kirby");
console.log(kirby.age);

let total = persons.reduce(ages, person => age + person.age, 0);
console.log(total / persons.lenth);
document.write(`the mean of the ages is: ${total / persons.length}`);