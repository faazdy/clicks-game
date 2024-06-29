const score1 = document.querySelector('#sc-1')
const score2 = document.querySelector('#sc-2')
const btn1 = document.querySelector('#btn-1')
const btn2 = document.querySelector('#btn-2')
const reset = document.querySelector('#reset')
const select = document.querySelector('#points')
const winner = document.querySelector('#winner')
const h5 = document.querySelector('h5')


let player1 = 0
let player2 = 0
let limite = parseInt(select.value)

//para actualizar la variable del limite al que escojamos
select.addEventListener('change', ()=>{
    limite = parseInt(select.value)
    h5.innerText = `SCORE TO WIN: ${limite}`
})


//PLAYER 1
btn1.addEventListener('click', ()=>{
    ++player1
    score1.innerText = player1

    if(player1 === limite){
        btn1.disabled = true
        btn2.disabled = true
        score1.style.color = 'green'
        score2.style.color = 'red'
        winner.innerText = 'PLAYER 1 WINS!'
    }
})

//PLAYER 2
btn2.addEventListener('click', ()=>{
    ++player2
    score2.innerText = player2
    if(player2 === limite){
        btn1.disabled = true
        btn2.disabled = true
        score1.style.color = 'red'
        score2.style.color = 'green'
        winner.innerText = 'PLAYER 2 WINS!'
    }
})

//RESET
reset.addEventListener('click', ()=>{
    player1 = 0
    player2 = 0
    score1.innerText = player1
    score2.innerText = player2
    btn1. disabled = false
    btn2. disabled = false
    score1.style.color = ''
    score2.style.color = ''
    winner.innerText = ''
})
