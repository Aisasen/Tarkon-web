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

// Добавьте этот код для определения текущей секции из параметров URL
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

        function showSection(sectionId) {
            const dynamicSection = document.getElementById('dynamicSection');
            dynamicSection.innerHTML = ''; // Очищаем содержимое секции

            if (sectionId === 'statistics') {
                dynamicSection.innerHTML = `
                    <h2>Статистика</h2>
                    <div class="stat-item">
                        <span>Уровень:</span>
                        <span>10</span>
                    </div>
                    <div class="stat-item">
                        <span>Опыт:</span>
                        <span>5000 / 10000</span>
                    </div>
                    <div class="stat-item">
                        <span>Баланс:</span>
                        <span>3000$</span>
                    </div>
                    <div class="stat-item">
                        <span>Убийств:</span>
                        <span>8</span>
                    </div>
                `;
            } else if (sectionId === 'inventory') {
                dynamicSection.innerHTML = `
                    <h2>Инвентарь</h2>
                    <ul>
                        <li>AKM</li>
                        <li>SLICK</li>
                        <li>VULKAN</li>
                    </ul>
                `;
            } else if (sectionId === 'quests') {
                dynamicSection.innerHTML = `
                    <h2>Квесты</h2>
                    <ul>
                        <li>
                            <h3>Задание 1</h3>
                            <p>Описание задания 1.</p>
                        </li>
                        <li>
                            <h3>Задание 2</h3>
                            <p>Описание задания 2.</p>
                        </li>
                    </ul>
                `;
            } else if (sectionId === 'cart') {
                dynamicSection.innerHTML = `
                    <h2>Корзина</h2>
                    <ul>
                        <li><button class="MinMaxButton">-</button>Товар СУММА <button class="MinMaxButton">+</button></li>
                        <li><button class="MinMaxButton">-</button>Товар СУММА <button class="MinMaxButton">+</button></li>
                        <li><button class="MinMaxButton">-</button>Товар СУММА <button class="MinMaxButton">+</button></li>
                        <button class="login-button">Приобрести</button><br>
                        <li>N Товаров на общую сумму M</li>
                    </ul>
                `;
            }
        }
        // Функция для редактирования имени пользователя
function editName() {
    const newName = document.getElementById('newName').value;

    // Отправить newName на сервер и обработать его там
    // Пример обращения к серверу с использованием fetch API:
    fetch('/updateName', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ newName: newName })
    })
    .then(response => {
        if (response.status === 200) {
            alert('Имя пользователя успешно обновлено');
        } else {
            alert('Произошла ошибка при обновлении имени пользователя');
        }
    });
}

// Функция для открытия модального окна
function openEditNameModal() {
    const modalRenameUserName = document.getElementById('editNameModal');
    modalRenameUserName.style.display = 'block';
}

// Функция для закрытия модального окна
function closeEditNameModal() {
    const modalRenameUserName = document.getElementById('editNameModal');
    modalRenameUserName.style.display = 'none';
}
function editPass() {
    const newName = document.getElementById('newPass').value;

    fetch('/updatePass', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ newPass: newPass })
    })
    .then(response => {
        if (response.status === 200) {
            alert('Пароль обновлён.');
        } else {
            alert('Произошла ошибка при обновлении пароля.');
        }
    });
}

// Функция для открытия модального окна
function openEditPassModal() {
    const modalRenamePass = document.getElementById('editPassModal');
    modalRenamePass.style.display = 'block';
}

// Функция для закрытия модального окна
function closeEditPassModal() {
    const modalRenameUserName = document.getElementById('editPassModal');
    modalRenameUserName.style.display = 'none';
}
function editEmail() {
    const newName = document.getElementById('newEmail').value;

    fetch('/updateEmail', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ newEmail: newEmail })
    })
    .then(response => {
        if (response.status === 200) {
            alert('Почта обновлена.');
        } else {
            alert('Произошла ошибка при обновлении почты.');
        }
    });
}

// Функция для открытия модального окна
function openEditEmailModal() {
    const modalRenameEmail = document.getElementById('editEmailModal');
    modalRenameEmail.style.display = 'block';
}

// Функция для закрытия модального окна
function closeEditEmailModal() {
    const modalRenameEmail = document.getElementById('editEmailModal');
    modalRenameEmail.style.display = 'none';
}