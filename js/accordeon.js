// ____________________________ аккордеон __________________________________________________________________
// ____________________________ один открыт, остальные закрываются _________________________________________
// Выбираю все иконки
const accordionIcons = document.querySelectorAll('.main__sixth-right-list-item-icon');

// Выбираю все кнопки
const accordionButtonsIcons = document.querySelectorAll('.main__sixth-right-list-item-button');

// Выбираю все скрывающиеся параграфы
const accordionTexts = document.querySelectorAll('.main__sixth-right-list-item-text');
if (accordionButtonsIcons && accordionTexts) {
  // Прохожу циклом по каждой кнопке и добавляю обработчик
  accordionButtonsIcons.forEach((button, index) => {
    // Добавляю слушатель события на каждую кнопку
    button.addEventListener('click', function(e) {
      e.preventDefault();

      // Нахожу ближайший родительский элемент
      const listItem = e.target.closest('.main__sixth-right-list-item');

      // Нахожу текст в этом родительском элементе
      const textContent = listItem.querySelector('.main__sixth-right-list-item-text');

      // Проверяю открыт ли уже какой-либо другой аккордeон
      const isOpen = textContent.classList.contains('--accordion-active');

      // Закрываю все аккордeоны
      accordionTexts.forEach(text => {
        text.classList.remove('--accordion-active');
      });

      // Закрываю все иконки
      accordionButtonsIcons.forEach(button => {
        const icon = button.querySelector('.main__sixth-right-list-item-icon');
        icon.classList.remove('--accordion-icon-active');
      });

      // Открываю текущий аккордеон если он был закрыт
      if (!isOpen) {
        textContent.classList.add('--accordion-active');
        const icon = button.querySelector('.main__sixth-right-list-item-icon');
        icon.classList.add('--accordion-icon-active');
      }
    });
  });
}





// ____________________________ один открыт, остальные не закрываются _________________________________________

// // Select all accordion control icons
// const accordionIcons = document.querySelectorAll('.main__sixth-right-list-item-icon');

// // Loop through each accordion control icon
// accordionIcons.forEach(icon => {
//   // Add click event listener to each icon
//   icon.addEventListener('click', function(e) {
//     e.preventDefault();

//     // Find the closest parent list item
//     const listItem = e.target.closest('.main__sixth-right-list-item');

//     // Find the text content of the list item
//     const textContent = listItem.querySelector('.main__sixth-right-list-item-text');

//     // Toggle the active class on the text content
//     textContent.classList.toggle('--accordion-active');

//     // Toggle the active class on the icon
//     icon.classList.toggle('--accordion-icon-active');
//   });
// });