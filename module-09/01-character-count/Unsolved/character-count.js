// Write code to create a function that accepts a string and returns an object containing the number of times each character appears in the string

var characterCount = (str) => {
  const charCount = {};
  for (let i = 0; i < str.length; i++) {
    const letter = str[i];
    charCount.letter = 1;

  }
  console.log(charCount);
};

characterCount('Apple');