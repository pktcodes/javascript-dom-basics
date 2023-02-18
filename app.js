// click - fires after full action occurs
// mousedown - button is pressed
// mouseup - button is released
// mouseenter - moved onto an element
// mouseleave - moved out of an element

const btn = document.querySelector('.btn');

btn.addEventListener('click', function () {
  console.log('Hey, You Clicked Me.');
});

btn.addEventListener('mousedown', function () {
  console.log('down');
});

btn.addEventListener('mouseup', function () {
  console.log('up');
});

const heading = document.querySelector('h1');

heading.addEventListener('mouseenter', function () {
  heading.classList.add('red');
});

heading.addEventListener('mouseleave', function () {
  heading.classList.remove('red');
});
