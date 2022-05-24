function longest(s1, s2) {
    const newLocal = "";
    var newStr = newLocal;
    newStr = compare(s1, newStr);
    newStr = compare(s2, newStr);
return newStr.split('').sort().join('');
}

function compare(c1, c2) {
    for (var i = 0; i < c1.length; i++) {
        if (c2 == "") {
            c2 = c2 + c1[i];
        } else {
            if(c2.includes(c1[i]) === false) {
                c2 = c2 + c1[i];
            }
        }
    }

    return c2;
}

console.log(longest("aretheyhere", "yestheyarehere")); // "aehrsty"