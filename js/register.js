console.log("hello");

const salon = {
  name: "The Fashion Pet",
  phone: "555",
  address: {
    street: "3rd st.",
    number: "100",
  },
  hours: {
    open: "9:00am",
    close: "9:30am",
  },
  pets: [],
};

var {
  name,
  phone,
  address: { street, number },
  hours: { open, close },
} = salon;

var c = 0;
class Pet {
  constructor(
    name,
    type,
    age,
    breed,
    gender,
    service,
    weight,
    owner,
    contactPhone
  ) {
    this.name = name;
    this.type = type;
    this.age = age;
    this.breed = breed;
    this.gender = gender;
    this.service = service;
    this.weight = weight;
    this.owner = owner;
    this.contactPhone = contactPhone;
    this.price = 0;
    this.id = c++;
  }
}

var txtName = document.getElementById("petName");
var txtType = $("#type");
var txtAge = document.getElementById("petAge");
var txtBreed = document.getElementById("petBreed");
var txtGender = document.getElementById("petGender");
var txtService = document.getElementById("petService");
var txtWeight = document.getElementById("petWeight");
var txtOwner = document.getElementById("ownerName");
var txtPhone = document.getElementById("contactPhone");

function register() {
  var thePet = new Pet(
    txtName.value,
    txtType.val(),
    txtAge.value,
    txtBreed.value,
    txtGender.value,
    txtService.value,
    txtWeight.value,
    txtOwner.value,
    txtPhone.value
  );
  if (txtName.value === "" || txtPhone.value === "") {
    // alert("Add the required information");
    $("#alert-box")
      .removeClass("hidden")
      .addClass("alert-danger")
      .text("Please provide at least a (Name) and (Contact Phone) ");
    setTimeout(function () {
      $("#alert-box").addClass("hidden").removeClass("alert-danger");
    }, 3000);
  } else {
    console.log(thePet);
    salon.pets.push(thePet);
    displayCards(thePet);
    // display object on html
    clearInputs();

    $("#alert-box").removeClass("hidden");
    setTimeout(function () {
      $("#alert-box").addClass("hidden");
    }, 1000);

  }
}

// clearInputs(thePets);
// get info from input
// create generic object and pass info as params
// push the generic obj into the array
// display  object on html

function registerTally() {
  numberOfRegisteredPets += 1;
  document.getElementById(
    "registered-pets-amount"
  ).innerHTML = `we have ${numberOfRegisteredPets} pet(s) being seen..`;
}
// ------------
// -----------

function displayCards(aPet) {
  function register() {}
  // document.getElementById("pets").innerHTML = "";
  if (aPet.service == "full") {
    aPet.price = 40;
  } else if (aPet.service == "shower") {
    aPet.price = 30;
  } else if (aPet.service == "hair") {
    aPet.price = 20;
  } else if (aPet.service == "nails") {
    aPet.price = 10;
  }
  var icon = "";
  if (aPet.type == "dog") {
    icon = "🐕";
  } else if (aPet.type == "cat") {
    icon = "🐈";
  } else if (aPet.type == "bird") {
    icon = "🐦";
  } else {
    icon = "🦛";
  }
  var div = document.getElementById("types");
  div.innerHTML = "<h2> Our Registered Pets </h2>";
  // function countPetsOfType(apet.type) {

  // }
  tmp = `
  <div id="${aPet.id}" class="pet">
  <h3> Name: ${aPet.name} <button onclick="deletePet(${aPet.id})">🗑️<button></h3>
  <p> Type: ${aPet.type}</p>
  <p>Gender: ${aPet.gender}</p>
  <p>Age: ${aPet.age}</p>
  <p>Breed: ${aPet.breed}</p>
  <p>Price: ${aPet.price}</p>
  <p>Service: ${aPet.service}</p>
  <p>Weight: ${aPet.weight}</p>
  <p>Owner: ${aPet.owner}</p>
  <p>Contact Phone: ${aPet.phone}</p>
  </div>`;
  document.getElementById("pets").innerHTML += tmp;
  profitCalculation();
}

function displayTable(aPet) {
  // create row
  var row = `<tr id="aPet">
  <td>${aPet.name}</td>
  <td>${aPet.age}</td>
  <td>${aPet.breed}</td>
  <td>${aPet.gender}</td>
  <td>${aPet.type}</td>
  <td>${aPet.service}</td>
  <td>${aPet.price}</td>
  <td>${aPet.weight}</td>
  <td>${aPet.owner}</td>
  <td>${aPet.contact}</td>
  <td><button class="btn">delete</button></td>
  </tr>`;
  // append the row to the table
  $("#pet-table").append(row);
}

function clearInputs() {
  txtName.value = "";
  txtType.value = "";
  txtAge.value = "";
  txtBreed.value = "";
  txtGender.value = "";
  txtService.value = "";
  txtWeight.value = "";
  txtOwner.value = "";
  txtPhone.value = "";
}

function profitCalculation() {
  var sum = 0;
  for (var i = 0; i < salon.pets.length; i++) {
    sum = sum + salon.pets[i].price;
  }
  document.getElementById("profits").innerHTML = `Profits=$${sum}`;
  //Challenge: use foreach to calculate profits
}
function searchPet() {
  var ss = $("#search").val();
  console.log("searching pet");
  $("#search").val("");
  salon.pets.forEach((pet) => {
    if (
      pet.name.toLowerCase().includes(ss.toLowercase()) ||
      pet.service.toLowerCase().includes(ss.toLowercase())
    ) {
      $("#" + pet.id).removeClass("inactive");
    } else {
      $("#" + pet.id).addClass("inactive");
    }
  });
}
function deletePet(petId) {
  console.log("delete pet " + petId);
  // select the card from the html (jquery)
  var card = $("#" + petId);
  // search the pet into the array
  var indexDelete;
  for (var i = 0; i < salon.pets.length; i++) {
    if (salon.pets[i].id === petId) {
      indexDelete = i;
      break;
    }
  }
  console.log(indexDelete);
  // remove pet from array
  salon.pets.splice(indexDelete, 1);
  // remove the pet from the html
  card.remove();
  profitCalculation();
}

function init() {
  console.log("Init");

  var scooby = new Pet(
    "Scooby",
    "dog",
    50,
    "Dane",
    "Male",
    "hair",
    22,
    "Shaggy",
    "555-555-5555"
  );
  var speedy = new Pet(
    "Speedy",
    "cat",
    60,
    "Long Hair",
    "Male",
    "full",
    22,
    "Slo",
    "666-666-6666"
  );
  var vega = new Pet(
    "vega",
    "dog",
    12,
    "Mixed",
    "Female",
    "nails",
    28,
    "Dan",
    "556-556-5556"
  );
  salon.pets.push(scooby);
  salon.pets.push(speedy);
  // displayCards(scooby);
  // displayCards(speedy);
  // displayTable(scooby);
  // displayTable(speedy);
  // profitCalculation();
  //
  $("#register-btn").click(register);
  $("#search-btn").click(searchPet);
  $("#search").keypress(function (e) {
    console.log(e.key);
    if (e.key == "enter") {
      searchPet();
    }
  });
  $("#search").on("keyup", searchPet);
  // push pets to array
  // display pets
}

window.onload = init;
