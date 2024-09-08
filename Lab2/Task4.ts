abstract class Employee {
    constructor(
        protected name: string,
        protected age: number,
        protected salary: number
    ) {}

    abstract getAnnualBonus(): number;
}

interface Payable {
    pay(): void;
}

class Developer extends Employee implements Payable {
    constructor(name: string, age: number, salary: number, private programmingLanguage: string) {
        super(name, age, salary);
    }

    getAnnualBonus(): number {
        return this.salary * 0.1;
    }

    pay(): void {
        console.log(`Виплачено зарплату розробнику ${this.name}: ${this.salary}`);
    }
}

class Manager extends Employee implements Payable {
    constructor(name: string, age: number, salary: number, private department: string) {
        super(name, age, salary);
    }

    getAnnualBonus(): number {
        return this.salary * 0.2;
    }

    pay(): void {
        console.log(`Виплачено зарплату менеджеру ${this.name}: ${this.salary}`);
    }
}

// Створення масиву співробітників
const employees: Employee[] = [
    new Developer("Іван Петренко", 28, 50000, "JavaScript"),
    new Developer("Олена Коваленко", 32, 60000, "Python"),
    new Manager("Михайло Сидоренко", 40, 80000, "IT відділ"),
    new Manager("Юлія Мельник", 35, 75000, "HR відділ")
];

// Підрахунок загальної суми річних бонусів
const totalAnnualBonus = employees.reduce((sum, employee) => sum + employee.getAnnualBonus(), 0);

console.log(`Загальна сума річних бонусів: ${totalAnnualBonus}`);

// Демонстрація роботи методу pay()
employees.forEach(employee => {
    if ('pay' in employee) {
        (employee as Payable).pay();
    }
});