// Інтерфейс Course
interface Course {
    name: string;
    duration: number; // в годинах
    students: string[];
}

// Клас OnlineCourse
class OnlineCourse implements Course {
    public students: string[] = [];

    constructor(public name: string, public duration: number) {}

    registerStudent(student: string): void {
        if (!this.isStudentRegistered(student)) {
            this.students.push(student);
            console.log(`Студент ${student} зареєстрований на курс ${this.name}`);
        } else {
            console.log(`Студент ${student} вже зареєстрований на курс ${this.name}`);
        }
    }

    isStudentRegistered(student: string): boolean {
        return this.students.includes(student);
    }
}

// Клас CourseManager
class CourseManager {
    private courses: Course[] = [];

    addCourse(course: Course): void {
        this.courses.push(course);
        console.log(`Курс ${course.name} додано до системи`);
    }

    removeCourse(courseName: string): void {
        const index = this.courses.findIndex(course => course.name === courseName);
        if (index !== -1) {
            this.courses.splice(index, 1);
            console.log(`Курс ${courseName} видалено з системи`);
        } else {
            console.log(`Курс ${courseName} не знайдено`);
        }
    }

    findCourse(courseName: string): Course | undefined {
        return this.courses.find(course => course.name === courseName);
    }

    listCourses(): void {
        console.log("Список курсів:");
        this.courses.forEach(course => {
            console.log(`- ${course.name} (${course.duration} годин)`);
            console.log(`  Зареєстровані студенти: ${course.students.join(', ')}`);
        });
    }
}

// Демонстрація роботи системи
const manager = new CourseManager();

const typescript = new OnlineCourse("TypeScript Basics", 20);
const javascript = new OnlineCourse("JavaScript Advanced", 30);
const python = new OnlineCourse("Python for Beginners", 25);

manager.addCourse(typescript);
manager.addCourse(javascript);
manager.addCourse(python);

typescript.registerStudent("Анна");
typescript.registerStudent("Богдан");
javascript.registerStudent("Вікторія");
javascript.registerStudent("Анна");
python.registerStudent("Григорій");

manager.listCourses();

manager.removeCourse("JavaScript Advanced");
console.log("\nПісля видалення курсу JavaScript Advanced:");
manager.listCourses();

const foundCourse = manager.findCourse("TypeScript Basics");
if (foundCourse) {
    console.log(`\nЗнайдено курс: ${foundCourse.name}`);
    console.log(`Тривалість: ${foundCourse.duration} годин`);
    console.log(`Кількість студентів: ${foundCourse.students.length}`);
}