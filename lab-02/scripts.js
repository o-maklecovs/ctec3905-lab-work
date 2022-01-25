function sayHello() {
  console.log('Hello world!');
}

function changeText() {
  myBtn.textContent = 'My button';
}

myBtn.addEventListener('click', sayHello);
anotherBtn.addEventListener('click', changeText);
