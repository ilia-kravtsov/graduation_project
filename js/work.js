const buttons = document.querySelectorAll('.main-work__hero-content-item-button');
const templates = document.querySelectorAll('.main-work__hero-content-templates-item');

if (buttons && templates) {
  buttons.forEach(function(button, index) {
    button.addEventListener('click', function() {
      // Удаляю активный класс со всех кнопок
      buttons.forEach(function(btn) {
        btn.classList.remove('--main-work__hero-content-buttons-list-active');
      });
  
      // Добавляю активный класс к нажатой кнопке
      this.classList.add('--main-work__hero-content-buttons-list-active');
  
      // Показываю или скрываю контент в зависимости от нажатой кнопки
      templates.forEach(function(template) {
        template.style.display = 'none';
      });
  
      if (index === 0) {
        // Показываю все шаблоны при нажатии кнопки 'All'
        templates.forEach(function(template) {
          template.style.display = 'block';
        });
      } else {
        // Показываю только нужный шаблон при нажатии одной из кнопок 
        const templateToShow = document.querySelectorAll(`.main-work__hero-content-templates-item--${button.textContent.toLowerCase().replace(' ', '-')}`);
        templateToShow.forEach(function(template) {
          template.style.display = 'block';
        });
      }
    });
  });
}
