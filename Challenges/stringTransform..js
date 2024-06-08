// Function that reverses the string
function reverseString(string) {
  return string.split("").reverse().join("");
}

// Function that converts the string to ASCII
function convertToASCII(string) {
  return string
    .split("")
    .map((char) => char.charCodeAt(0))
    .join(" ");
}

// Function that transforms the string depending on the conditions
function transformString(string) {
  const lengthString = string.length;

  // Checks if the length of the string is divisible by both 3 and 5
  if (lengthString % 3 === 0 && lengthString % 5 === 0) {
    // First reverse the string, then convert to ASCII
    string = reverseString(string);
    string = convertToASCII(string);
  } else if (lengthString % 3 === 0) {
    // Reverse the string
    string = reverseString(string);
  } else if (lengthString % 5 === 0) {
    // Convert to ASCII
    string = convertToASCII(string);
  }

  // It should return the string if no conditions from above are met
  return string;
}

const input = "Hello World";
const output = transformString(input);

console.log(output);
