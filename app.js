let firstInp = document.querySelector('.firstInp')
let secondInp = document.querySelector('.secondInp')
let sumBtn = document.querySelector('.sum')
let answerDiv = document.querySelector('.answer')
let answer
let moves = {
    plus: document.querySelector('.plus'),
    minus: document.querySelector('.minus'),
    gamravleba: document.querySelector('.gamravleba'),
    gayofa: document.querySelector('.gayofa')
}


sumBtn.addEventListener('click', function(){
    if(moves.plus.style.display == "flex"){

    answer = parseFloat(firstInp.value) + parseFloat(secondInp.value);

    }
    else if(moves.plus.style.display == "none" && moves.minus.style.display == "flex"){

    answer = parseFloat(firstInp.value) - parseFloat(secondInp.value)

    }
    else if(moves.minus.style.display == "none" && moves.gamravleba.style.display == "flex"){

        answer = parseFloat(firstInp.value) * parseFloat(secondInp.value)

    }
    else if(moves.gamravleba.style.display == "none" && moves.gayofa.style.display == "flex"){

        answer = parseFloat(firstInp.value) / parseFloat(secondInp.value)

    }
answerDiv.textContent = `${answer}`
    if(firstInp.value == '' && secondInp.value == ''){
        answerDiv.textContent = '0'
    }else if (firstInp.value == '' || secondInp.value == ''){
        answerDiv.textContent = "Fill All Number"
    }
})

moves.plus.addEventListener('click', function(){
    moves.plus.style.display = "none";
    moves.minus.style.display = "flex"
})

moves.minus.addEventListener('click', function(){
    moves.minus.style.display = "none"
    moves.gamravleba.style.display = "flex"
})

moves.gamravleba.addEventListener('click', function(){
    moves.gamravleba.style.display = "none"
    moves.gayofa.style.display = "flex"
})

moves.gayofa.addEventListener('click', function(){
    moves.gayofa.style.display = "none"
    moves.plus.style.display = "flex"
})
