"use strict"



var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];
let div = document.querySelector('#coffees');
let submitButton = document.querySelector('#submit');
let roastSelection = document.querySelector('#roast-selection');

function renderCoffee(coffee) {
    let html = '<div>';
        html += '<div class="col-6 float-left"><span class="coffee_name">' + coffee.name + '</span>';
        html += '<span class="coffee_roast">' + coffee.roast + '</span></div>';
         html += '</div>';
    return html;
}

function renderCoffees(coffees) {
    let html = '';
    for(let i = (coffees.length - 1); i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {

    e.preventDefault(); // don’t submit the form, we just want to update the data

    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    var coffee_name = document.getElementById('coffee_name').value;

    if (selectedRoast === "all") {
        coffees.forEach(function(coffees) {
            if (coffees.name.toLowerCase().match(coffee_name.toLowerCase())){

                filteredCoffees.push(coffees);
            }
        });
    }
    else if(coffee_name === ""){
        coffees.forEach(function(coffee) {
            if (coffee.roast === selectedRoast) {
                filteredCoffees.push(coffee);
            }
        })
    }
    else{
        coffees.forEach((function (coffee) {
            if (coffee.name.toLowerCase().match(coffee_name.toLowerCase())){
                filteredCoffees.push(coffee);
            }
        }))
    }

    div.innerHTML = renderCoffees(filteredCoffees);

}


// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide


function newCoffeeSubmition(){
    var coffeeName = document.getElementById("coffeeAddition").value;
    var coffeeRoast = document.getElementById("roast-selection-add").value;
    var coffeeIDs = coffees.length + 1;
    var newCoffee = {
        id: coffeeIDs,
        name: coffeeName,
        roast: coffeeRoast
    };
    coffees.push(newCoffee);
    sessionStorage.setItem("coffees", JSON.stringify(coffees));   // Saves the new coffee object/data for storage
    document.getElementById("coffees").innerHTML = coffees;

}


var storedCoffees = JSON.parse(sessionStorage.getItem("coffees"));


div.innerHTML = renderCoffees(coffees);


// Changes coffee options based on roast type
roastSelection.addEventListener("change", updateCoffees);

// Once added coffee, submits to the array and stores to session storage.
submitButton.addEventListener('click', updateCoffees);


document.getElementById("coffee_name").addEventListener("keyup", updateCoffees);

// if the Stored coffee list is under 14, the initial array, calls the original
// otherwise, pulls from the stored coffee variable/array.

if (storedCoffees.length < 15){
    div.innerHTML = renderCoffees(coffees);
}else{
    div.innerHTML = renderCoffees(storedCoffees);
}

