const buttons = document.querySelectorAll('.main-work__hero-content-item-button');
const templates = document.querySelectorAll('.main-work__hero-content-templates-item');

if (buttons && templates) {
  buttons.forEach(function(button, index) {
    button.addEventListener('click', function() {
      // Remove the active class from all buttons
      buttons.forEach(function(btn) {
        btn.classList.remove('--main-work__hero-content-buttons-list-active');
      });
  
      // Add the active class to the clicked button
      this.classList.add('--main-work__hero-content-buttons-list-active');
  
      // Show or hide the corresponding content based on the button clicked
      templates.forEach(function(template) {
        template.style.display = 'none';
      });
  
      if (index === 0) {
        // Show all templates if "All" button is clicked
        templates.forEach(function(template) {
          template.style.display = 'block';
        });
      } else {
        // Show only the templates that match the button's data attribute value
        const templateToShow = document.querySelectorAll(`.main-work__hero-content-templates-item--${button.textContent.toLowerCase().replace(' ', '-')}`);
        templateToShow.forEach(function(template) {
          template.style.display = 'block';
        });
      }
    });
  });
}
