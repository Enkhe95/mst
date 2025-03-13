function handleFormSubmit(event) {
  // do not submit these forms yourself.
  event.preventDefault();
  console.log('Отправка формы');
  // receive form data
  const formData = new FormData(event.target);

  // output each field to the console
  for (let [key, value] of formData.entries()) {
    console.log(`${key}: ${value}`);
  }
}

const applicantForm = document.getElementById('form-once');
applicantForm.addEventListener('submit', handleFormSubmit);

//menu transform
function myFunction(x) {
  x.classList.toggle('change');
}

function transform() {
  let elements = document.getElementsByClassName('link');

  for (let i = 0; i < elements.length; i++) {
    let element = elements[i];

    if (element.style.display === 'inline') {
      element.style.display = 'none';
    } else {
      element.style.display = 'inline';
    }
  }
}
