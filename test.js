//Red
//What behavior your test is designed to test?
    // answer: red should test beofre the function exists
// why you expect it to fail initially?
    // answer: I do not have the function yet so this test should "fail"
// what starting with a failing test case clarified about the function’s requirements?
    //answer: //
const countVowels = require('/countVowles');

describe ("takes a string and returns the number of vowels (a, e, i, o, u) in the string. ", () => {

    test("should count number of vowels in 'Missouri'."), () => {
        expect(countVowels("Missouri")).toEqual(4);
    }
});

green