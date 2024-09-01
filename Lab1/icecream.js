// Функція для отримання числа від користувача з перевіркою на валідність
function getNumberInput(promptText) {
    var input;
    var numberInput;
    do {
        input = prompt(promptText);
        numberInput = input ? parseFloat(input) : NaN;
    } while (isNaN(numberInput) || numberInput < 0);
    return numberInput;
}
// Функція для розрахунку вартості морозива
function calculateIceCreamCost() {
    // Запитуємо у користувача вибір розміру стаканчика
    var size = prompt("Виберіть розмір стаканчика (маленький/великий):");
    var cost = 0;
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
    var toppings = prompt("Виберіть начинку (шоколад, карамель, ягоди). Введіть через кому, якщо кілька:");
    if (toppings) {
        var toppingArray = toppings.split(",").map(function (t) { return t.trim().toLowerCase(); });
        for (var _i = 0, toppingArray_1 = toppingArray; _i < toppingArray_1.length; _i++) {
            var topping = toppingArray_1[_i];
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
                    alert("\u041D\u0430\u0447\u0438\u043D\u043A\u0430 \"".concat(topping, "\" \u043D\u0435 \u043F\u0456\u0434\u0442\u0440\u0438\u043C\u0443\u0454\u0442\u044C\u0441\u044F."));
            }
        }
    }
    // Запитуємо у користувача, чи хоче він маршмелоу
    var addMarshmallow = prompt("Чи хочете ви додати маршмелоу? (так/ні):");
    if (addMarshmallow === "так") {
        cost += 5;
    }
    return cost;
}
// Основна функція для запуску розрахунку
function main() {
    var totalCost = calculateIceCreamCost();
    alert("\u0417\u0430\u0433\u0430\u043B\u044C\u043D\u0430 \u0432\u0430\u0440\u0442\u0456\u0441\u0442\u044C \u043C\u043E\u0440\u043E\u0437\u0438\u0432\u0430: ".concat(totalCost, " \u0433\u0440\u043D"));
}
main();
