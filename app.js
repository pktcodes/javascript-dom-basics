// select element
// addEventListener()
// what event, what to do

const heading = document.querySelector('h1');

const btn = document.querySelector('.btn');
btn.addEventListener('click', function () {
  console.log('Hey, You Clicked Me.');
  heading.classList.add('red');
});
