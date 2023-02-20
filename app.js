/* 
Scroll Event - on element or document

window.addEventListener('scroll', function () {
  console.log(window.scrollY + 'px');
  console.log(window.scrollX + 'px');
});


document.addEventListener.....

scrollY - returns the number of pixels the document is currently scrolled along vertical axis(pageYOffset: deprecated)

scrollX - returns the number of pixels the document is currently scrolled along horizontal axis(pageXOffset: deprecated)

*/

// this event only works if they is scrollable area on the document i.e doesn't work when image is not there since no scroll is present

window.addEventListener('scroll', function () {
  console.log('Hey, You Scrolled the page');
  console.log(window.scrollY + 'px');
  console.log(window.scrollX + 'px');
});
