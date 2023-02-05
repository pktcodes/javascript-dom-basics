// can contain digits, letters, underscore, $
// must start with letter, $ or _
let $random_123 = "random";
console.log($random_123);

// no keyword
// let let = '123'; ❌

// cannot start with number
// let 123$randomNumber = "random"; ❌

// case sensitive - fullname vs Fullname
let fullname = "praveen";
let Fullname = "Praveen";
console.log(fullname, Fullname);

// camelCase or underscore - common convention
let fullName = "praveenKumar";
let full_name = "praveen_kumar";
console.log(fullName);
console.log(full_name);
