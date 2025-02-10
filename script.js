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
  let rightAnswers = ["a_2", "b_1", "c_1", "d_1", "e_1", "f_1", "g_1", "h_1", "i_1", "j_1", "k_1", "l_1", "m_1", "n_1", "o_1", "p_1", "q_1", "r_1", "s_1", "t_1", "u_1", "v_1", "w_1", "x_1", "y_1", "z_1", "aa_1", "ab_1", "ac_1", "ad_1", "ae_1", "af_1", "ag_1", "ah_1", "ai_1", "aj_1", "ak_1", "al_1", "am_1", "an_1", "ao_1", "ap_1", "aq_1", "ar_1", "as_1", "at_1", "au_1", "av_1", "aw_1", "ax_1"]; // Список верных ответов

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

