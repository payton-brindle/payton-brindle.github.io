// assets/js/form-validation.js
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  if (!form) return;

  const nameEl = document.getElementById("name");
  const emailEl = document.getElementById("email");
  const msgEl = document.getElementById("message");
  const errorsEl = document.getElementById("form-errors");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function setError(input, message) {
    input.setAttribute("aria-invalid", "true");
    input.classList.add("input-error");
    return `<li><strong>${input.labels?.[0]?.innerText || input.name}:</strong> ${message}</li>`;
  }

  function clearErrors() {
    [nameEl, emailEl, msgEl].forEach(el => {
      el.removeAttribute("aria-invalid");
      el.classList.remove("input-error");
    });
    if (errorsEl) {
      errorsEl.innerHTML = "";
      errorsEl.classList.add("visually-hidden");
    }
  }

  form.addEventListener("submit", (e) => {
    clearErrors();
    let errorList = [];

    // Name: required + min length
    if (!nameEl.value.trim()) {
      errorList.push(setError(nameEl, "Please enter your full name."));
    } else if (nameEl.value.trim().length < 6) {
      errorList.push(setError(nameEl, "Name should be at least 6 characters."));
    }

    // Email: required + format
    if (!emailEl.value.trim()) {
      errorList.push(setError(emailEl, "Please enter your email address."));
    } else if (!emailRegex.test(emailEl.value.trim())) {
      errorList.push(setError(emailEl, "Please enter a valid email address."));
    }

    // Message: required + min length
    if (!msgEl.value.trim()) {
      errorList.push(setError(msgEl, "Please enter a message."));
    } else if (msgEl.value.trim().length < 8) {
      errorList.push(setError(msgEl, "Message should be at least 8 characters."));
    }

    if (errorList.length > 0) {
      e.preventDefault();
      if (errorsEl) {
        errorsEl.innerHTML = `<div class="box" role="alert">
          <p><strong>Please fix the following:</strong></p>
          <ul>${errorList.join("")}</ul>
        </div>`;
        errorsEl.classList.remove("visually-hidden");
        // Scroll into view for accessibility
        errorsEl.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  });
});
