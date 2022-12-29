// Store all possible characters in a variable called characters
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

// Declare a variable called password and assign an empty string
let password01El = document.getElementById("password01-el");
let password02El = document.getElementById("password02-el");

// Call printPassword function when the generator-btn button is clicked
document.querySelector("#generator-btn").addEventListener('click', printPasswords);

// Creates a function getRandomIndex that return a random index number 
function getRandomIndex() {
    // Declares a variable called randomIndex and assign random index number using Math.random function
    let randomIndex = Math.floor(Math.random() * characters.length)
    return randomIndex
}

// Creates a function geneartePasswords that return a random password composed of chracters
function generatePasswords() {
    
    // Declares a vairable called password and stores an empty string
    let password = "";
    // Declares a variable called userInput and stores a user input
    let userInput = document.getElementById("password-length");

    if (userInput.value === "") {
        clickBeforeSettingAlert()
    } else if (userInput.value > 4 && userInput.value < 16) {
        // Add a random chracter to the password.
        for (let i = 0; i < userInput.value; i++) {
            password += characters[getRandomIndex()]
        }
        return password
    } else {
        outOfRangerAlert()
    }
}

// Creats a function printPasswords that display generated passwords in HTML document
function printPasswords() {
    password01El.textContent = generatePasswords();
    password02El.textContent = generatePasswords();
}

// Creates a function that sends an alert if the input is not between the range(1 to 15)
function outOfRangerAlert() {
    alert("The input number must be between 5 and 15");
}

// Creates a function that sends an alert if the button is clicked before setting the password length
function clickBeforeSettingAlert() {
    alert("Set the password length before generating passwords");
}
