var Cat = /** @class */ (function () {
    function Cat(name, age) {
        this.name = name;
        this.age = age;
    }
    Cat.prototype.sound = function () {
        console.log("Мяу!");
    };
    Cat.prototype.move = function () {
        console.log("Кіт крадеться");
    };
    return Cat;
}());
var Bird = /** @class */ (function () {
    function Bird(name, age, canFly) {
        if (canFly === void 0) { canFly = true; }
        this.name = name;
        this.age = age;
        this.canFly = canFly;
    }
    Bird.prototype.sound = function () {
        console.log("Цвірінь-цвірінь!");
    };
    Bird.prototype.move = function () {
        if (this.canFly) {
            console.log("Птах летить");
        }
        else {
            console.log("Птах стрибає");
        }
    };
    return Bird;
}());
var Fish = /** @class */ (function () {
    function Fish(name, age, habitat) {
        if (habitat === void 0) { habitat = "прісна вода"; }
        this.name = name;
        this.age = age;
        this.habitat = habitat;
    }
    Fish.prototype.sound = function () {
        console.log("Бульк-бульк!");
    };
    Fish.prototype.move = function () {
        console.log("Риба пливе");
    };
    return Fish;
}());
// Приклад використання
var cat = new Cat("Мурчик", 3);
var bird = new Bird("Чижик", 1);
var fish = new Fish("Немо", 2, "солона вода");
cat.sound(); // Виведе: Мяу!
bird.move(); // Виведе: Птах летить
console.log(fish.habitat); // Виведе: солона вода
