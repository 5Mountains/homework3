window.addEventListener("DOMContentLoaded", function() {
  //Получаем информацию для работы
  let products = document.querySelectorAll(".product"),
      buttons = document.getElementsByTagName("button"),
      open = document.getElementsByClassName("open")[0];
  //Функция для создания корзины
  function createCart() {
    //Создали элементы которые будут в корзине
    let cart = document.createElement("div"),
        field = document.createElement("div"),
        heading = document.createElement("h2"),
        close = document.createElement("button");
    //Добавили класыэлементам
    cart.classList.add("cart");
    field.classList.add("cart-field");
    close.classList.add("close");
    //Добавили текст эелементам
    close.textContent = "Закрыть";
    heading.textContent = "В нашей корзине:";
    //Вставили элементы на страницу
    document.body.appendChild(cart);
    cart.appendChild(heading);
    cart.appendChild(field);
    cart.appendChild(close);
  }

  createCart();

  let field = document.querySelector(".cart-field"),
      cart = document.querySelector(".cart"),
      close = document.querySelector(".close");
  //Вешаем обработчик событий click накаждую из кнопок
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
      //Создали копию карточки с товаром
      let item = products[i].cloneNode(true),
          btn = (item.querySelector("button").textContent = "Удалить товар!");

      field.appendChild(item);
      products[i].remove();

    //   function del() {
    //       field.removeChild(item);
    //   }
      
    //   btn.addEventListener('click', del);

    });
  }
  //Открыть скрытую корзину
  function openCart() {
    cart.style.display = "block";
  }
  //Скрыть открытую корзину
  function closeCart() {
    cart.style.display = "none";
  }
  //Вешаем обработчик событий click на закрытие и открытие корзины
  open.addEventListener("click", openCart);
  close.addEventListener("click", closeCart);
});
