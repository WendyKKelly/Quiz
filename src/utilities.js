function random (a, b) {
  // if only one argument is provided we need to swap a and b
  if (b === 1) {
    [a, b] = [b, a]
  }
  return Math.floor((b - a + 1) * Math.random()) + a
}

function shuffle (array) {
  for (let i = array.length; i; i--) {
    let j = random(i) - 1;
    [array[i - 1], array[j]] = [array[j], array[i - 1]]
  }
}

export {
  random,
  shuffle
}
