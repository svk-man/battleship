const randomLocation = Math.floor(Math.random() * 5);
const location1 = randomLocation;
const location2 = location1 + 1;
const location3 = location2 + 1;
let guess;
let hits = 0;
let guesses = 0;
let isSunk = false;

while (!isSunk) {
  guess = prompt('Введите координату выстрела (от 0 до 6):');
  if (guess === null) {
    alert('Вы вышли из игры!');
    break;
  }

  guess = Number(guess);
  if (guess < 0 || guess > 6) {
    alert('Введенная координата не попадает в диапазон значений (от 0 до 6). Введите корректное число!');
  } else {
    guesses++;
    if (guess === location1 || guess === location2 || guess === location3) {
      alert('Есть попадание!');
      hits++;
      if (hits === 3) {
        isSunk = true;
        alert('Корабль потоплен!');
        alert(`Вы потопили корабль с ${guesses} (количество попыток), Ваша точность: ${3 / guesses}`);
      }
    } else {
      alert('Вы не попали! Попробуйте ещё раз!');
    }
  }
}