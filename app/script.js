const nameInput = document.getElementById("name");
const errorName = document.getElementById("error-name");

const numberInput = document.getElementById("number");
const errorNumber = document.getElementById("error-number");

const monthInput = document.querySelectorAll(".exp-date");
const errorMonth = document.getElementById("error-exp");

const cvcInput = document.getElementById("cvc-num");
const errorCvc = document.getElementById("error-cvc");

const formInput = document.getElementById("input-form");
const complete = document.getElementById("complete-state");

const cardName = document.getElementById("owner");
const cardNumber = document.getElementById("card-number");
const cvcOutput = document.getElementById("cvc");
const mm = document.getElementById("mm");
const yy = document.getElementById("yy");


const continueBtn = document.getElementById("btn-continue");
continueBtn.addEventListener("click", (event) => {
    event.preventDefault();
    complete.style.display = "none";
    formInput.style.display = "block";

});


const submitF = (event, form) => {
    event.preventDefault();
    const nameIsValid = nameValidation(form.name.value);
    const numberIsValid = numberValidation(form.number.value);
    const monthIsValid = monthValidation(monthInput[0].value);
    const yearIsValid = yearValidation(monthInput[1].value);
    const cvcIsValid = cvcValidation(cvcInput.value);
    if (nameIsValid && numberIsValid && monthIsValid && yearIsValid && cvcIsValid) {
        cardName.textContent = form.name.value;
        cardNumber.textContent = form.number.value;
        cvcOutput.textContent = cvcInput.value;
        mm.textContent = monthInput[0].value;
        yy.textContent = monthInput[1].value;
        formInput.style.display = "none";
        complete.style.display = "flex";
    }
};

function nameValidation(string) {

    if (string === "") {
        errorName.style.display = "block";
        nameInput.style.borderColor = "#FF5050";
        return false;
    }
    errorName.style.display = "none";
    nameInput.style.borderColor = "#6348FE";
    return true;
};


function numberValidation(string) {
    if (string === "") {
        errorNumber.style.display = "block";
        numberInput.style.borderColor = "#FF5050";
        return false;
    }
    errorNumber.style.display = "none";
    numberInput.style.borderColor = "#6348FE";
    return true;
};

function monthValidation(number) {
    if (number === "") {
        errorMonth.style.display = "block";
        monthInput[0].style.borderColor = "#FF5050";
        return false;
    }
    errorMonth.style.display = "none";
    monthInput[0].style.borderColor = "#6348FE";
    return true;
};

function yearValidation(number) {
    if (number === "") {
        errorMonth.style.display = "block";
        monthInput[1].style.borderColor = "#FF5050";
        return false;
    }
    errorMonth.style.display = "none";
    monthInput[1].style.borderColor = "#6348FE";
    return true;
};

function cvcValidation(number) {
    if (number === "") {
        errorCvc.style.display = "block";
        cvcInput.style.borderColor = "#FF5050";
        return false;
    }
    errorCvc.style.display = "none";
    cvcInput.style.borderColor = "#6348FE";
    return true;
};