// currentTarget - always refers to the element to which the event handler has been attached to
// target - identifies the element on which the event occured

const buttons = document.querySelectorAll('.btn');
console.log(buttons);
buttons.forEach(function (btn) {
  btn.addEventListener('click', function (event) {
    // currentTarget
    console.log('current Target:', event.currentTarget);
    event.currentTarget.style.color = 'green';

    // Target
    console.log('Target:', event.target);
    event.target.style.color = 'green';
  });
});
