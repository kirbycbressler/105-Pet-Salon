// objects

// bird (class)... color, mass, sound (attributes)
// can do.. fly, grow, crash, shrink (methods)


// university
// student course professor (classes)
// student.. name phone email(attributes) 
// assignment.. description, points
//  
// object literal
const person = {
  name: "John",
  age: 80,
  birthYear: function () {
    return new Date().getFullYear() - this.age;
  }
}

console.log(person.birthYear());

const client = {
  name: "Alex",
  type: "Premium",
  data: {
    address: {
      city: "San Diego",
      country: "US"
    },
    account: {
      date: "12-30-2018",
      bonus: 50
    }
  }
}

// display on console (country)

console.log(client.data.address.country);