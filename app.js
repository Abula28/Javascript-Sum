let firstInp = document.querySelector('.firstInp')
let secondInp = document.querySelector('.secondInp')
let sumBtn = document.querySelector('.sum')
let answerDiv = document.querySelector('.answer')


sumBtn.addEventListener('click', function(){
    let answer = parseFloat(firstInp.value) + parseFloat(secondInp.value);
    answerDiv.textContent = `${answer}`
    if(firstInp.value == '' && secondInp.value == ''){
        answerDiv.textContent = '0'
    }else if (firstInp.value == '' || secondInp.value == ''){
        answerDiv.textContent = "Fill All Number"
        answerDiv.textContent.style.color = 'red'
    }
})