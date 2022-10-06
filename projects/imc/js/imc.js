const calculateButton = document.getElementById('calculate');
const yourName = document.getElementById('name')
const yourHeight = document.getElementById('yourHeight');
const yourWeight = document.getElementById('yourWeight');
const result = document.getElementById('result');
const inputs = document.querySelectorAll('.input input');

function validate() {
    if (yourName.value == '' && yourHeight.value == '' && yourWeight.value == '') {
        result.innerText = 'Preencha todos os campos';
        setTimeout(() => {
            result.innerText = '';
          }, "1500");
    } else { 
        imc()
    }
}

function imc() {
    const formula = parseFloat(yourWeight.value / (yourHeight.value * yourHeight.value)).toFixed(1);
    let status = '';
    if(formula < 17) {
        status = `Você está <b>muito abaixo do peso</b>`
    } else if(formula < 18.49 ) {
        status = `Você está <b>abaixo do peso</b>`
    } else if (formula < 24.99) {
        status = `Você está no <b>peso NORMAL, continue assim!</b>`
    } else if (formula < 29.99) {
        status = `Você está <b>acima do peso</b>`
    } else if (formula < 34.99) {
        status = `Você está com <b>Obesidade 1</b>`
    } else if(formula < 39.99) {
        status = `Você está com <b>OBESIDADE II - SEVERA</b>`
    } else {
        status = `Você está com <b>OBESIDADE III - MÓRBIDA</b>`
    }
     result.innerHTML = `Olá, ${yourName.value}! Seu IMC é <b>${formula}</b></br> 
     O IMC de uma pessoa com peso normal é entre <b>18.5 </b> e <b>24,99</b>.</br> ${status}`
}

calculateButton.addEventListener('click', validate);