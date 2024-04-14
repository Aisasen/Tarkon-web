// Хардкодированный список товаров (замените его на данные из вашей базы, когда они будут доступны)
    const hardcodedProducts = [
      { name: "Товар A", price: 10.99, available: true, image: "css/img/divan.png" },
      { name: "Товар B", price: 24.99, available: true, image: "css/img/divan.png" },
      { name: "Товар C", price: 15.49, available: true, image: "css/img/divan.png" },
      { name: "Товар D", price: 10.99, available: true, image: "css/img/divan.png" },
      { name: "Товар E", price: 24.99, available: false, image: "css/img/divan.png" },
      { name: "Товар F", price: 15.49, available: true, image: "css/img/divan.png" },
      { name: "Товар G", price: 15.49, available: true, image: "css/img/divan.png" },
      { name: "Товар N", price: 15.49, available: true, image: "css/img/divan.png" },
      { name: "Товар M", price: 15.49, available: false, image: "css/img/divan.png" },
      { name: "Товар U", price: 15.49, available: true, image: "css/img/divan.png" },
      { name: "Товар I", price: 15.49, available: false, image: "css/img/divan.png" },
      { name: "Товар P", price: 15.49, available: true, image: "css/img/divan.png" },
      { name: "Товар H", price: 14.39, available: false, image: "css/img/divan.png" },
    ];

const productUl = document.getElementById('product-ul');
const sortSelect = document.getElementById('sort-select');
const availabilityCheckbox = document.getElementById('availability-checkbox');

const itemsPerPage = 8;
let currentPage = 1;
let filteredProducts = [...hardcodedProducts]; // Сначала показываем все товары
let currentFilters = { sortOption: 'price-asc', showAvailableOnly: false };

function renderProducts(products, page) {
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const paginatedProducts = products.slice(startIndex, endIndex);

  productUl.innerHTML = ''; // Очищаем список перед обновлением

    paginatedProducts.forEach(product => {
    // Создаем элемент списка для каждого товара
    const li = document.createElement('li');
    const availability = product.available ? 'В наличии' : 'Нет в наличии';
    li.textContent = `${product.name} - $${product.price} - ${availability}`;
    const img = document.createElement('img');

    // Применяем класс "product-image" к изображению
    img.classList.add('product-image');

    img.src = product.image;
    img.width = 100;
    img.height = 100;

    img.addEventListener('click', () => {
      openProductModal(product);
    });

    li.appendChild(img);

    if (product.available) {
      // Создаем кнопку "Приобрести" только для доступных товаров
      const button = document.createElement('button');
      button.textContent = 'Приобрести'; // Устанавливаем текст кнопки
      li.appendChild(button); // Добавляем кнопку в элемент списка

      // Добавляем обработчик события для кнопки
      button.addEventListener('click', () => {
        const modal = document.getElementById('confirmationModal');
        modal.style.display = 'block';

        const confirmButton = document.getElementById('confirmButton');
        confirmButton.addEventListener('click', () => {
          // Здесь можно добавить код для обработки покупки товара
          // Например, отправить запрос на сервер или обновить состояние корзины
          modal.style.display = 'none';
        });

        const closeButton = document.querySelector('.closeConf');
        closeButton.addEventListener('click', () => {
          modal.style.display = 'none';
        });
      });
    }

    productUl.appendChild(li);
  });
  renderPagination(products.length);
}

  function applyFilters() {
  currentFilters.sortOption = sortSelect.value;
  currentFilters.showAvailableOnly = availabilityCheckbox.checked;

  // Обновляем отфильтрованные товары
  filteredProducts = [...hardcodedProducts]; // Сбрасываем фильтры

  if (currentFilters.showAvailableOnly) {
    filteredProducts = filteredProducts.filter(product => product.available);
  }

  if (currentFilters.sortOption === 'price-asc') {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (currentFilters.sortOption === 'price-desc') {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (currentFilters.sortOption === 'name-asc') {
    filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
  } else if (currentFilters.sortOption === 'name-desc') {
    filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
  }

  renderProducts(filteredProducts, currentPage);
}

function renderPagination(totalItems) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const paginationDiv = document.getElementById('pagination');
  paginationDiv.innerHTML = '';

  for (let i = 1; i <= totalPages; i++) {
    const pageLink = document.createElement('a');
    pageLink.href = '#';
    pageLink.textContent = i;

    pageLink.addEventListener('click', () => {
      currentPage = i;
      updatePage(i);
    });

    paginationDiv.appendChild(pageLink);
  }
}

function updatePage(newPage) {
  currentPage = newPage;
  renderProducts(filteredProducts, currentPage);
}

function openProductModal(product) {
  const modal = document.getElementById('productModal');
  const modalImage = document.getElementById('modalImage');
  const modalProductName = document.getElementById('modalProductName');
  const modalProductPrice = document.getElementById('modalProductPrice');
  const modalProductAvailability = document.getElementById('modalProductAvailability');
  const modalProductDescription = document.getElementById('modalProductDescription');

  modalImage.src = product.image;

  modalProductName.textContent = product.name;
  modalProductPrice.textContent = `$${product.price}`;
  modalProductAvailability.textContent = product.available ? 'В наличии' : 'Нет в наличии';
  // Здесь вы можете добавить описание товара из базы данных
  modalProductDescription.textContent = 'Расширенное описание товара будет здесь.';

  modal.style.display = 'block';

  const closeModal = document.getElementById('closeModalProduct');
  closeModal.addEventListener('click', () => {
    closeModalModal();
  });

  // Обработчик события keydown для закрытия модального окна при нажатии клавиши Esc
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeModalModal();
    }
  });

  // Функция для закрытия модального окна
  function closeModalModal() {
    modal.style.display = 'none';
    // Удаляем обработчик события keydown после закрытия модального окна
    document.removeEventListener('keydown', closeModalModal);
  }
}

renderProducts(filteredProducts, currentPage);

sortSelect.addEventListener('change', applyFilters);
availabilityCheckbox.addEventListener('change', applyFilters);