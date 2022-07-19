// Write a function that accepts an array of 10 integers (between 0 and 9),
// that returns a string of those numbers in the form of a phone number.

// EX: [1,2,3,4,5,6,7,8,9] returns "(123) 456-789"

function createPhoneNumber(num) {
    const regex = /^(\d{3})(\d{3})(\d{4})$/;
    let str = "";
    
    for (let i = 0; i < num.length; i++) {
        str += num[i]
    };

    let match = str.match(regex);

    if (match) {
        return '(' + match[1] + ') ' + match[2] + '-' + match[3]
    };

    return null;
}

console.log(createPhoneNumber([1,2,3,4,5,6,7,8,9,0]));