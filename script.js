const searchForm = document.querySelector('.search-form');
const searchBtn = document.querySelector('#search-btn');
const cartItem = document.querySelector('.cart-items-container')
const cartBtn = document.querySelector('#cart-btn')
const navbar = document.querySelector('.navbar')
const menuBtn = document.querySelector('#menu-btn')




menuBtn.addEventListener('click', () => {
    navbar.classList.toggle('active');

    // Меняем иконку кнопки меню (опционально)
    if (navbar.classList.contains('active')) {
        menuBtn.innerHTML = '<i class="fas fa-times"></i>'; // Иконка "крестик"
    } else {
        menuBtn.innerHTML = '<i class="fas fa-bars"></i>'; // Иконка "бургер"
    }
});

// Закрываем меню при клике вне его области
document.addEventListener('click', (e) => {
    if (!navbar.contains(e.target) && !menuBtn.contains(e.target)) {
        navbar.classList.remove('active');
        menuBtn.innerHTML = '<i class="fas fa-bars"></i>'; // Возвращаем иконку "бургер"
    }
});

function summary() {
  let questions = document.querySelectorAll('.question p'); // Все вопросы
  let score = 0; // Количество верных ответов
  let rightAnswers = ["a_1", "a_1", "a_1", "a_2", "a_1", "a_1", "a_2", "a_1", "a_2", "a_2"]; // Список верных ответов

  questions.forEach((question, index) => {
      let chosenAnswer = document.querySelector(`input[name="вопрос${index + 1}"]:checked`);
      if (chosenAnswer && chosenAnswer.id === rightAnswers[index]) {
          score++;
      }
  });

  let resultModal = document.getElementById('resultModal');
  let resultText = document.getElementById('resultText');
  let closeModal = document.querySelector('.close');

  resultText.textContent = `Ваш результат: ${score} из ${questions.length}`;
  resultModal.style.display = 'block';

  closeModal.onclick = function() {
      resultModal.style.display = 'none';
  };

  window.onclick = function(event) {
      if (event.target === resultModal) {
          resultModal.style.display = 'none';
      }
  };
}

