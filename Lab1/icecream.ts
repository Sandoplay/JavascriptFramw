function calculateIceCreamCost(): number {
    const size = prompt("Виберіть розмір стаканчика (маленький/великий):");
    
    let cost = 0;

    if (size === "маленький") {
        cost += 10;
    } else if (size === "великий") {
        cost += 25;
    } else {
        alert("Невірний розмір стаканчика. Будь ласка, введіть 'маленький' або 'великий'.");
        return 0;
    }

    const toppings: string | null = prompt("Виберіть начинку (шоколад, карамель, ягоди). Введіть через кому, якщо кілька:");

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

    const addMarshmallow = prompt("Чи хочете ви додати маршмелоу? (так/ні):");

    if (addMarshmallow === "так") {
        cost += 5;
    }

    return cost;
}

function main() {
    const totalCost = calculateIceCreamCost();
    alert(`Загальна вартість морозива: ${totalCost} грн`);
}

main();
