const accordionButtonsIcons = document.querySelectorAll('.main__sixth-right-list-item-button');
const accordionTexts = document.querySelectorAll('.main__sixth-right-list-item-text');
const accordionOpenLines = document.querySelectorAll('.main__sixth-right-list-item-open-line');

if (accordionOpenLines && accordionTexts) {
  accordionOpenLines.forEach((openLine, index) => {
    openLine.addEventListener('click', function(e) {
      e.preventDefault();

      const button = openLine.querySelector('.main__sixth-right-list-item-button');
      const textContent = openLine.closest('.main__sixth-right-list-item').querySelector('.main__sixth-right-list-item-text');

      const isOpen = textContent.classList.contains('--accordion-active');

      accordionTexts.forEach(text => {
        text.classList.remove('--accordion-active');
      });

      accordionButtonsIcons.forEach(button => {
        const icon = button.querySelector('.main__sixth-right-list-item-icon');
        icon.classList.remove('--accordion-icon-active');
      });

      if (!isOpen) {
        textContent.classList.add('--accordion-active');
        const icon = button.querySelector('.main__sixth-right-list-item-icon');
        icon.classList.add('--accordion-icon-active');
      }
    });
  });
}




