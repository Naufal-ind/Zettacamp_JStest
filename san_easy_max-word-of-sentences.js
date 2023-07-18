/**
 * Direction:
 * Find maximum number of words from given sentences.
 *
 * Expected:
 * 23
 */
const sentences = [
  'Mauris ultricies sed sapien eget malesuada. Suspendisse et aliquet odio, id ultrices erat. Praesent vehicula erat nulla. Aliquam a lorem urna. Donec.',
  'Duis at tellus et ex bibendum pellentesque sed in nibh. Sed aliquet, diam id mollis facilisis, massa metus accumsan elit, at mattis magna.',
  'Sed non nibh quam. Pellentesque eget ultrices diam. Aliquam diam justo, consectetur ac dui lobortis, vestibulum bibendum lorem. Sed porta pulvinar.',
];

//Muhammad Naufal Indiarto, Salatiga

function result(sentences) {
  // your code here
  const ResultArray = []; // loop through each sentence in the 'sentences' array
  for (const sentence of sentences){ 
    // split the sentence into an array of words using space as the delimiter
    const words = sentence.split(' ');
    // push the number of words in the sentence to the 'resultArray'
    ResultArray.push(words.length);
  }
  // return the 'resultArray' contaitining the maxim number of words in each sentence
  return ResultArray;
}
// call the 'result' function with the 'sentences' array and print the result
console.log(result(sentences));
