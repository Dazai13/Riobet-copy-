document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelector('.slick-track');
    const slide = document.querySelectorAll('.new-slider-item');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
  
    const slideWidth = 1104; // Ширина шага переключения
    const animationDuration = 0.5; // Длительность анимации в секундах
    const autoPlayInterval = 10000; // Время в миллисекундах для автопрокрутки
  
    let currentIndex = 1; // Начинаем с 1, так как 0 будет клонированный последний слайд
    let autoPlay; // Переменная для хранения интервала автопрокрутки
  
    // Клонирование первого и последнего слайда
    const firstClone = slide[0].cloneNode(true);
    const lastClone = slide[slide.length - 1].cloneNode(true);
  
    // Добавляем клоны в DOM
    slides.appendChild(firstClone);
    slides.insertBefore(lastClone, slide[0]);
  
    // Устанавливаем начальную позицию
    slides.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  
    function showSlide(index) {
      slides.style.transition = `transform ${animationDuration}s ease-in-out`;
      slides.style.transform = `translateX(-${index * slideWidth}px)`;
      currentIndex = index;
    }
  
    function handleTransitionEnd() {
      // Если мы перешли к клонированному первому слайду
      if (currentIndex === 0) {
        slides.style.transition = 'none'; // Отключаем анимацию
        currentIndex = slide.length; // Переходим к реальному последнему слайду
        slides.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
      }
  
      // Если мы перешли к клонированному последнему слайду
      if (currentIndex === slide.length + 1) {
        slides.style.transition = 'none'; // Отключаем анимацию
        currentIndex = 1; // Переходим к реальному первому слайду
        slides.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
      }
    }
  
    // Автоматическое переключение
    function startAutoPlay() {
      autoPlay = setInterval(() => {
        showSlide(currentIndex + 1);
      }, autoPlayInterval);
    }
  
    // Остановка автопрокрутки
    function stopAutoPlay() {
      clearInterval(autoPlay);
    }
  
    // Добавляем обработчики событий для кнопок
    prevButton.addEventListener('click', () => {
      stopAutoPlay(); // Остановить автопрокрутку при взаимодействии
      showSlide(currentIndex - 1);
      startAutoPlay(); // Перезапустить автопрокрутку
    });
  
    nextButton.addEventListener('click', () => {
      stopAutoPlay(); // Остановить автопрокрутку при взаимодействии
      showSlide(currentIndex + 1);
      startAutoPlay(); // Перезапустить автопрокрутку
    });
  
    // Событие для завершения анимации
    slides.addEventListener('transitionend', handleTransitionEnd);
  
    // Запуск автопрокрутки при загрузке
    startAutoPlay();
  });
  

  function updateClassesForMobile() {
    // Проверяем ширину окна
    const windowWidth = window.innerWidth;
    
    if (windowWidth >= 320 && windowWidth <= 1200) {
        // Получаем все элементы на странице
        const allElements = document.querySelectorAll('*');

        allElements.forEach(element => {
            const classes = element.className;

            if (classes) {
                const updatedClasses = classes
                    .split(' ')
                    .map(className => `${className}__mobile`)
                    .join(' ');

                element.className = updatedClasses;
            }
        });
    }
}

// Выполняем при загрузке страницы
document.addEventListener
