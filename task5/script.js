document.addEventListener('DOMContentLoaded', () => {
    const textInput = document.getElementById('textInput');
    const duplicateField = document.getElementById('duplicateField');
    const textForm = document.getElementById('textForm');

    textInput.addEventListener('input', () => {
        duplicateField.textContent = textInput.value;
    });

    textForm.addEventListener('submit', (event) => {
        event.preventDefault();
        console.log( '', textInput.value);
        textInput.value = '';
        duplicateField.textContent = '';
    });
});