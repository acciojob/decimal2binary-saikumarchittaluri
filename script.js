 function decimalToBinary(decimal) {
  let binary = "";
  if (decimal === 0) {
    binary = "0";
  } else {
    while (decimal > 0) {
      binary = (decimal % 2) + binary;
      decimal = Math.floor(decimal / 2);
    }
  }
  return binary;
}

// Test the function
const decimal = parseInt(prompt("Enter a decimal number: "));
const binary = decimalToBinary(decimal);
console.log("Binary representation:", binary);
