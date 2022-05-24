// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" 
// if that character appears only once in the original string, or ")" if that character appears more than once in the original string. 
// Ignore capitalization when determining if a character is a duplicate.

function duplicateEncode(word){
    let object= {};
    let letter = word.toLowerCase().split('');

    for (let i = 0; i < letter.length; i++) {
        let x = letter[i];
        if (object[x] === undefined) {
            object[x] = 1;
        }   else {
            object[x] +=1
        }
    }

    return letter.map(function(letter) {
        return object[letter] === 1 ? '(' : ')';
    }).join('');
}

console.log(duplicateEncode("din")); // "((("
console.log(duplicateEncode("recede")); // "()()()"
console.log(duplicateEncode("Success")); // ")())())","should ignore case"
console.log(duplicateEncode("(( @")); // "))(("