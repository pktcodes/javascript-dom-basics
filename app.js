// Web Storage API - provided by browser
// session storage - persisting data between sessions i.e the current browser tab
// local storage - persisting data when opening and closing browser
// setItem, getItem , removeItem, clear

// localStorage.setItem('name', 'praveen');
// sessionStorage.setItem('name', 'kumar');

localStorage.setItem('name', 'praveen');
localStorage.setItem('friend', 'kumar');
localStorage.setItem('job', 'web developer');
localStorage.setItem('address', 'illinois');

const name = localStorage.getItem('name');
console.log(name);

const anotherName = localStorage.removeItem('name');
console.log(anotherName);

localStorage.clear();
