//Задание 1.
//Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве.
// Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно.
//При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.
//На этот раз оформите решение в виде функции, постарайтесь дать этой функции корректное название, вызовите функцию, проанализируйте синтаксис.

function getMassive() {
  let arr = [4, 5, 9, 11, 16, 20];
  for (let key of arr) {
    if (key % 2 == 0) {
      console.log("Четное", key);
    } else if (key % 2 == 1) {
      console.log("Нечетное", key);
    }
  }
}

getMassive();
