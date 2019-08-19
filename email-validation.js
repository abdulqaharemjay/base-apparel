//form
const form = document.querySelector(".form");

//reg-ex
const test = email => {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

//function to validate email.
const validateEmail = e => {
  e.preventDefault();

  const emailInput = document.querySelector('input[type="email"]');
  const errorInfo = document.querySelector(".err-msg");

  if (!test(emailInput.value)) {
    emailInput.classList.add("err-icon");
    errorInfo.classList.add('show-err');
  } else {
    emailInput.classList.remove("err-icon");
    errorInfo.classList.remove('show-err');
  }
};

form.addEventListener("submit", validateEmail);