const moreQuizOptions = document.querySelector('#more-quiz-options');
const showMoreBtn = document.querySelector('#show-more-quiz-btn');

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