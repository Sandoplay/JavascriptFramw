"use strict";
class Cat {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sound() {
        console.log("Мяу!");
    }
    move() {
        console.log("Кіт крадеться");
    }
}
class Bird {
    constructor(name, age, canFly = true) {
        this.name = name;
        this.age = age;
        this.canFly = canFly;
    }
    sound() {
        console.log("Цвірінь-цвірінь!");
    }
    move() {
        if (this.canFly) {
            console.log("Птах летить");
        }
        else {
            console.log("Птах стрибає");
        }
    }
}
class Fish {
    constructor(name, age, habitat = "прісна вода") {
        this.name = name;
        this.age = age;
        this.habitat = habitat;
    }
    sound() {
        console.log("Бульк-бульк!");
    }
    move() {
        console.log("Риба пливе");
    }
}
// Приклад використання
const cat = new Cat("Мурчик", 3);
const bird = new Bird("Чижик", 1);
const fish = new Fish("Немо", 2, "солона вода");
cat.sound(); // Виведе: Мяу!
bird.move(); // Виведе: Птах летить
console.log(fish.habitat); // Виведе: солона вода
