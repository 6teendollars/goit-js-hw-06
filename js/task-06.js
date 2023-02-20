const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', () => {
  const length = inputEl.getAttribute('data-length');
  const value = inputEl.value.trim();

  if (value.length === Number(length)) {
    inputEl.classList.add('valid');
    inputEl.classList.remove('invalid');
  } else {
    inputEl.classList.add('invalid');
    inputEl.classList.remove('valid');
  }
});