  // Функция для отображения окна авторизации
  function showLoginModal() 
  {
    // Здесь вы можете добавить код для создания и стилизации модального окна авторизации
    // Например, создайте элемент div для модального окна и добавьте его в DOM
    var modal = document.createElement("div");
    modal.classList.add("modal"); // Добавьте класс для стилизации модального окна
    modal.innerHTML = `
      <div class="modal-content">
        <!-- Здесь добавьте содержимое модального окна, такое как форма для ввода логина и пароля -->
        <form>
          <label for="username">Имя пользователя:</label>
          <input type="text" id="username" name="username">
          <br><br>
          <label for="password">Пароль:</label>
          <input type="password" id="password" name="password">
          <br><br>
          <button type="button" onclick="closeLoginModal()">Закрыть</button>
          <!-- Добавьте обработчик для отправки формы -->
          <button type="button" onclick="submitLoginForm()">Войти</button>
        </form>
      </div>
    `;
    document.body.appendChild(modal); // Добавьте модальное окно в DOM
    return false; // Предотвратите действие по умолчанию (например, отправку формы)
  }

  // Функция для закрытия модального окна
  function closeLoginModal() {
    var modal = document.querySelector(".modal");
    if (modal) {
      modal.remove(); // Удалите модальное окно из DOM
    }
  }

  // Функция для отправки формы авторизации (вы можете добавить обработку AJAX запроса здесь)
  function submitLoginForm() {
    // Здесь можно добавить код для отправки данных формы на сервер
    // После успешной авторизации вы можете выполнить дополнительные действия, например, перенаправление пользователя
    alert("Вы успешно авторизовались!");
    closeLoginModal(); // Закрыть модальное окно после успешной авторизации
    return false; // Предотвратите действие по умолчанию (например, отправку формы)
  }

  // Пример функции для получения событий из базы данных
function fetchEventsFromDatabase() {
    // Ваш код для получения данных из базы данных
    // В этом примере создадим массив событий для демонстрации
    const events = [
        { title: 'Событие', description: 'Описание события' },,
    ];

    return events;
}

// Функция для отображения событий в блоке events-container
function displayEvents() {
    const eventsContainer = document.querySelector('.events-container');
    const events = fetchEventsFromDatabase();

    // Создаем элементы для каждого события и добавляем их в контейнер
    events.forEach(event => {
        const eventElement = document.createElement('div');
        eventElement.classList.add('event');
        eventElement.innerHTML = `
            <h2 style="text-align: center;">${event.title}</h2>
            <p>${event.description}</p>
        `;
        eventsContainer.appendChild(eventElement);
    });
}

// Вызываем функцию для отображения событий при загрузке страницы
window.addEventListener('load', displayEvents);

function fetchNextGameInfo() {
  // Simulated data from the database
  const nextGame = {
    date: "15 Октября, 2023",
    location: "Плато"
  };

  return nextGame;
}

 // Fetch next game information
  const nextGameInfo = fetchNextGameInfo();

  // Populate the HTML elements with the retrieved data
  document.getElementById("nextGameDate").textContent = nextGameInfo.date;
  document.getElementById("nextGameLocation").textContent = nextGameInfo.location;
  
  function getSectionFromURL() {
            const urlParams = new URLSearchParams(window.location.search);
            return urlParams.get('section');
        }

        // Добавьте этот код для отображения секции на основе параметров URL
        document.addEventListener("DOMContentLoaded", function () {
            const sectionFromURL = getSectionFromURL();

            if (sectionFromURL) {
                showSection(sectionFromURL);
            } else {
                // Если параметр section не указан, по умолчанию отобразите "Статистика"
                showSection('statistics');
            }
        });
