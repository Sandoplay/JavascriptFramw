interface Animal {
    name: string;
    age: number;
    sound(): void;
    move(): void;
    habitat?: string; // Опціональна властивість
  }
  
  class Cat implements Animal {
    constructor(public name: string, public age: number) {}
  
    sound(): void {
      console.log("Мяу!");
    }
  
    move(): void {
      console.log("Кіт крадеться");
    }
  }
  
  class Bird implements Animal {
    constructor(public name: string, public age: number, public canFly: boolean = true) {}
  
    sound(): void {
      console.log("Цвірінь-цвірінь!");
    }
  
    move(): void {
      if (this.canFly) {
        console.log("Птах летить");
      } else {
        console.log("Птах стрибає");
      }
    }
  }
  
  class Fish implements Animal {
    constructor(public name: string, public age: number, public habitat: string = "прісна вода") {}
  
    sound(): void {
      console.log("Бульк-бульк!");
    }
  
    move(): void {
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