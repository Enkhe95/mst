function handleFormSubmit(event) {
  // Do not submit these forms yourself.
  event.preventDefault();
  console.log('Отправка формы');
  // We receive form data
  const formData = new FormData(event.target);

  // We output each field to the console
  for (let [key, value] of formData.entries()) {
    console.log(`${key}: ${value}`);
  }
}

const applicantForm = document.getElementById('form-once');
applicantForm.addEventListener('submit', handleFormSubmit);
