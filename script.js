const correctAnswers={
    q1:'honey',
    q2:'Snail',
    q3:'Blue-black',
    q4:'Facebook',
    q5:'Unicorn',
}


function submitQuiz(){
    let score=0;
    clearHighlights();

    for(const ques in correctAnswers){
        const selectedOptions=document.querySelectorAll(`input[name="${ques}"]:checked`);

        if(selectedOptions.length ===1 && selectedOptions[0].value===correctAnswers[ques]){
            score++;
        }
    }

    let result= document.getElementById('result');
    if(!result)
    {
        result=document.createElement('div');
        result.id='result';
        document.querySelector('form').appendchild(result);

    }
    result.textContent=`Your score is ${score} out of 5`;
    document.getElementById('showBtn').style.display='inline-block';
}

function showAnswers(){
    for(const ques in correctAnswers){
        const correctOption=document.querySelector(`input[name="${ques}"][value="${correctAnswers[ques]}"]`);
        if(correctOption){
            correctOption.parentElement.style.backgroundColor='lightgreen';
            correctOption.parentElement.style.fontWeight='bold';
        }
    }
}


function clearHighlights(){
    const labels=document.querySelectorAll('form label');
    labels.forEach(label => {
        label.style.backGroundColor='';
        label.style.fontWeight='';
    });
}