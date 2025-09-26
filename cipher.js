
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
