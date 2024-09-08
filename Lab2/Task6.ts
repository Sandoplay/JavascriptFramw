// Інтерфейс LibraryItem
interface LibraryItem {
    name: string;
    author: string;
    isBorrowed: boolean;
    borrow(): void;
}

// Клас Book
class Book implements LibraryItem {
    isBorrowed: boolean = false;

    constructor(
        public name: string,
        public author: string,
        public pageCount: number
    ) {}

    borrow(): void {
        if (!this.isBorrowed) {
            this.isBorrowed = true;
            console.log(`Книгу "${this.name}" позичено.`);
        } else {
            console.log(`Книга "${this.name}" вже позичена.`);
        }
    }
}

// Клас Magazine
class Magazine implements LibraryItem {
    isBorrowed: boolean = false;

    constructor(
        public name: string,
        public author: string,
        public issueNumber: number
    ) {}

    borrow(): void {
        if (!this.isBorrowed) {
            this.isBorrowed = true;
            console.log(`Журнал "${this.name}" позичено.`);
        } else {
            console.log(`Журнал "${this.name}" вже позичений.`);
        }
    }
}

// Клас DVD
class DVD implements LibraryItem {
    isBorrowed: boolean = false;

    constructor(
        public name: string,
        public author: string,
        public duration: number
    ) {}

    borrow(): void {
        if (!this.isBorrowed) {
            this.isBorrowed = true;
            console.log(`DVD "${this.name}" позичено.`);
        } else {
            console.log(`DVD "${this.name}" вже позичений.`);
        }
    }
}

// Клас Library
class Library {
    private items: LibraryItem[] = [];

    addItem(item: LibraryItem): void {
        this.items.push(item);
        console.log(`Додано до бібліотеки: "${item.name}"`);
    }

    findItemByName(name: string): LibraryItem | undefined {
        return this.items.find(item => item.name.toLowerCase() === name.toLowerCase());
    }

    listAvailableItems(): void {
        console.log("Доступні елементи в бібліотеці:");
        this.items.forEach(item => {
            if (!item.isBorrowed) {
                console.log(`- ${item.name} (${item.author})`);
                if (item instanceof Book) {
                    console.log(`  Кількість сторінок: ${item.pageCount}`);
                } else if (item instanceof Magazine) {
                    console.log(`  Номер випуску: ${item.issueNumber}`);
                } else if (item instanceof DVD) {
                    console.log(`  Тривалість: ${item.duration} хвилин`);
                }
            }
        });
    }
}

// Демонстрація роботи системи
const library = new Library();

const book1 = new Book("1984", "Джордж Орвелл", 328);
const book2 = new Book("Гаррі Поттер і філософський камінь", "Дж. К. Роулінг", 223);
const magazine1 = new Magazine("National Geographic", "Various", 256);
const dvd1 = new DVD("Inception", "Christopher Nolan", 148);

library.addItem(book1);
library.addItem(book2);
library.addItem(magazine1);
library.addItem(dvd1);

console.log("\nСписок доступних елементів:");
library.listAvailableItems();

const foundItem = library.findItemByName("1984");
if (foundItem) {
    foundItem.borrow();
}

console.log("\nСписок доступних елементів після позичення:");
library.listAvailableItems();

// Спроба позичити вже позичений елемент
if (foundItem) {
    foundItem.borrow();
}