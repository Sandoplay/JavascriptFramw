abstract class Car {
    protected constructor(
        protected brand: string,
        protected model: string,
        protected year: number,
        private vinNumber: string
    ) {}

    abstract getDescription(): string;

    protected getBasicInfo(): string {
        return `${this.brand} ${this.model} (${this.year})`;
    }

    public getVinNumber(): string {
        return this.vinNumber;
    }
}

class Toyota extends Car {
    constructor(model: string, year: number, vinNumber: string, private hybridSystem: boolean) {
        super("Toyota", model, year, vinNumber);
    }

    public getDescription(): string {
        return `${this.getBasicInfo()}. ${this.hybridSystem ? 'З гібридною системою' : 'Без гібридної системи'}.`;
    }
}

class BMW extends Car {
    constructor(model: string, year: number, vinNumber: string, private sportPackage: boolean) {
        super("BMW", model, year, vinNumber);
    }

    public getDescription(): string {
        return `${this.getBasicInfo()}. ${this.sportPackage ? 'Зі спортивним пакетом' : 'Без спортивного пакету'}.`;
    }
}

class Mercedes extends Car {
    constructor(model: string, year: number, vinNumber: string, private luxuryClass: string) {
        super("Mercedes", model, year, vinNumber);
    }

    public getDescription(): string {
        return `${this.getBasicInfo()}. Клас розкоші: ${this.luxuryClass}.`;
    }
}

// Створення екземплярів
const toyotaCamry = new Toyota("Camry", 2022, "1HGBH41JXMN109186", true);
const toyotaCorolla = new Toyota("Corolla", 2021, "2T1BURHE0KC205863", false);

const bmwX5 = new BMW("X5", 2023, "5UXCR6C07N9C66322", true);
const bmw3Series = new BMW("3 Series", 2022, "WBA8B9C55GK546174", false);

const mercedesEClass = new Mercedes("E-Class", 2023, "W1KZF8KB1NA123456", "Premium");
const mercedesCClass = new Mercedes("C-Class", 2022, "W1KZF8KB1NA654321", "Executive");

// Виведення описів
console.log(toyotaCamry.getDescription());
console.log(toyotaCorolla.getDescription());
console.log(bmwX5.getDescription());
console.log(bmw3Series.getDescription());
console.log(mercedesEClass.getDescription());
console.log(mercedesCClass.getDescription());