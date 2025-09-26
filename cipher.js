
// Get the phrase (text) and shift amount from the command line arguments
const input = process.argv[2]; // The phrase to encrypt
const shift = Number(process.argv[3]); // The number to shift letters by

// Check if both inputs are provided
if (!input || isNaN(shift)) {
  console.log("Please provide a phrase and a shift number.");
  process.exit(); // Stop the program if input is missing
}

// Create a function to encrypt single characters using Caesar Cipher
function encryptChar(char, shiftAmount) {
  // Convert character to lowercase for case insensitivity
  const code = char.toLowerCase().charCodeAt(0);

  // Check if the character is a lowercase letter (a-z)
  if (code >= 97 && code <= 122) {
    // Find a's char code (97) as the starting point
    // 0 means 'a', 1 means 'b', etc.
    let shiftedPos = (code - 97 + shiftAmount) % 26; // Shift within 0-25 positions

    // Handle negative shifts, JavaScript's % can be negative
    if (shiftedPos < 0) {
      shiftedPos += 26;
    }

    // Get the encrypted character code and convert back to letter
    return String.fromCharCode(97 + shiftedPos);
  } else {
    // If not a letter, return the character as is (for spaces, punctuation)
    return char;
  }
}

// Go through each character in the input phrase and encrypt it
let encrypted = "";

for (let i = 0; i < input.length; i++) {
  // Encrypt each character and add it to the result string
  encrypted += encryptChar(input[i], shift);
}

// Print the encrypted phrase
console.log(encrypted);

