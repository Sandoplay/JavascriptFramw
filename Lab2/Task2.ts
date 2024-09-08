interface Shape {
    getArea(): number;
    getPerimeter(): number;
    scale(factor: number): void;
  }
  
  class Circle implements Shape {
    constructor(private radius: number) {}
  
    getArea(): number {
      return Math.PI * this.radius ** 2;
    }
  
    getPerimeter(): number {
      return 2 * Math.PI * this.radius;
    }
  
    scale(factor: number): void {
      this.radius *= factor;
    }
  }
  
  class Rectangle implements Shape {
    constructor(private width: number, private height: number) {}
  
    getArea(): number {
      return this.width * this.height;
    }
  
    getPerimeter(): number {
      return 2 * (this.width + this.height);
    }
  
    scale(factor: number): void {
      this.width *= factor;
      this.height *= factor;
    }
  }
  
  class Triangle implements Shape {
    constructor(private a: number, private b: number, private c: number) {}
  
    getArea(): number {
      const s = (this.a + this.b + this.c) / 2;
      return Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
    }
  
    getPerimeter(): number {
      return this.a + this.b + this.c;
    }
  
    scale(factor: number): void {
      this.a *= factor;
      this.b *= factor;
      this.c *= factor;
    }
  }
  
  // Створення масиву фігур та обчислення загальної площі та периметру
  const shapes: Shape[] = [
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