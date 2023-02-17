// createElement('element')
// createTextNode('text content') - between tags
// element.appendChild(childElement) - connect child to parent

// insertBefore('element','location'); - more control of location where element needs to placed instead of last automatically

const result = document.getElementById('result');
const heading2 = document.querySelector('.red');

// for div
// create Element
const divInBody = document.createElement('div');
// Create text inside element
const divInBodyText = document.createTextNode('i am simple div  in body');
// attaching text as child to element
divInBody.appendChild(divInBodyText);
// attaching div element as child to body
document.body.insertBefore(divInBody, result);

// heading
const headingInResultDiv = document.createElement('h2');
const headingInResultDivText = document.createTextNode('dynamic heading');
headingInResultDiv.appendChild(headingInResultDivText);
headingInResultDiv.classList.add('blue');
result.insertBefore(headingInResultDiv, heading2);

console.log(result.children);
