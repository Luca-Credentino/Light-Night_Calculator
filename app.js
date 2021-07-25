const { url } = require("inspector");

const NumbersAndOperator = document.querySelectorAll('.btn');
const EqualBtn = document.querySelector('.btn-equal');
const CancelBtn = document.querySelector('.btn-clear');
const screen = document.querySelector('.screen');
const result = document.querySelector('.result');
const sunLogo = document.querySelector('.sun-logo');
const moonLogo = document.querySelector('.moon-logo');
const section = document.querySelector('.calculator')
const gitHubLogo = document.querySelector('#githublogo');

    NumbersAndOperator.forEach((Buttons)=>{
        Buttons.addEventListener('click', (Buttons)=>{
            var valueOfButtons = Buttons.currentTarget.dataset.num;
            screen.value += valueOfButtons;
     })
    })

    CancelBtn.addEventListener('click', ()=>{
        screen.value = "";
        result.value = "";
    })

    EqualBtn.addEventListener('click', ()=>{
        if(screen.value === ""){
            screen.value = 'Inserisci dei valori'
        }else{
        let Output = eval(screen.value);
        result.value = Output;
    }//else
    });

       moonLogo.addEventListener('click', ()=>{
            section.style.backgroundColor = "black"
            NumbersAndOperator.style.backgroundColor = "black"
            NumbersAndOperator.style.color = "white"
    })
    sunLogo.addEventListener('click', ()=>{
        section.style.backgroundColor = '#E8E8E8'
        moonLogo.className.add('none')
    })

    gitHubLogo.addEventListener('click', ()=>{
        gitHubLogo.href = url('https://github.com/Luca-Credentino');
    })



