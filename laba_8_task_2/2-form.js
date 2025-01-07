const formData = {
    email: "",
    message: "",
};

const form = document.querySelector(".feedback-form");
const emailInput = form.querySelector("input[name='email']");
const messageInput = form.querySelector("textarea[name='message']");
const STORAGE_KEY = "feedback-form-state";

function initForm() {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      emailInput.value = parsedData.email || "";
      messageInput.value = parsedData.message || "";
      formData.email = parsedData.email || "";
      formData.message = parsedData.message || "";
    }
}

function saveToLocalStorage() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  }

function handleInput(event) {
    formData[event.target.name] = event.target.value.trim();
    saveToLocalStorage();
}

function handleSubmit(event) {
    event.preventDefault();
    
    if (!formData.email || !formData.message) {
        alert("Fill please all fields");
        return;
    }
    console.log(formData);

    localStorage.removeItem(STORAGE_KEY);
    formData.email = "";
    formData.message = "";
    form.reset();
}
    form.addEventListener("input", handleInput);
    form.addEventListener("submit", handleSubmit);
initForm();
