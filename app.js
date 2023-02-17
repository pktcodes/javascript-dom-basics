// createElement('element')
// createTextNode('text content') - between tags
// element.appendChild(childElement) - connect child to parent

// for div
const divInBody = document.createElement('div');
const divInBodyText = document.createTextNode('i am simple div  in body');
// attaching text as child to element
divInBody.appendChild(divInBodyText);
// attaching div element as child to body
document.body.appendChild(divInBody);

// heading
const result = document.getElementById('result');
const headingInResultDiv = document.createElement('h2');
const headingInResultDivText = document.createTextNode('dynamic heading');
headingInResultDiv.appendChild(headingInResultDivText);
headingInResultDiv.classList.add('blue');
result.appendChild(headingInResultDiv);
