function isFive(num) {
  // Your code here
  if (num === 5) {
    return true;
  }
  return false;
}

function isOdd(number) {
  // Your code here
  if (typeof number === "number") {
    if (number % 2 !== 0) {
      return true;
    }

    return false;
  } else {
    throw new TypeError("not a number");
  }
}

function myRange(min, max, step = 1) {
  // Your code here
  // Edge case: input is not number
  // Unintuitive case: bigger number first
  // Take in a min, a max and a step
  // If step is not provided, default 1
  // Make empty array holder
  // For number from min to max
  // Add eachone to array skip by step
  // Return Array
  //
  if (min >= max) {
    return [];
  }

  const yourRange = [];
  for (let i = min; i <= max; i += step) {
    yourRange.push(i);
  }
  return yourRange;
}

module.exports = { isFive, isOdd, myRange };
