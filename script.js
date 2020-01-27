let myQuestions = [
    {
        question: "How many NBA championships did Kobe won?",
        answer: {
            a: 'Null',
            b: '3',
            c: '5'
        },
        correctAnswer: 'c'
    },
    {
        question: "What was Kobe's jersey number?",
        answers: {
            a: '8',
            b: '24',
            c: '23'
        },
        correctAnswer: 'a'
    }
];





function generateQuiz(questions, quizContainer, resultsContainer, submitButton) {
    
    function showQuestions(questions, quizContainer){
        let output = [];
        let answers;

        for(let i=0; i < questions.lenght; i++){
            answers = [];

            for(letter in questions[i].answers){

                answers.push(
                    '<label>'
                    + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                    + letter + ': '
                    + questions[i].answers[letter]
                    + '</label>'
                );
            }


            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class"answers">' + answers.join('') + '</div>'

            );
        }


        quizContainer.innerHTML = output.join('');
    
    }
}

function showResults(questions, quizContainer, resultsContainer){

    let answerContainers = quizContainer.querySelectorAll('.answers');

    let userAnswer = '';
    let numCorrect = 0;

    for(let i=0; i < questions.length; i++){

        userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;

        if(userAnswer===questions[i].correctAnswer){

            numCorrect++;

            answerContainers[i].style.color = 'lightgreen';
        }

        else{

            answerContainers[i].style.color = 'red';
        }
    }

    resultsContainer.innerHTML = numCorrect + ' out of ' + questions.lenght;

}


showQuestions(questions, quizContainer);



submitButton.onclick = function(){
    showResults(questions, quizContainer, resultsContainer);
}

let quizContainer = document.getElementById('quiz');
let resultsContainer = document.getElementById('results');
let submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);