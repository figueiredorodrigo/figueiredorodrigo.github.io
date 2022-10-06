function insert(num) {
        const numero = document.getElementById('resultado');
        numero.innerHTML += num;
}

function clean() {
    const clean = document.getElementById('resultado');
    clean.innerHTML = '';
}

function back() {
    const back = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = back.slice(0, back.length -1);
}

function calc() {
    const calculate = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado') == '' ? document.getElementById('resultado').innerHTML = "Insira um valor" : document.getElementById('resultado').innerHTML = eval(calculate)
}