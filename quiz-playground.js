// Accessing elements from the quiz-playground.html file
const quizplayContainer = document.querySelector('#quiz-play-container');
const questionCategory = document.querySelector('#user-requested-category');
const question = document.querySelector('#question');
const optionsList = document.querySelector('#options-list');
const options = document.querySelectorAll('.option');
const nextQuestionBtn = document.querySelector('#next-question-btn');

// Initially nextQuestionBtn is hidden
nextQuestionBtn.style.opacity = "0"; // Hide the button by default
nextQuestionBtn.style.transition = "opacity 0.5s ease"; // Transition for appearance

// Update the question category
questionCategory.innerHTML = localStorage.getItem('userRequest');

// Quiz questions data
const sportsQuestions = [
    {
        "question": "Which team won the UEFA Champions League 2023-2024 season?",
        "options": ["A) Manchester City", "B) Real Madrid", "C) Bayern Munich", "D) Paris Saint-Germain"],
        "answer": "A) Manchester City"
    },
    {
        "question": "Who won the 2024 Australian Open Men's Singles title?",
        "options": ["A) Novak Djokovic", "B) Carlos Alcaraz", "C) Daniil Medvedev", "D) Rafael Nadal"],
        "answer": "B) Carlos Alcaraz"
    },
    {
        "question": "Which country won the 2024 ICC Men's T20 World Cup?",
        "options": ["A) India", "B) England", "C) Australia", "D) Pakistan"],
        "answer": "C) Australia"
    },
    {
        "question": "Who was awarded the 2024 NBA Finals MVP?",
        "options": ["A) Giannis Antetokounmpo", "B) LeBron James", "C) Nikola Jokić", "D) Kevin Durant"],
        "answer": "C) Nikola Jokić"
    },
    {
        "question": "Which nation hosted the 2024 Winter Olympics?",
        "options": ["A) China", "B) Italy", "C) Japan", "D) Canada"],
        "answer": "B) Italy"
    },
    {
        "question": "Who won the 2024 Tour de France?",
        "options": ["A) Tadej Pogačar", "B) Jonas Vingegaard", "C) Primož Roglič", "D) Geraint Thomas"],
        "answer": "B) Jonas Vingegaard"
    },
    {
        "question": "Which country won the 2024 Women's FIFA World Cup?",
        "options": ["A) USA", "B) Germany", "C) Spain", "D) England"],
        "answer": "C) Spain"
    },
    {
        "question": "Who won the 2024 Wimbledon Women's Singles title?",
        "options": ["A) Iga Świątek", "B) Ashleigh Barty", "C) Naomi Osaka", "D) Elena Rybakina"],
        "answer": "A) Iga Świątek"
    },
    {
        "question": "Which team won the 2024 Super Bowl (Super Bowl LVIII)?",
        "options": ["A) Kansas City Chiefs", "B) Tampa Bay Buccaneers", "C) Buffalo Bills", "D) San Francisco 49ers"],
        "answer": "A) Kansas City Chiefs"
    },
    {
        "question": "Who won the Ballon d'Or 2023?",
        "options": ["A) Lionel Messi", "B) Karim Benzema", "C) Kylian Mbappé", "D) Erling Haaland"],
        "answer": "A) Lionel Messi"
    }
];

let score = 0;
let currentQuestionIndex = 0;
let total = sportsQuestions.length;

// Styling for result div after each quiz play
const resultDiv = document.createElement('div');
resultDiv.style.width = "80%";
resultDiv.style.height = "60%";
resultDiv.style.margin = "0 auto";
resultDiv.style.padding = "10px";
resultDiv.style.fontSize = "30px";
resultDiv.style.textAlign = "center";
// For smaller screens (result div)
if (window.innerWidth < 600) {
    resultDiv.style.width = "90%";
    resultDiv.style.height = "70%";
}

// Styling for play again button
const playAgainBtn = document.createElement('button');
playAgainBtn.innerText = "Play Again";
playAgainBtn.style.fontSize = "16px";
playAgainBtn.style.padding = "10px 20px";
playAgainBtn.style.margin = "0px auto";
playAgainBtn.style.marginTop = "60px";
playAgainBtn.style.color = "#fff";
playAgainBtn.style.backgroundColor = "#0f172a";
playAgainBtn.style.display = "block";
playAgainBtn.style.borderRadius = "8px";

resultDiv.append(playAgainBtn);
quizplayContainer.append(resultDiv);
resultDiv.style.display = "none"; // Hide result initially

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    resultDiv.style.display = "none";
    question.style.display = "block";
    optionsList.style.display = "block";
    nextQuestionBtn.style.opacity = "0";
    playQuiz();
}

function playQuiz() {
    if (currentQuestionIndex < sportsQuestions.length) {
        question.innerHTML = sportsQuestions[currentQuestionIndex].question;
        options.forEach((item, index) => {
            item.innerHTML = sportsQuestions[currentQuestionIndex].options[index];
            item.style.backgroundColor = ''; // Reset background color
            item.style.transition = "background-color 0.3s ease"; // Transition for color change
            item.style.pointerEvents = 'auto'; // Re-enable interaction
        });

        let selectedOption = false;
        options.forEach((item) => {
            item.onclick = null; // Remove previous event listeners
            item.addEventListener('click', () => {

                if (selectedOption) return; // Prevent multiple selections
                selectedOption = true;
                if (item.innerText.trim() === sportsQuestions[currentQuestionIndex].answer.trim()) {
                    score += 1;
                    item.style.backgroundColor = "#9de0ba"; // Green
                } else {
                    item.style.backgroundColor = "#ff9c90"; // Red
                    // Highlight correct answer
                    options.forEach(option => {
                        if (option.innerText.trim() === sportsQuestions[currentQuestionIndex].answer.trim()) {
                            option.style.backgroundColor = "#9de0ba"; // Green
                        }
                    });
                }
                // Disable options after selection
                options.forEach(opt => opt.style.pointerEvents = 'none');

                // Show the next question button with transition
                nextQuestionBtn.style.opacity = "1";
            });
        });

    } else {
        showResult();
    }
}

nextQuestionBtn.addEventListener('click', () => {
    // on showing next question hide the nextQuestionBtn
    nextQuestionBtn.style.opacity = "0";

    currentQuestionIndex++;
    if (currentQuestionIndex < sportsQuestions.length) {
        playQuiz();
    } else {
        showResult();
    }
});

function showResult() {
    questionCategory.innerHTML = "Result";
    questionCategory.style.textAlign = "center";

    question.style.display = "none";
    optionsList.style.display = "none";
    nextQuestionBtn.style.display = "none";

    resultDiv.innerHTML = `Your Score: ${score}/${total}`;
    resultDiv.append(playAgainBtn); // Ensure play again button is visible
    resultDiv.style.display = "block";
}

playAgainBtn.addEventListener("click", startQuiz);

document.addEventListener('DOMContentLoaded', startQuiz);