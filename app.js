/* 
The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets, scripts, iframes, and images. This is in contrast to DOMContentLoaded, which is fired as soon as the page DOM has been loaded, without waiting for resources to finish loading

window.addEventListener('load', function () {
  // code goes here
});

document.addEventListener.....
*/

window.addEventListener('load', function () {
  console.log('I will run second');
  const image = document.querySelector('img');
  console.log(image);
});
window.addEventListener('DOMContentLoaded', function () {
  console.log('DOMContentLoaded: I will run first');
  const image = document.querySelector('img');
  console.log(image);
});
