"use strict";
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    getArea() {
        return Math.PI * this.radius ** 2;
    }
    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }
    scale(factor) {
        this.radius *= factor;
    }
}
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
    getPerimeter() {
        return 2 * (this.width + this.height);
    }
    scale(factor) {
        this.width *= factor;
        this.height *= factor;
    }
}
class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
    getArea() {
        const s = (this.a + this.b + this.c) / 2;
        return Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
    }
    getPerimeter() {
        return this.a + this.b + this.c;
    }
    scale(factor) {
        this.a *= factor;
        this.b *= factor;
        this.c *= factor;
    }
}
// Створення масиву фігур та обчислення загальної площі та периметру
const shapes = [
    new Circle(5),
    new Rectangle(4, 6),
    new Triangle(3, 4, 5)
];
let totalArea = 0;
let totalPerimeter = 0;
shapes.forEach(shape => {
    totalArea += shape.getArea();
    totalPerimeter += shape.getPerimeter();
});
console.log(`Загальна площа: ${totalArea.toFixed(2)}`);
console.log(`Загальний периметр: ${totalPerimeter.toFixed(2)}`);
// Масштабування фігур
const scaleFactor = 1.5;
shapes.forEach(shape => shape.scale(scaleFactor));
console.log("Після масштабування:");
console.log(`Загальна площа: ${shapes.reduce((sum, shape) => sum + shape.getArea(), 0).toFixed(2)}`);
console.log(`Загальний периметр: ${shapes.reduce((sum, shape) => sum + shape.getPerimeter(), 0).toFixed(2)}`);
