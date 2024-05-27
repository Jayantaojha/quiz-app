// accessing elements from the quiz-playground.html file

const questionCategory = document.querySelector('#user-requested-category');
const question = document.querySelector('#question');
const options = document.querySelectorAll('.option');


// update the qustion category
questionCategory.innerHTML = localStorage.getItem('userRequest');


const sportsQuestions = [
    {
        "question": "Which country has won the most FIFA World Cups?",
        "options": [ "A) Germany", "B) Italy", "C) Brazil", "D) Argentina" ],
        "answer": "C) Brazil"
    },
    
    {
        "question": "In which sport would you perform a slam dunk?",
        "options": ["A) Volleyball", "B) Basketball", "C) Tennis", "D) Soccer"],
        "answer": "B) Basketball"
    },

    {
        "question": "Which tennis player has won the most Grand Slam titles in the Open Era (as of 2023)?",
        "options": ["A) Roger Federer", "B) Novak Djokovic", "C) Rafael Nadal", "D) Serena Williams"],
        "answer": "C) Rafael Nadal"
    },

    {
        "question": "What is the highest possible break in a game of snooker?",
        "options": ["A) 155", "B) 147", "C) 150", "D) 160"],
        "answer": "B) 147"
    },

    {
        "question": "Which country hosted the 2016 Summer Olympics?",
        "options": ["A) China", "B) United Kingdom", "C) Brazil", "D) Russia"],
        "answer": "C) Brazil"
    },

    {
        "question": "In which sport would you compete for the Stanley Cup?",
        "options": ["A) Baseball", "B) Ice Hockey", "C) Basketball", "D) Football"],
        "answer": "B) Ice Hockey"
    },

    {
        "question": "Who is known as 'The King of Clay' in tennis?",
        "options": ["A) Roger Federer", "B) Novak Djokovic", "C) Björn Borg", "D) Rafael Nadal"],
        "answer": "D) Rafael Nadal"
    },

    {
        "question": "Which NFL team won the first Super Bowl?",
        "options": ["A) New York Giants", "B) Green Bay Packers", "C) Dallas Cowboys", "D) Miami Dolphins"],
        "answer": "B) Green Bay Packers"
    },

    {
        "question": "What is the term for a score of one under par in golf?",
        "options": ["A) Eagle", "B) Birdie", "C) Bogey", "D) Par"],
        "answer": "B) Birdie"
    },

    {
        "question": "Which athlete has won the most Olympic medals in history?",
        "options": ["A) Usain Bolt", "B) Larisa Latynina", "C) Michael Phelps", "D) Paavo Nurmi"],
        "answer": "C) Michael Phelps"
    }

]


let currentQuestionIndex = 0;

function startQuiz(){
    currentQuestionIndex = 0;
}