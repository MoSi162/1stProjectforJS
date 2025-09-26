// Get the input from the command line (process.argv contains command line arguments)
const input = process.argv[2];

// Check if input was provided
if (!input) {
  console.log("Please provide an English phrase to translate.");
  process.exit(); // Stop the program if no input
}

// Split the input into individual words using the space character
const words = input.split(" ");

// Define the vowels for later checks
const vowels = ["a", "e", "i", "o", "u"];

// Create a function to translate a single word to Pig Latin
function toPigLatin(word) {
  // Convert the word to lower case to make checks case-insensitive
  const lowerWord = word.toLowerCase();

  // Check if the first letter is a vowel
  if (vowels.includes(lowerWord[0])) {
    // For vowels, add 'way' at the end of the word
    return word + "way";
  }
  // Check if the first two letters are consonants
  else if (!vowels.includes(lowerWord[0]) && !vowels.includes(lowerWord[1])) {
    // Move first two letters to the end, add 'ay'
    return word.slice(2) + word.slice(0, 2) + "ay";
  }
  // If only the first letter is a consonant, and the next letter is a vowel
  else {
    // Move first letter to end, add 'ay'
    return word.slice(1) + word[0] + "ay";
  }
}

// Use map to translate each word and join back into a phrase
const pigLatinWords = words.map(toPigLatin);

// Output the translated Pig Latin phrase
console.log(pigLatinWords.join(" "));
