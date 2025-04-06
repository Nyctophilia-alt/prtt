const searchForm = document.querySelector('.search-form');
const searchBtn = document.querySelector('#search-btn');
const cartItem = document.querySelector('.cart-items-container');
const cartBtn = document.querySelector('#cart-btn');
const navbar = document.querySelector('.navbar');
const menuBtn = document.querySelector('#menu-btn');

// Массив с объяснениями для каждого вопроса
const explanations = [
    "22 июня 1941 года Германия напала на СССР без объявления войны, что стало началом Великой Отечественной войны.",
    "Ленинград находился в блокаде 872 дня, с 8 сентября 1941 года по 27 января 1944 года.",
    "Иосиф Сталин был Верховным Главнокомандующим СССР во время войны.",
    "Сталинградская битва (1942-1943) стала переломным моментом в войне, так как после неё стратегическая инициатива перешла к СССР.",
    "Операция 'Багратион' (1944) привела к освобождению Белоруссии от немецких войск.",
    "Георгий Жуков командовал обороной Москвы в 1941 году и сыграл ключевую роль в её успешной защите.",
    "Операция 'Тайфун' была направлена на захват Москвы, но завершилась провалом для немецких войск.",
    "Т-34 был основным танком Красной Армии во время войны благодаря своей надёжности и простоте в производстве.",
    "Крымский фронт оборонял Севастополь, который был важным стратегическим пунктом на Чёрном море.",
    "Союзниками СССР были США и Великобритания, которые оказывали помощь по программе ленд-лиза.",
    "1944 год стал годом освобождения территории СССР от фашистов, так как к этому времени Красная Армия провела ряд успешных операций.",
    "Орёл был освобождён первым в ходе войны в 1943 году в ходе операции 'Кутузов'.",
    "План 'Барбаросса' был разработан Германией для нападения на СССР и предполагал быструю победу.",
    "Центральный фронт участвовал в Курской битве, которая стала крупнейшим танковым сражением в истории.",
    "Берлин был взят советскими войсками в 1945 году, что стало завершающим этапом войны в Европе.",
    "9 мая 1945 года считается Днём Победы, так как в этот день был подписан акт о капитуляции Германии.",
    "Сталинградский фронт оборонял Сталинград, где произошло одно из самых кровопролитных сражений войны.",
    "Минск был освобождён в ходе операции 'Багратион' в 1944 году.",
    "1941 год стал годом начала контрнаступления под Москвой, которое завершилось успехом для Красной Армии.",
    "1-й Белорусский фронт участвовал в битве за Берлин, завершившейся взятием столицы Германии.",
    "Ленинград был освобождён в ходе операции 'Искра' в 1943 году, что привело к прорыву блокады.",
    "1944 год стал годом освобождения Крыма, который был важным стратегическим регионом.",
    "1-й Украинский фронт участвовал в освобождении Праги, завершившемся в мае 1945 года.",
    "Сталинград был освобождён в ходе операции 'Уран', которая привела к окружению немецких войск.",
    "1943 год стал годом освобождения Киева, что стало важным этапом в освобождении Украины.",
    "1-й Белорусский фронт участвовал в освобождении Варшавы, которое произошло в январе 1945 года.",
    "Орёл был освобождён в ходе операции 'Кутузов' в 1943 году, что стало важным этапом в освобождении СССР.",
    "1944 год стал годом освобождения Одессы, которая была важным портом на Чёрном море.",
    "2-й Украинский фронт участвовал в освобождении Будапешта, завершившемся в феврале 1945 года.",
    "Харьков был освобождён в ходе операции 'Румянцев' в 1943 году, что стало важным этапом в освобождении Украины.",
    "1944 год стал годом освобождения Белоруссии, что привело к значительным потерям для немецких войск.",
    "3-й Украинский фронт участвовал в освобождении Вены, завершившемся в апреле 1945 года.",
    "Кишинёв был освобождён в ходе операции 'Ясско-Кишинёвская' в 1944 году, что привело к освобождению Молдавии.",
    "1944 год стал годом освобождения Прибалтики, что завершило освобождение территории СССР.",
    "3-й Белорусский фронт участвовал в освобождении Кенигсберга, завершившемся в апреле 1945 года.",
    "Варшава была освобождена в ходе операции 'Висло-Одерская' в январе 1945 года.",
    "1944 год стал годом освобождения Польши, что привело к значительным потерям для немецких войск.",
    "1-й Белорусский фронт участвовал в освобождении Берлина, завершившемся в мае 1945 года.",
    "Кенигсберг был освобождён в ходе операции 'Восточно-Прусская' в апреле 1945 года.",
    "1945 год стал годом освобождения Чехословакии, что завершило освобождение Восточной Европы.",
    "1-й Украинский фронт участвовал в освобождении Праги, завершившемся в мае 1945 года.",
    "Прага была освобождена в ходе операции 'Пражская' в мае 1945 года.",
    "1945 год стал годом освобождения Венгрии, что завершило освобождение Восточной Европы.",
    "2-й Украинский фронт участвовал в освобождении Будапешта, завершившемся в феврале 1945 года.",
    "Будапешт был освобождён в ходе операции 'Будапештская' в феврале 1945 года.",
    "1945 год стал годом освобождения Австрии, что завершило освобождение Центральной Европы.",
    "3-й Украинский фронт участвовал в освобождении Вены, завершившемся в апреле 1945 года.",
    "Вена была освобождена в ходе операции 'Венская' в апреле 1945 года.",
    "1945 год стал годом освобождения Германии, что завершило войну в Европе.",
    "1-й Белорусский фронт участвовал в освобождении Берлина, завершившемся в мае 1945 года."
];

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
    console.log("Функция summary() вызвана");

    let questions = document.querySelectorAll('.question p'); // Все вопросы
    let score = 0; // Количество верных ответов
    
    // Правильные ответы (ID правильных вариантов для каждого вопроса)
    const rightAnswers = [
        "a_1", // вопрос1 (22 июня 1941 года)
        "b_1", // вопрос2 (Ленинград)
        "c_1", // вопрос3 (Иосиф Сталин)
        "d_1", // вопрос4 (Сталинградская битва)
        "e_1", // вопрос5 (Операция "Багратион")
        "f_1", // вопрос6 (Георгий Жуков)
        "g_1", // вопрос7 (Москва)
        "h_1", // вопрос8 (Т-34)
        "i_1", // вопрос9 (Крымский фронт)
        "j_1", // вопрос10 (США, Великобритания)
        "k_1", // вопрос11 (1944 год)
        "l_1", // вопрос12 (Орел)
        "m_1", // вопрос13 (План "Барбаросса")
        "n_1", // вопрос14 (Центральный фронт)
        "o_1", // вопрос15 (Берлин)
        "p_1", // вопрос16 (9 мая 1945 года)
        "q_1", // вопрос17 (Сталинградский фронт)
        "r_1", // вопрос18 (Минск)
        "s_1", // вопрос19 (1941 год)
        "t_1", // вопрос20 (1-й Белорусский фронт)
        "u_1", // вопрос21 (Ленинград)
        "v_1", // вопрос22 (1944 год)
        "w_1", // вопрос23 (1-й Украинский фронт)
        "x_1", // вопрос24 (Сталинград)
        "y_1", // вопрос25 (1943 год)
        "z_1", // вопрос26 (1-й Белорусский фронт)
        "aa_1", // вопрос27 (Орел)
        "ab_1", // вопрос28 (1944 год)
        "ac_1", // вопрос29 (2-й Украинский фронт)
        "ad_1", // вопрос30 (Харьков)
        "ae_1", // вопрос31 (1944 год)
        "af_1", // вопрос32 (3-й Украинский фронт)
        "ag_1", // вопрос33 (Кишинев)
        "ah_1", // вопрос34 (1944 год)
        "ai_1", // вопрос35 (3-й Белорусский фронт)
        "aj_1", // вопрос36 (Варшава)
        "ak_1", // вопрос37 (1944 год)
        "al_1", // вопрос38 (1-й Белорусский фронт)
        "am_1", // вопрос39 (Кенигсберг)
        "an_1", // вопрос40 (1945 год)
        "ao_1", // вопрос41 (1-й Украинский фронт)
        "ap_1", // вопрос42 (Прага)
        "aq_1", // вопрос43 (1945 год)
        "ar_1", // вопрос44 (2-й Украинский фронт)
        "as_1", // вопрос45 (Будапешт)
        "at_1", // вопрос46 (1945 год)
        "au_1", // вопрос47 (3-й Украинский фронт)
        "av_1", // вопрос48 (Вена)
        "aw_1", // вопрос49 (1945 год)
        "ax_1"  // вопрос50 (1-й Белорусский фронт)
    ];

    // Проверка ответов пользователя и отображение объяснений
    questions.forEach((question, index) => {
        let chosenAnswer = document.querySelector(`input[name="вопрос${index + 1}"]:checked`);
        let explanationDiv = document.getElementById(`explanation${index + 1}`); // Контейнер для объяснения

        if (explanationDiv) {
            explanationDiv.textContent = explanations[index]; // Добавляем объяснение
            explanationDiv.style.display = 'block'; // Показываем объяснение
        }

        if (chosenAnswer) {
            if (chosenAnswer.id === rightAnswers[index]) {
                score++;
                chosenAnswer.parentElement.style.color = 'green'; // Подсветка правильного ответа пользователя
                
                // Найдем правильный ответ и подсветим его зеленым (на случай, если пользователь выбрал неправильный)
                const correctAnswer = document.getElementById(rightAnswers[index]);
                if (correctAnswer) {
                    correctAnswer.parentElement.style.color = 'green';
                }
            } else {
                chosenAnswer.parentElement.style.color = 'red'; // Подсветка неправильного ответа пользователя
                
                // Подсветим правильный ответ зеленым
                const correctAnswer = document.getElementById(rightAnswers[index]);
                if (correctAnswer) {
                    correctAnswer.parentElement.style.color = 'green';
                }
            }
        } else {
            question.style.color = 'red'; // Подсветка, если ответа нет
            
            // Подсветим правильный ответ зеленым
            const correctAnswer = document.getElementById(rightAnswers[index]);
            if (correctAnswer) {
                correctAnswer.parentElement.style.color = 'green';
            }
        }
    });

    // Вычисление оценки
    let grade;
    if (score >= 45) {
        grade = '5';
    } else if (score >= 35) {
        grade = '4';
    } else if (score >= 25) {
        grade = '3';
    } else {
        grade = '2';
    }

    // Отображение результата
    let resultModal = document.getElementById('resultModal');
    let resultText = document.getElementById('resultText');
    let closeModal = document.querySelector('.close');

    if (resultModal && resultText) {
        resultText.textContent = `Ваш результат: ${score} из ${questions.length}. Оценка: ${grade}`;
        resultModal.style.display = 'block';
    } else {
        console.error("Элементы модального окна не найдены!"); // Отладка
    }

    if (closeModal) {
        closeModal.onclick = function() {
            resultModal.style.display = 'none';
        };
    }

    window.onclick = function(event) {
        if (event.target === resultModal) {
            resultModal.style.display = 'none';
        }
    };
}


    // Проверка ответов пользователя и отображение объяснений
    questions.forEach((question, index) => {
        let chosenAnswer = document.querySelector(`input[name="вопрос${index + 1}"]:checked`);
        let explanationDiv = document.getElementById(`explanation${index + 1}`); // Контейнер для объяснения

        if (explanationDiv) {
            explanationDiv.textContent = explanations[index]; // Добавляем объяснение
            explanationDiv.style.display = 'block'; // Показываем объяснение
        }

        if (chosenAnswer) {
            if (chosenAnswer.id === rightAnswers[index]) {
                score++;
                chosenAnswer.parentElement.style.color = 'green'; // Подсветка правильного ответа пользователя
            } else {
                chosenAnswer.parentElement.style.color = 'red'; // Подсветка неправильного ответа пользователя
            }
        } else {
            question.style.color = 'red'; // Подсветка, если ответа нет
        }
    });

    // Вычисление оценки
    let grade;
    if (score >= 45) {
        grade = '5';
    } else if (score >= 35) {
        grade = '4';
    } else if (score >= 25) {
        grade = '3';
    } else {
        grade = '2';
    }

    // Отображение результата
    let resultModal = document.getElementById('resultModal');
    let resultText = document.getElementById('resultText');
    let closeModal = document.querySelector('.close');

    if (resultModal && resultText) {
        resultText.textContent = `Ваш результат: ${score} из ${questions.length}. Оценка: ${grade}`;
        resultModal.style.display = 'block';
    } else {
        console.error("Элементы модального окна не найдены!"); // Отладка
    }

    if (closeModal) {
        closeModal.onclick = function() {
            resultModal.style.display = 'none';
        };
    }

    window.onclick = function(event) {
        if (event.target === resultModal) {
            resultModal.style.display = 'none';
        }
    }
