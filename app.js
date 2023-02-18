// CSS - Using classList or className is a better approach than using style property

const random = document.getElementById('random');
console.log(random.style);
// random.style.backgroundColor = 'blue';
// random.style.color = 'white';
// random.style.fontSize = '5rem';
// random.style.textTransform = 'uppercase';

/* better approach with separate of concerns */
random.classList.add('title');

// style can be used when a specific property add to element
random.style.color = 'chartreuse';
