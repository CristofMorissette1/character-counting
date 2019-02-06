function positioning(str) {
var result = {};
for (var i = 0; i < str.length; i++) {
    var charPos = str.charAt(i);
if (result[charPos]) {
    result[charPos].push(i); 
} else {
    result[charPos] = [i];
}
}
return result;
}
console.log(positioning("I love coding"));