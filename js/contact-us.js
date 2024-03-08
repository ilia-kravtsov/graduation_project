// ________________________________ preventing form top scrolling after clicking the button _____________________________
const forms = document.querySelectorAll('form');
if (forms) {
  forms.forEach(function(form) {
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      this.reset();
    });
  });
}