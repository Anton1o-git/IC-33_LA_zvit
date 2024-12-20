const toggleButton = document.getElementById('toggleButton');
const textInput = document.getElementById('textInput');

let isHidden = false;

toggleButton.addEventListener('click', () => {
    if (isHidden) {
        textInput.setAttribute('type', 'text');
        toggleButton.textContent = "Приховати";
    } else {
        textInput.setAttribute('type', 'password');
        toggleButton.textContent = "Розкрити";
    }
    isHidden = !isHidden;
});
