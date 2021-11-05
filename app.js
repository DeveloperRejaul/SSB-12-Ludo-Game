// Define Variable
const user02Dyce = document.querySelector("#main-dayce");
const user02DyceCelderen = document.querySelector("#main-dayce span");





// create a rendom value
user02DyceCelderen.textContent = (Math.round((Math.random()*5+1)))  ;


// create dyce Click function
user02Dyce.addEventListener("click", ()=>{
    let randomNumber = (Math.round((Math.random()*5+1)));
    user02DyceCelderen.textContent = randomNumber;
})
















