// event propagation - order the events are fired/registered.
// event bubbling - clicked element first then bubbles up -- default
// event capturing - fires at the root and fires until reaches target

const container = document.querySelector('.container');
const list = document.querySelector('.list-items');

function showBubbling(event) {
  console.log('Current Target: ', event.currentTarget);
  console.log('Target: ', event.target);
}

// to stop the propagation of the events registered
function stopPropagation(event) {
  console.log('Hey, you clicked on list');
  event.stopPropagation();
}

container.addEventListener('click', showBubbling, { capture: true });
document.addEventListener('click', showBubbling, { capture: true });
window.addEventListener('click', showBubbling, { capture: true });
list.addEventListener('click', showBubbling, { capture: true });
