// event object argument e,evt
// info about triggered event
// event.type
// event.currentTarget
// this keyword
// preventDefault() - prevents default behaviour

const heading = document.querySelector('h1');
// console.log(heading);
heading.addEventListener('click', function (event) {
  console.log(event.currentTarget);
  event.currentTarget.classList.add('red');
  console.log(event.type);
});

const btn = document.querySelector('.btn');
btn.addEventListener('click', (e) => {
  console.log(e);
  e.currentTarget.classList.add('blue');
  // this works similar but doesn't work good with arrow functions
  console.log(this);
});

// preventing the default behavior happening i.e here going upto page
function linkClick(event) {
  event.preventDefault();
}

const link = document.getElementById('link');
link.addEventListener('click', linkClick);
