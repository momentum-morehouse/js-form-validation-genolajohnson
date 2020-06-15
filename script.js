console.log('Add validation!');

function valid() {

    let car = document.querySelector('#car-year');
    //console.log(car);
    let form = document.querySelector('#parking-form');

    let carField = document.querySelector("#car-field");

    form.addEventListener('submit', e => {
        e.preventDefault()
        validateName();
    })
    
    // console.log(form);
    // let date = document.querySelector('#start-date');
    // let days = document.querySelector('#days');
    // let creditcard = document.querySelector('#credit-card');
    // let cvv = document.querySelector('#cvv');
    // let expiration = document.querySelector('#expiration');


}

function validateName() {
    let name = document.querySelector('#name');
    let nameField = document.querySelector("#name-field")

    if (name.value.trim() === "") {
        nameField.classList.add("input-invalid")
    }
    else {
        nameField.classList.add("input-valid")
    }
}

valid();
function validateCar() {
    let car = document.querySelector('#car-field');
    let carField = document.querySelector("car-field");

    if (car.value.trim() === "") {
        carField.classList.add("input-valid")
    }
    else {
        carField.classList.add("input-valid")
    }
}





