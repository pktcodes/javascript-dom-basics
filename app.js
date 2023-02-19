// event propagation - order the events are fired/registered.
// event bubbling - clicked element first then bubbles up -- default
// event capturing - fires at the root and fires until reaches target

const container = document.querySelector('.container');
const btn = document.querySelector('.btn');
// const heading = document.querySelector('.heading');
// console.log(heading);

function sayHello() {
  console.log('Hey, You Clicked Me.');
}

btn.addEventListener('click', function () {
  const dynamicHeading = document.createElement('h1');
  dynamicHeading.classList.add('heading');
  dynamicHeading.textContent = "i'm heading inside the container";
  container.appendChild(dynamicHeading);
});

container.addEventListener('click', function (event) {
  if (event.target.classList.contains('heading')) {
    console.log('hello there');
  }
});

// heading.addEventListener('click', sayHello);
