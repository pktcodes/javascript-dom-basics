// prepend() - it adds at the start unlike append() which used to add at the end after js script tag
// innerText - a better approach for adding text instead of create text node and appending to element

const heading = document.createElement('h2');

// add text to heading
heading.innerText = 'i am dynamic heading';
console.log(heading);

// add element before
document.body.prepend(heading);
