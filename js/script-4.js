// # Завдання 4

// Напиши функцію `formatString(string)` яка приймає рядок і форматує його якщо
// необхідно.

// - Якщо довжина рядка не перевищує `40 символів`, функція повертає її в
//   початковому   вигляді.
// - Якщо довжина більше `40 символів`, то функція обрізає рядок до 40-ка символів
//   і додає в кінець рядка три крапки `'...'`, після чого повертає   укорочену
//   версію.

// ```js
// const formatString = function (string) {
//   // твій код
// };

// /*
//  * Виклич функції для перевірки працездатності твоєї реалізації.
//  */
// console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// // повернеться оригінальний рядок

// console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
// // повернеться форматований рядок

// console.log(formatString("Curabitur ligula sapien."));
// // повернеться оригінальний рядок

// console.log(
//   formatString(
//     "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
//   )
// );
// // повернеться форматований рядок
// ```

const formatString = function (string) {
  if (string.length >= 40) {
    const over = string.slice(0, 39);
    string = over + '...';
  }
  return string;
};

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));

console.log(formatString('Curabitur ligula sapien.'));

console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
  ),
);
