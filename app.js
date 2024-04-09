const getNumber = () => Math.round(Math.random() * 100);
const isEven = (number) => !(number % 2);

alert('Привет!');

const playRound = () => {
   const number = getNumber();
  const correctAnswer = isEven(number) ? 'да' : 'нет';
  const userAnswer = prompt(`Является ли число ${number} четным? Пожалуйста, ответьте "да" или "нет"`);
  return userAnswer.toLowerCase().trim() === correctAnswer;
}

const playGame = () => {
for (let i = 0; i < 3; i++) { 
  const isCorrect = playRound();
  if (isCorrect) {
    alert('Это правильный ответ!');
  } else {
    alert('Это неправильный ответ! Вы проиграли :(');
    return;
    }
  }
  alert('Вы выиграли!')
}

const button = document.querySelector('button');
button.addEventListener('click', playGame);