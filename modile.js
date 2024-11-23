// Получаем все элементы с классом .game-item
const gameItems = document.querySelectorAll('.game-item');

gameItems.forEach(item => {
  // Проверяем, что элемент не имеет id "game-item_none"
  if (item.id !== 'game-item_none') {

    const gameHover = item.querySelector('.game-hover');

    // При наведении на .game-item
    item.addEventListener('mouseenter', () => {
      item.classList.add('game-item_hover'); // Добавляем класс при наведении
      gameHover.style.zIndex = '10'; // Поверх других элементов
    });

    // При уходе мыши с .game-item
    item.addEventListener('mouseleave', () => {
      item.classList.remove('game-item_hover'); // Убираем класс при уходе
      gameHover.style.zIndex = ''; // Возвращаем z-index в исходное состояние
    });
  }
});
