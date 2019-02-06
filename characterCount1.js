//Write a function that takes in a string 
//Function should return an object (list letters from string)
//Return the count of letters in the string
//Letters should be key # should be value

function charCount(str) {
    var newString = str.replace(/\s/g, "");
    var newLetters = newString.split('').sort().join('');
    var counter = 1;
    var result = {};
    for (var i = 0; i < newLetters.length; i++) {
        var char = newLetters[i];
    if (char == newLetters[i + 1]) {
        counter++;
        result[char] = counter;
    } else {
        counter = 1;
        if (!result[char]) result[char] = counter;
    }
    }
    return result;
}
console.log(charCount("lighthouse labs rocks"));