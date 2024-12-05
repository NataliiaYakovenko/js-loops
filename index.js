//1. Вивести в консоль квадрати чисел від 1 до 10 (за допомогою циклу)
for (let i = 1; i <= 10; i++) {
  console.log(i * i);
}

//2. Написати функцію, яка запитує через prompt пароль користувача,
// порівнює його з тим, який у неї збережений (захардкоджений у константі).
//Якщо пароль співпав - виводить на консоль “Ви успішно увійшли в систему”,
//якщо ні - продовжує запитувати пароль і перевіряти,
// поки не введуть правильно (за допомогою вічного цикла)

const passwordActual = "qwerty";
let userPassword = "";
let currentTry = 1;

do {
  userPassword = prompt("Enter password");
  if (userPassword === passwordActual) {
    console.log("You have successfully logged in");
    break;
  } else {
    console.log("You have failed to login");
    currentTry++;
  }
} while (userPassword !== passwordActual);

//3. Обчислити сумму чисел від 1 до 100 і вивести її в консоль
let summa = 0;
for (let i = 1; i <= 100; i++) {
  summa = summa + i;
}
console.log("Summa " + summa);

//4. Вивести числа від 10 до 50, які кратні 5.

let result = 0;
for (let i = 10; i <= 50; i = i + 5) {
  if (i % 5 == 0) {
    console.log(i);
  }
}

/*5. Намалювати в консолі символами “*” трикутник заданого користувачем розміру
 *
 **
 ***
 ****
 *****
 ******
 */

let size = 6;
let i = 1;

while (i <= size) {
  console.log("*".repeat(i));
  i = i + 1;
}

//6. Намалювати пустий квадрат з діагоналлю (зліва зверху - до права низу)

let sizeSquare = 8;
let side = 0;

while (side < sizeSquare) {
  let column = 0;
  let result = "";

  while (column < sizeSquare) {
    if (side === column) {
      result = result + "*";
    } else if (
      side === 0 ||
      side === sizeSquare - 1 ||
      column === 0 ||
      column === sizeSquare - 1
    ) {
      result = result + "*";
    } else {
      result = result + " ";
    }
    column++;
  }
  console.log(result);
  side++;
}

//7. Задачка з *: Зробити квадрат зі зворотньою діагоналлю (з правого верхнього до лівого нижнього)
let sizeSquare1 = 8;
let side1 = 0;

while (side1 < sizeSquare1) {
  let column1 = 0;
  let result1 = "";

  while (column1 < sizeSquare1) {
    if (side1 + column1 === sizeSquare1 - 1) {
      result1 = result1 + "*";
    } else if (
      side1 === 0 ||
      side1 === sizeSquare1 - 1 ||
      column1 === 0 ||
      column1 === sizeSquare1 - 1
    ) {
      result1 = result1 + "*";
    } else {
      result1 = result1 + " ";
    }
    column1++;
  }
  console.log(result1);
  side1++;
}
