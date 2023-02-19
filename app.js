/* 
The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed without waiting for stylesheets, images, and subframes to finish loading.

window.addEventListener('DOMContentLoaded', function () {
  // code goes here
});

document.addEventListener.....
*/

// Global Event

// In simple terms, it looks for js once the dom content html is loaded
window.addEventListener('DOMContentLoaded', function () {
  const heading = document.querySelector('h1');
  console.log(heading);
  heading.style.color = 'red';
});
