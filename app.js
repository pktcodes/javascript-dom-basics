// nodeValue
// textContent
// to get the content between the tags of the element

const heading = document.getElementById('special');
const value = heading.childNodes[0].nodeValue;
console.log(value);

// An easy way to achieve same result
const anotherValue = heading.textContent;
console.log(anotherValue);