function updateWarTimer() {
    const endDate = new Date('1945-05-09T00:00:00'); // Дата окончания войны
    const now = new Date();

    // Разница в миллисекундах
    const diff = now - endDate;

    // Расчет лет, дней, часов
    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    const days = Math.floor(diff / (1000 * 60 * 60 * 24) % 365);
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);

    // Обновление DOM
    document.getElementById('years').textContent = years;
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
}

// Обновляем сразу при загрузке и каждую секунду
updateWarTimer();
setInterval(updateWarTimer, 1000);
const heroes = [
    {
        name: "Зоя Космодемьянская",
        link: "https://ru.wikipedia.org/wiki/Космодемьянская,_Зоя_Анатольевна"
    },
    {
        name: "Александр Матросов",
        link: "https://ru.wikipedia.org/wiki/Матросов,_Александр_Матвеевич"
    },
    {
        name: "Иван Панфилов",
        link: "https://ru.wikipedia.org/wiki/Панфилов,_Иван_Васильевич"
    },
    {
        name: "Николай Гастелло",
        link: "https://ru.wikipedia.org/wiki/Гастелло,_Николай_Францевич"
    },
    {
        name: "Людмила Павличенко",
        link: "https://ru.wikipedia.org/wiki/Павличенко,_Людмила_Михайловна"
    },
    {
        name: "Василий Зайцев",
        link: "https://ru.wikipedia.org/wiki/Зайцев,_Василий_Григорьевич"
    },
    {
        name: "Алексей Маресьев",
        link: "https://ru.wikipedia.org/wiki/Маресьев,_Алексей_Петрович"
    },
    {
        name: "Константин Рокоссовский",
        link: "https://ru.wikipedia.org/wiki/Рокоссовский,_Константин_Константинович"
    },
    {
        name: "Георгий Жуков",
        link: "https://ru.wikipedia.org/wiki/Жуков,_Георгий_Константинович"
    },
    {
        name: "Иван Черняховский",
        link: "https://ru.wikipedia.org/wiki/Черняховский,_Иван_Данилович"
    },
    {
        name: "Мелитон Кантария",
        link: "https://ru.wikipedia.org/wiki/Кантария,_Мелитон_Варламович"
    },
    {
        name: "Михаил Егоров",
        link: "https://ru.wikipedia.org/wiki/Егоров,_Михаил_Алексеевич_(знаменосец)"
    },
    {
        name: "Алия Молдагулова",
        link: "https://ru.wikipedia.org/wiki/Молдагулова,_Алия_Нурмухамбетовна"
    },
    {
        name: "Маншук Маметова",
        link: "https://ru.wikipedia.org/wiki/Маметова,_Маншук"
    },
    {
        name: "Вера Хоружая",
        link: "https://ru.wikipedia.org/wiki/Хоружая,_Вера_Захаровна"
    },
    {
        name: "Виктор Талалихин",
        link: "https://ru.wikipedia.org/wiki/Талалихин,_Виктор_Васильевич"
    },
    {
        name: "Рихард Зорге",
        link: "https://ru.wikipedia.org/wiki/Зорге,_Рихард"
    },
    {
        name: "Василий Клочков",
        link: "https://ru.wikipedia.org/wiki/Клочков,_Василий_Георгиевич"
    },
    {
        name: "Мария Октябрьская",
        link: "https://ru.wikipedia.org/wiki/Октябрьская,_Мария_Васильевна"
    },
    {
        name: "Пётр Гаврилов",
        link: "https://ru.wikipedia.org/wiki/Гаврилов,_Пётр_Михайлович"
    },
    {
        name: "Иван Кожедуб",
        link: "https://ru.wikipedia.org/wiki/Кожедуб,_Иван_Никитович"
    },
    {
        name: "Александр Покрышкин",
        link: "https://ru.wikipedia.org/wiki/Покрышкин,_Александр_Иванович"
    },
    {
        name: "Валентина Гризодубова",
        link: "https://ru.wikipedia.org/wiki/Гризодубова,_Валентина_Степановна"
    },
    {
        name: "Дмитрий Лавриненко",
        link: "https://ru.wikipedia.org/wiki/Лавриненко,_Дмитрий_Фёдорович"
    },
    {
        name: "Зиновий Колобанов",
        link: "https://ru.wikipedia.org/wiki/Колобанов,_Зиновий_Григорьевич"
    },
    {
        name: "Александр Герман",
        link: "https://ru.wikipedia.org/wiki/Герман,_Александр_Викторович"
    },
    {
        name: "Николай Кузнецов",
        link: "https://ru.wikipedia.org/wiki/Кузнецов,_Николай_Иванович_(разведчик)"
    },
    {
        name: "Павел Гудзь",
        link: "https://ru.wikipedia.org/wiki/Гудзь,_Павел_Данилович"
    },
    {
        name: "Сидор Ковпак",
        link: "https://ru.wikipedia.org/wiki/Ковпак,_Сидор_Артемьевич"
    },
    {
        name: "Александр Печерский",
        link: "https://ru.wikipedia.org/wiki/Печерский,_Александр_Аронович"
    },
    {
        name: "Олег Кошевой",
        link: "https://ru.wikipedia.org/wiki/Кошевой,_Олег_Васильевич"
    },
    {
        name: "Ульяна Громова",
        link: "https://ru.wikipedia.org/wiki/Громова,_Ульяна_Матвеевна"
    },
    {
        name: "Любовь Шевцова",
        link: "https://ru.wikipedia.org/wiki/Шевцова,_Любовь_Григорьевна"
    },
    {
        name: "Сергей Тюленин",
        link: "https://ru.wikipedia.org/wiki/Тюленин,_Сергей_Гаврилович"
    },
    {
        name: "Иван Туркенич",
        link: "https://ru.wikipedia.org/wiki/Туркенич,_Иван_Васильевич"
    },
    {
        name: "Василий Коробков",
        link: "https://ru.wikipedia.org/wiki/Коробков,_Василий_Федосеевич"
    },
    {
        name: "Владимир Дегтярев",
        link: "https://ru.wikipedia.org/wiki/Дегтярёв,_Владимир_Иванович"
    },
    {
        name: "Екатерина Зеленко",
        link: "https://ru.wikipedia.org/wiki/Зеленко,_Екатерина_Ивановна"
    },
    {
        name: "Лидия Литвяк",
        link: "https://ru.wikipedia.org/wiki/Литвяк,_Лидия_Владимировна"
    },
    {
        name: "Мария Байда",
        link: "https://ru.wikipedia.org/wiki/Байда,_Мария_Карповна"
    },
    {
        name: "Анна Егорова",
        link: "https://ru.wikipedia.org/wiki/Егорова,_Анна_Александровна"
    },
    {
        name: "Николай Сиротинин",
        link: "https://ru.wikipedia.org/wiki/Сиротинин,_Николай_Владимирович"
    },
    {
        name: "Пётр Ильичёв",
        link: "https://ru.wikipedia.org/wiki/Ильичёв,_Пётр_Иванович"
    },
    {
        name: "Григорий Бахчиванджи",
        link: "https://ru.wikipedia.org/wiki/Бахчиванджи,_Григорий_Яковлевич"
    },
    {
        name: "Михаил Девятаев",
        link: "https://ru.wikipedia.org/wiki/Девятаев,_Михаил_Петрович"
    },
    {
        name: "Василий Маргелов",
        link: "https://ru.wikipedia.org/wiki/Маргелов,_Василий_Филиппович"
    },
    {
        name: "Александр Мамкин",
        link: "https://ru.wikipedia.org/wiki/Мамкин,_Александр_Петрович"
    },
    {
        name: "Яков Павлов",
        link: "https://ru.wikipedia.org/wiki/Павлов,_Яков_Федотович"
    },
    {
        name: "Иван Флёров",
        link: "https://ru.wikipedia.org/wiki/Флёров,_Иван_Андреевич"
    },
    {
        name: "Владимир Микоян",
        link: "https://ru.wikipedia.org/wiki/Микоян,_Владимир_Анастасович"
    },
    {
        name: "Николай Кузнецов (разведчик)",
        link: "https://ru.wikipedia.org/wiki/Кузнецов,_Николай_Иванович_(разведчик)"
    },
    {
        name: "Александр Шумилов",
        link: "https://ru.wikipedia.org/wiki/Шумилов,_Александр_Иванович_(генерал)"
    },
    {
        name: "Василий Ардашев",
        link: "https://ru.wikipedia.org/wiki/Ардашев,_Василий_Иванович"
    },
    {
        name: "Иван Баграмян",
        link: "https://ru.wikipedia.org/wiki/Баграмян,_Иван_Христофорович"
    },
    {
        name: "Андрей Власов",
        link: "https://ru.wikipedia.org/wiki/Власов,_Андрей_Андреевич"
    },
    {
        name: "Семён Будённый",
        link: "https://ru.wikipedia.org/wiki/Будённый,_Семён_Михайлович"
    },
    {
        name: "Климент Ворошилов",
        link: "https://ru.wikipedia.org/wiki/Ворошилов,_Климент_Ефремович"
    },
    {
        name: "Михаил Катуков",
        link: "https://ru.wikipedia.org/wiki/Катуков,_Михаил_Ефимович"
    },
    {
        name: "Родион Малиновский",
        link: "https://ru.wikipedia.org/wiki/Малиновский,_Родион_Яковлевич"
    },
    {
        name: "Кирилл Мерецков",
        link: "https://ru.wikipedia.org/wiki/Мерецков,_Кирилл_Афанасьевич"
    },
    {
        name: "Василий Чуйков",
        link: "https://ru.wikipedia.org/wiki/Чуйков,_Василий_Иванович"
    },
    {
        name: "Александр Василевский",
        link: "https://ru.wikipedia.org/wiki/Василевский,_Александр_Михайлович"
    },
    {
        name: "Николай Ватутин",
        link: "https://ru.wikipedia.org/wiki/Ватутин,_Николай_Фёдорович"
    },
    {
        name: "Фёдор Толбухин",
        link: "https://ru.wikipedia.org/wiki/Толбухин,_Фёдор_Иванович"
    },
    {
        name: "Леонид Говоров",
        link: "https://ru.wikipedia.org/wiki/Говоров,_Леонид_Александрович"
    },
    {
        name: "Иван Конев",
        link: "https://ru.wikipedia.org/wiki/Конев,_Иван_Степанович"
    },
    {
        name: "Андрей Ерёменко",
        link: "https://ru.wikipedia.org/wiki/Ерёменко,_Андрей_Иванович"
    },
    {
        name: "Павел Ротмистров",
        link: "https://ru.wikipedia.org/wiki/Ротмистров,_Павел_Алексеевич"
    },
    {
        name: "Исса Плиев",
        link: "https://ru.wikipedia.org/wiki/Плиев,_Исса_Александрович"
    },
    {
        name: "Сергей Горшков",
        link: "https://ru.wikipedia.org/wiki/Горшков,_Сергей_Георгиевич"
    },
    {
        name: "Арсений Ворожейкин",
        link: "https://ru.wikipedia.org/wiki/Ворожейкин,_Арсений_Васильевич"
    },
    {
        name: "Пётр Шурухин",
        link: "https://ru.wikipedia.org/wiki/Шурухин,_Пётр_Иванович"
    },
    {
        name: "Николай Крылов",
        link: "https://ru.wikipedia.org/wiki/Крылов,_Николай_Иванович"
    },
    {
        name: "Иван Якубовский",
        link: "https://ru.wikipedia.org/wiki/Якубовский,_Иван_Игнатьевич"
    },
    {
        name: "Павел Батицкий",
        link: "https://ru.wikipedia.org/wiki/Батицкий,_Павел_Фёдорович"
    },
    {
        name: "Сергей Ахромеев",
        link: "https://ru.wikipedia.org/wiki/Ахромеев,_Сергей_Фёдорович"
    },
    {
        name: "Дмитрий Устинов",
        link: "https://ru.wikipedia.org/wiki/Устинов,_Дмитрий_Фёдорович"
    },
    {
        name: "Семён Тимошенко",
        link: "https://ru.wikipedia.org/wiki/Тимошенко,_Семён_Константинович"
    },
    {
        name: "Борис Шапошников",
        link: "https://ru.wikipedia.org/wiki/Шапошников,_Борис_Михайлович"
    },
    {
        name: "Алексей Антонов",
        link: "https://ru.wikipedia.org/wiki/Антонов,_Алексей_Иннокентьевич"
    },
    {
        name: "Михаил Сомов",
        link: "https://ru.wikipedia.org/wiki/Сомов,_Михаил_Михайлович"
    },
    {
        name: "Александр Новиков",
        link: "https://ru.wikipedia.org/wiki/Новиков,_Александр_Александрович_(маршал)"
    },
    {
        name: "Фёдор Шаманов",
        link: "https://ru.wikipedia.org/wiki/Шаманов,_Фёдор_Андреевич"
    },
    {
        name: "Иван Исаков",
        link: "https://ru.wikipedia.org/wiki/Исаков,_Иван_Степанович"
    },
    {
        name: "Николай Герасимов",
        link: "https://ru.wikipedia.org/wiki/Герасимов,_Николай_Семёнович"
    },
    {
        name: "Михаил Наумов",
        link: "https://ru.wikipedia.org/wiki/Наумов,_Михаил_Иванович"
    },
    {
        name: "Сергей Грицевец",
        link: "https://ru.wikipedia.org/wiki/Грицевец,_Сергей_Иванович"
    },
    {
        name: "Григорий Кравченко",
        link: "https://ru.wikipedia.org/wiki/Кравченко,_Григорий_Пантелеевич"
    },
    {
        name: "Сергей Денисов",
        link: "https://ru.wikipedia.org/wiki/Денисов,_Сергей_Прокофьевич"
    },
    {
        name: "Павел Рычагов",
        link: "https://ru.wikipedia.org/wiki/Рычагов,_Павел_Васильевич"
    },
    {
        name: "Яков Смушкевич",
        link: "https://ru.wikipedia.org/wiki/Смушкевич,_Яков_Владимирович"
    },
    {
        name: "Фёдор Полетаев",
        link: "https://ru.wikipedia.org/wiki/Полетаев,_Фёдор_Андрианович"
    },
    {
        name: "Пётр Вершигора",
        link: "https://ru.wikipedia.org/wiki/Вершигора,_Пётр_Петрович"
    },
    {
        name: "Александр Чекалин",
        link: "https://ru.wikipedia.org/wiki/Чекалин,_Александр_Павлович"
    },
    {
        name: "Владимир Мигуля",
        link: "https://ru.wikipedia.org/wiki/Мигуля,_Владимир_Георгиевич"
    },
    {
        name: "Григорий Чухрай",
        link: "https://ru.wikipedia.org/wiki/Чухрай,_Григорий_Наумович"
    },
    {
        name: "Сергей Бондарчук",
        link: "https://ru.wikipedia.org/wiki/Бондарчук,_Сергей_Фёдорович"
    },
    {
        name: "Константин Симонов",
        link: "https://ru.wikipedia.org/wiki/Симонов,_Константин_Михайлович"
    },
    {
        name: "Александр Твардовский",
        link: "https://ru.wikipedia.org/wiki/Твардовский,_Александр_Трифонович"
    },
    {
        name: "Михаил Шолохов",
        link: "https://ru.wikipedia.org/wiki/Шолохов,_Михаил_Александрович"
    },
    {
        name: "Василий Лебедев-Кумач",
        link: "https://ru.wikipedia.org/wiki/Лебедев-Кумач,_Василий_Иванович"
    },
    {
        name: "Александр Довженко",
        link: "https://ru.wikipedia.org/wiki/Довженко,_Александр_Петрович"
    },
    {
        name: "Сергей Эйзенштейн",
        link: "https://ru.wikipedia.org/wiki/Эйзенштейн,_Сергей_Михайлович"
    },
    {
        name: "Михаил Ромм",
        link: "https://ru.wikipedia.org/wiki/Ромм,_Михаил_Ильич"
    },
    {
        name: "Иван Пырьев",
        link: "https://ru.wikipedia.org/wiki/Пырьев,_Иван_Александрович"
    },
    {
        name: "Григорий Александров",
        link: "https://ru.wikipedia.org/wiki/Александров,_Григорий_Васильевич"
    }
];
function showRandomHero() {
    if (heroes.length === 0) {
        console.error('Массив heroes пуст!');
        return;
    }
    
    const randomIndex = Math.floor(Math.random() * heroes.length);
    const hero = heroes[randomIndex];
    
    const nameElement = document.getElementById('hero-name');
    const linkElement = document.getElementById('hero-link');
    
    if (!nameElement || !linkElement) {
        console.error('Элементы hero-name или hero-link не найдены в DOM!');
        return;
    }
    
    nameElement.textContent = hero.name;
    linkElement.href = hero.link;
}
showRandomHero();