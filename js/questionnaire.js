// const questions = [
//   {
//     question: "Domanda 1/3: Avete mai usato un Set Bracciale Sogna in Grande?",
//     answers: [
//       { text: "Si", value: "Да" },
//       { text: "No", value: "Нет" },
//     ],
//   },
//   {
//     question: "Domanda 2/3:Вы любите красивых девушек",
//     answers: [
//       { text: "Si", value: "Да" },
//       { text: "No", value: "Нет" },
//     ],
//   },
//   {
//     question: "Domanda 3/3:Вы любите красиво жить!",
//     answers: [
//       { text: "Si", value: "Да" },
//       { text: "No", value: "Нет" },
//     ],
//   },
// ];

// const container = document.querySelector("#questions");
// let currentQuestionIndex = 0;

// function showCurrentQuestion() {
//   const currentQuestion = questions[currentQuestionIndex];

//   const questionElement = document.createElement("h3");
//   questionElement.textContent = currentQuestion.question;

//   const yesButton = document.createElement("button");
//   yesButton.textContent = currentQuestion.answers[0].text;
//   yesButton.addEventListener("click", () => {
//     recordAnswer(currentQuestion, currentQuestion.answers[0].value);
//   });

//   const noButton = document.createElement("button");
//   noButton.textContent = currentQuestion.answers[1].text;
//   noButton.addEventListener("click", () => {
//     recordAnswer(currentQuestion, currentQuestion.answers[1].value);
//   });

//   container.innerHTML = "";
//   container.appendChild(questionElement);
//   container.appendChild(yesButton);
//   container.appendChild(noButton);
// }

// function recordAnswer(question, answer) {
//   console.log(`Question: ${question.question}, Answer: ${answer}`);

//   currentQuestionIndex++;
//   if (currentQuestionIndex < questions.length) {
//     showCurrentQuestion();
//   } else {
//     container.innerHTML = "<h3>Спасибо за ответы!</h3>";
//   }
// }

// showCurrentQuestion();
