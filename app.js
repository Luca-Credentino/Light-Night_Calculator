const NumbersAndOperator = document.querySelectorAll('.btn');
const EqualBtn = document.querySelector('.btn-equal');
const CancelBtn = document.querySelector('.btn-clear');
const screenDisplay = document.querySelector('.screen');
const resultDisplay = document.querySelector('.result');
const sunLogo = document.querySelector('.sun-logo');
const moonLogo = document.querySelector('.moon-logo');
const section = document.querySelector('.calculator')
const operatorBtn = document.querySelectorAll('.operatorBtn')

    NumbersAndOperator.forEach((Buttons)=>{
        Buttons.addEventListener('click', (Buttons)=>{
            var valueOfButtons = Buttons.currentTarget.dataset.num;
            screenDisplay.value += valueOfButtons;
     })
    })

    CancelBtn.addEventListener('click', ()=>{
        screenDisplay.value = "";
        resultDisplay.value = "";
    })//Resetta i valori degli input

    EqualBtn.addEventListener('click', ()=>{
        if (screenDisplay.value === "") {
            screenDisplay.value = "Inserisci un valore"
        }else{
            let risultato = eval(screenDisplay.value);
            resultDisplay.value = risultato;
        };
    })

    //Feature: Light & Night mode.

       moonLogo.addEventListener('click', ()=>{
         sunLogo.style.color = "orange"
           moonLogo.style.color = "black"
           //cambio background-color della calcolatrice
            section.style.backgroundColor = "black";
            //cambio colore dei Buttons
            NumbersAndOperator.forEach((buttons)=>{
                buttons.style.backgroundColor = "black";
                buttons.style.color = "white";
            });
            //Cambio colore dei bottone "="
            EqualBtn.style.backgroundColor = "black";
            EqualBtn.style.color = "white";
            //Screen Risultato cambio colore
            screenDisplay.style.color = "white";
            screenDisplay.style.backgroundColor = "black";
            //Screen Risultato cambio colore
            resultDisplay.style.color = "#E8E8E8";
            resultDisplay.style.backgroundColor =  "black";
            //Btn cancella cambio colore scritta
            CancelBtn.style.color=" red";
    })

    sunLogo.addEventListener('click', ()=>{
        sunLogo.style.color = "#E8E8E8"
        //cambio background-color della calcolatrice
        section.style.backgroundColor = '#E8E8E8';
        //cambio colore dei Buttons
        NumbersAndOperator.forEach((buttons)=>{
            buttons.style.backgroundColor = "#E8E8E8";
            buttons.style.color = "black";
        });
        operatorBtn.forEach((buttons)=>{
            buttons.style.backgroundColor = "#BBBFCA";
        });
        //Btn cancella cambio colore scritta
        CancelBtn.style.color=" red";
        //Screen espressione cambio colore
        screenDisplay.style.color = "black";
        screenDisplay.style.backgroundColor = "#E8E8E8";
        //Screen Risultato cambio colore
        resultDisplay.style.color = "black";
        resultDisplay.style.backgroundColor =  "#E8E8E8";
        //Btn uguale cambio colore
        EqualBtn.style.backgroundColor = "#E8E8E8";
        EqualBtn.style.color = "black";
    });




