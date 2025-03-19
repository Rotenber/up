let tg = window.Telegram.WebApp;
tg.expand(); // Разворачивает WebApp

async function loadCart() {
    // Отправляем команду боту, чтобы получить список товаров
    tg.sendData("/get_cart");

    // Ожидаем ответ от бота
    tg.onEvent("message", function (msg) {
        if (msg.text.startsWith("cart_data:")) {
            let cartData = JSON.parse(msg.text.replace("cart_data:", "")); // Распаковываем JSON
            updateCart(cartData);
        }
    });
}

// Функция для обновления корзины в WebApp
function updateCart(items) {
    let cartList = document.getElementById("cart-items");
    cartList.innerHTML = ""; // Очищаем корзину перед обновлением

    if (items.length === 0) {
        cartList.innerHTML = "<p>Кошик порожній 😢</p>";
        return;
    }

    items.forEach(item => {
        let li = document.createElement("li");
        li.innerHTML = `<b>${item.product_name}</b> (${item.size}) - ${item.price} грн x ${item.quantity}`;
        cartList.appendChild(li);
    });
}

// Загружаем корзину при запуске WebApp
loadCart();
