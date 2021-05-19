// QUESTION 1
function convertFahrToCelsius(F) {
  const C = ((F - 32) * 5) / 9;
  if (isNaN(F)) {
    if (Array.isArray(F)) {
      return `${JSON.stringify(F)} is not a valid number but a/an array.`;
    } else {
      return `${JSON.stringify(F)} is not a valid number but a/an ${typeof F}.`;
    }
  }
  return C.toFixed(4);
}

// QUESTION 2
function checkYuGiOh(n) {
  const array = [];
  if (isNaN(n)) {
    return `invalid parameter: ${JSON.stringify(n)}`;
  }
  for (let i = 1; i <= n; i++) {
    if (i % 2 == 0 && i % 3 == 0 && i % 5 == 0) {
      array.push("yu-gi-oh");
    } else if (i % 2 == 0 && i % 3 == 0) {
      array.push("yu-gi");
    } else if (i % 2 == 0 && i % 5 == 0) {
      array.push("yu-oh");
    } else if (i % 3 == 0 && i % 5 == 0) {
      array.push("gi-oh");
    } else if (i % 2 == 0) {
      array.push("yu");
    } else if (i % 3 == 0) {
      array.push("gi");
    } else if (i % 5 == 0) {
      array.push("oh");
    } else {
      array.push(i);
    }
  }
  return array;
}
