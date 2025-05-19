//green 
//Brainstorm the simplest code that could make the test pass. 
    //  initial I thought I should have use slice() and reverse() or some string method. While searching string methods on W3 schools O came across the filter() method. 
//Document your implementation ideas, focusing only on meeting the test's expectations. //
// tried filer and length to get the count, addded a vowel varaible, 
//Reflect on why it's import//
    //documenting changes help you remember what you have tried and learn from exoeriences. 


function countVowels (word) {
    // let filterVowels = str.match(vowels);
    // let filterVowels = word.match(/"a,e,i,u,o"/);
    word.match("aeiuo");
    return word.length;
}
console.log(countVowels("Missouri"));
console.log(countVowels("Apple"));
console.log(countVowels("Boat"));

//refactor
//Once the test passes, identify ways to improve the code's readability, efficiency, or maintainability. 
    //we need to filter the count from the word 
// Propose specific refactoring steps and explain how they improve the implementation. 

//Reflect on why this step is critical for long-term project success.//
    // this is important because you would want to know what changes have been made/

function countVowels (word) {
    // let filterVowels = str.match(vowels);
    // let filterVowels = ("aeiuo");
    let newWord = word.match("aeiuo");
    word.match("aeiuo");
    return newWord.length;
}
console.log(countVowels("Missouri"));
console.log(countVowels("Apple"));
console.log(countVowels("Boat"));

module.exports = countVowels;