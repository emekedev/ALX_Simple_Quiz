function checkAnswer(){
    let correctAnswer = "4";
    let inputValue = document.querySelector('input[name="quiz"]:checked');
    let userAnswer = inputValue.value;

    if (userAnswer === correctAnswer){
        document.getElementById('feedback').textContent = 'Correct! Well done.'
        return;
    }
    else{
        document.getElementById('feedback').textContent = `That's incorrect. Try again!`
    }

    let btn = document.getElementById('submit-answer');
    btn.addEventListener('click', checkAnswer)
}