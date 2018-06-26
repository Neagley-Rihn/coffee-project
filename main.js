"use strict"


function renderCoffee(coffee) {
    var html = '<div>';
        html += '<div class="col-6 float-left"><span class="coffee_name">' + coffee.name + '</span>';
        html += '<span class="coffee_roast">' + coffee.roast + '</span></div>';
         html += '</div>';
    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

// function updateCoffees(e) {
//     e.preventDefault(); // don't submit the form, we just want to update the data
//     var selectedRoast = roastSelection.value;
//     var filteredCoffees = [];
//     coffees.forEach(function(coffee) {
//         if (coffee.roast === selectedRoast) {
//             filteredCoffees.push(coffee);
//         }
//     });
//     div.innerHTML = renderCoffees(filteredCoffees);
// }


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
    }else{
        coffees.forEach((function (coffee) {
            if (coffee.name.toLowerCase().match(coffee_name.toLowerCase())){

                filteredCoffees.push(coffee);
            }
        }))
    }

    div.innerHTML = renderCoffees(filteredCoffees);

}


// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
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
    document.getElementById("coffees").innerHTML = coffees;
    console.log(coffeeName);
    console.log(coffees);
}

// var allCoffees = [];
//
// // on page load, save all the coffees
// allCoffees = coffees.forEach(function(coffee) {
//     allCoffees.push(coffee);
// console.log(allCoffees)
// });

var div = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');

div.innerHTML = renderCoffees(coffees);

roastSelection.addEventListener("change", updateCoffees);


document.getElementById("coffeeAll").addEventListener("click", function () {
    div.innerHTML = renderCoffees(coffees);
});

submitButton.addEventListener('click', updateCoffees);

document.getElementById("coffee_name").addEventListener("keyup", updateCoffees);

// function searchCoffees(value){
//     var filteredCoffees =[];
//     for (var i=0; i < coffees.length; i++){
//         if (coffees[i].name.toLowerCase().indexOf(value.toLowerCase())) {
//             filteredCoffees.push(coffees[i]);
//         }
//     }
//     div.innerHTML= renderCoffee(filteredCoffees);
// }

