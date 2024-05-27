const quizBtns = document.querySelectorAll('.quiz-btn');
const moreQuizOptions = document.querySelector('#more-quiz-options');
const showMoreBtn = document.querySelector('#show-more-quiz-btn');


// click event for all the quiz buttons
let currentQuizRequest = '';

const quizBtnsArr = Array.from(quizBtns);
quizBtnsArr.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        currentQuizRequest = btn.innerHTML;
        localStorage.setItem('userRequest', currentQuizRequest);
        window.location.href = 'quiz-playground.html';
    })
})



// show more quiz buttons

let showMoreBtnCounter = true;

showMoreBtn.addEventListener('click', () => {
    if (showMoreBtnCounter == true) {
        moreQuizOptions.classList.remove('hidden');
        showMoreBtn.classList.remove('fa-chevron-down');
        showMoreBtn.classList.add('fa-chevron-up');
        showMoreBtnCounter = false;

    } else {
        moreQuizOptions.classList.add('hidden');
        showMoreBtn.classList.remove('fa-chevron-up');
        showMoreBtn.classList.add('fa-chevron-down');
        showMoreBtnCounter = true;
    }
})
