const confirmBtn = document.getElementById("btn");
let inputForm = document.getElementById("input-form");
let completeState = document.getElementById("complete-state");

confirmBtn.addEventListener("click", () => {
    inputForm.style.display = 'none';
    completeState.style.display = 'flex';

});