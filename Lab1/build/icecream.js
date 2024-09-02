"use strict";
// Функція для отримання числа від користувача з перевіркою на валідність
function getNumberInput(promptText) {
    let input;
    let numberInput;
    do {
        input = prompt(promptText);
        numberInput = input ? parseFloat(input) : NaN;
    } while (isNaN(numberInput) || numberInput < 0);
    return numberInput;
}
// Функція для розрахунку вартості морозива
function calculateIceCreamCost() {
    // Запитуємо у користувача вибір розміру стаканчика
    const size = prompt("Виберіть розмір стаканчика (маленький/великий):");
    let cost = 0;
    if (size === "маленький") {
        cost += 10;
    }
    else if (size === "великий") {
        cost += 25;
    }
    else {
        alert("Невірний розмір стаканчика. Будь ласка, введіть 'маленький' або 'великий'.");
        return 0;
    }
    // Запитуємо у користувача вибір начинок
    const toppings = prompt("Виберіть начинку (шоколад, карамель, ягоди). Введіть через кому, якщо кілька:");
    if (toppings) {
        const toppingArray = toppings.split(",").map(t => t.trim().toLowerCase());
        for (const topping of toppingArray) {
            switch (topping) {
                case "шоколад":
                    cost += 5;
                    break;
                case "карамель":
                    cost += 6;
                    break;
                case "ягоди":
                    cost += 10;
                    break;
                default:
                    alert(`Начинка "${topping}" не підтримується.`);
            }
        }
    }
    // Запитуємо у користувача, чи хоче він маршмелоу
    const addMarshmallow = prompt("Чи хочете ви додати маршмелоу? (так/ні):");
    if (addMarshmallow === "так") {
        cost += 5;
    }
    return cost;
}
// Основна функція для запуску розрахунку
function main() {
    const totalCost = calculateIceCreamCost();
    alert(`Загальна вартість морозива: ${totalCost} грн`);
}
main();
