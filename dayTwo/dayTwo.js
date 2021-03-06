const getData = require('../readFile');

// Part One
const calculateCheckSum = boxIds => {
  const letterFrequency = { '2': 0, '3': 0 };

  boxIds.map(boxId => {
    const charCount = {};

    boxId.split('').map(char => {
      Object.keys(charCount).includes(char)
        ? (charCount[char] += 1)
        : (charCount[char] = 1);
    });

    if (Object.values(charCount).includes(2)) {
      letterFrequency['2'] += 1;
    }

    if (Object.values(charCount).includes(3)) {
      letterFrequency['3'] += 1;
    }
  });

  return letterFrequency['2'] * letterFrequency['3'];
};

getData('./dayTwo.txt').then(data => {
  console.log(`Checksum is: ${calculateCheckSum(data.split('\n'))}`);
});

// Part Two
const findMostCommonId = boxIds => {
  let commonLetters = [];

  boxIds.forEach(boxId => {
    boxIds.forEach(potentialMatch => {
      if (boxId !== potentialMatch) {
        const currentCommonLetters = [];

        for (let i = 0; i < boxId.length; i++) {
          if (boxId.charAt(i) === potentialMatch.charAt(i)) {
            currentCommonLetters.push(boxId.charAt(i));
          }
        }

        if (currentCommonLetters.length > commonLetters.length) {
          commonLetters = currentCommonLetters;
        }
      }
    });
  });

  return commonLetters.join('');
};

getData('./dayTwo.txt').then(data => {
  console.log(`Common letters are: ${findMostCommonId(data.split('\n'))}`);
});
