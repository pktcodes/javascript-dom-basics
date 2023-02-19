// submit event listener
// prevent default
// how to get a value

const form = document.getElementById('form');
const name = document.getElementById('name');
const password = document.getElementById('password');

form.addEventListener('submit', function (event) {
  event.preventDefault();
  console.log('Hey, You Clicked Me');
  console.log(name.value);
  console.log(password.value);
});
