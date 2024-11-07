const consoleLog = document.querySelector('a');
consoleLog.addEventListener('click', (event) => {
const promptText = prompt('Введите текст');
const userTextField = document.querySelector('a');
userTextField.textContent = promptText;
event.preventDefault();
console.log('Текст ссылки изменён на', promptText);

});


