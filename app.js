// createElement('element')
// createTextNode('text content') - between tags
// element.appendChild(childElement) - connect child to parent

// replaceChild('new','old'); - replace old element with new element

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

const newHeading = document.createElement('h6');
const newHeadingText = document.createTextNode(
  'This is new heading h6 replacing div in body'
);
newHeading.appendChild(newHeadingText);
newHeading.classList.add('red');
document.body.replaceChild(newHeading, divInBody);

console.log(result.children);
