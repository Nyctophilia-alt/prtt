const searchForm = document.querySelector('.search-form');
const searchBtn = document.querySelector('#search-btn');
const cartItem = document.querySelector('.cart-items-container')
const cartBtn = document.querySelector('#cart-btn')
const navbar = document.querySelector('.navbar')
const menuBtn = document.querySelector('#menu-btn')



searchBtn.addEventListener('click', ()=>{
    searchForm.classList.toggle('active');
    document.addEventListener('click', (e)=>{
        if(!e.composedPath().includes(searchBtn) && !e.composedPath().includes(searchForm) ){
            searchForm.classList.remove('active');
        }
    })
})

cartBtn.addEventListener('click', ()=>{
    cartItem.classList.toggle('active');
    document.addEventListener('click', (e)=>{
        if(!e.composedPath().includes(cartBtn) && !e.composedPath().includes(cartItem) ){
            cartItem.classList.remove('active');
        }
    })
})

menuBtn.addEventListener('click', ()=>{
    navbar.classList.toggle('active');
    document.addEventListener('click', (e)=>{
        if(!e.composedPath().includes(navbar) && !e.composedPath().includes(menuBtn) ){
            navbar.classList.remove('active');
        }
    })
})

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

