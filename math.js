let total = 0
let firstNumber = 0                  // Declares variable "firstNumber" is set to 0. This will store the first generated number

function generateRandomNumber() {   // This is the function that is executed when the button is pressed
    const randomNumber = Math.floor(Math.random() * 11) + 1; // Generates Random number 1-11
        
    let message;                    // I declared a variable to display messages in the alert window, instead of logging to the console.
        if (total === 0) {                          // No numbers have been generated yet
            firstNumber = randomNumber;             // This line assigns the random number generated to the firstNumber variable 
            total += firstNumber;                   // This adds the first number to the total
            message = `First Number: ${firstNumber}`; // Tells user the first number generated usng backticks to insert value into string
         } else {                                   // If number generated is not the first number, execution continues
            total += randomNumber;                  // Adds value of the new number thats generated
            message = `Number Added: ${randomNumber} Current total: ${total}`; // This time the message shown is the new number added to the current total
         }

         if (total === 21) {
            alert(message + " You win");            // If the numbers added total to = 21 You win! "Black Jack!"
            total = 0;                              // Game resets to 0
        } else if (total > 21) {
            alert(message + " You lose. Game Over");// If the total is greater than 21 You Lose "Bust!"
            total = 0;                              // Game resets to 0
        } else {                                    // This is important for the code to continue excuting if the total is niether =<21
            alert(message);                        // Displays number just added and current total in alert window
        }
        document.getElementById('demo').innerHTML = 'You drew a ' + randomNumber; //displays the current generated number using .inner html replacing <p>
    }

