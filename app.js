// select element
// addEventListener()
// what event, what to do

const heading = document.querySelector('h1');

const btn = document.querySelector('.btn');

function changeHeadingColor() {
  const hasClass = heading.classList.contains('red');

  if (hasClass) {
    heading.classList.remove('red');
  } else {
    heading.classList.add('red');
  }

  console.log('Hey, You Clicked Me.');
}

btn.addEventListener('click', changeHeadingColor);
