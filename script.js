let tg = window.Telegram.WebApp;
tg.expand(); // Разворачивает WebApp

document.getElementById("checkout-btn").addEventListener("click", function() {
    tg.sendData(JSON.stringify({ action: "checkout" })); // Отправляем данные в бота
    tg.close(); // Закрываем WebApp
});
