const { displayQuestion } = require('./function');

console.log("Welcome to the Online Quiz Game!");
console.log("-------------------------------");

const totalQuestions = quiz.length;

for (let i = 0; i < totalQuestions; i++) {
  console.log(`Question ${i + 1}:`);
  displayQuestion();
  console.log("-------------------------------");
}

console.log("Quiz completed!");
console.log(`Your final score is ${score} out of ${totalQuestions}.`);