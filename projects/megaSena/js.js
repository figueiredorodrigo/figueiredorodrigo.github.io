const numerosApostados = [];
let valorAposta = 0;
let qtdAcertos = 0;
const resultado = [];
const btnApostar = document.getElementById('btnApostar');
btnApostar.disabled = true;

// Get the theme toggle input
const themeToggle = document.querySelector(
    '.switch input[type="checkbox"]'
  );
  // Function that will switch the theme based on the if the theme toggle is checked or not
  function switchTheme(e) {
    if (e.target.checked) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
  }
  // Add an event listener to the theme toggle, which will switch the theme
  themeToggle.addEventListener("change", switchTheme, false);

  // Get the current theme from local storage
const currentTheme = localStorage.getItem("theme");
// If the current local storage item can be found
if (currentTheme) {
  // Set the body data-theme attribute to match the local storage item
  document.documentElement.setAttribute("data-theme", currentTheme);
// If the current theme is dark, check the theme toggle
  if (currentTheme === "dark") {
    themeToggle.checked = true;
  }
}

sortearNumeros();
function sortearNumeros() {
    for (i = 0; i < 6; i++) {
        let numeroSorteado = Math.round(Math.random() * 59 + 1);


        // verifica. Se existe o numero na lista, sorteia um novo
        while(resultado.includes(numeroSorteado)) {
            let numeroSorteado = Math.round(Math.random() * 59 + 1);
        }
        resultado.push(numeroSorteado);
    }
}

function selecionarNumeros(numero) {
    if (numerosApostados.length >= 0 && numerosApostados.length < 15) {
        numerosApostados.push(numero);
    

        // desabilita o número que você já escolheu
        desabilitarNumeroEscolhido(numero);

        if (numerosApostados.length > 5) {
            btnApostar.disabled = false;

            // mostra o valor da aposta
            valorDaAposta();

        }

        // mostrar quantidade de numeros apostados
        const qtdApostas = document.getElementById('qtdNumeros');
        qtdApostas.innerHTML = "<p>Qtd Numeros</p><p class='valor'>" + numerosApostados.length + "</p>";
    }
}

function desabilitarNumeroEscolhido(numero) {
    document.getElementById('num_' + numero).disabled = true;
    document.getElementById('num_' + numero).style.background = "#009e4c";
    document.getElementById('num_' + numero).style.color = "#fff";
}

function valorDaAposta() {
    switch(numerosApostados.length) {
        case 6: 
            valorAposta = "R$ 4,50"
            break;
        case 7: 
            valorAposta = "R$ 31,50"
            break;
        case 8: 
            valorAposta = "R$ 126,00"
            break;
        case 9: 
            valorAposta = "R$ 378,00"
            break;
        case 10: 
            valorAposta = "R$ 945,00"
            break;
        case 11: 
            valorAposta = "R$ 2.079,0"
            break;
        case 12: 
            valorAposta = "R$ 4.158,00"
            break;
        case 13: 
            valorAposta = "R$ 6.006,00"
            break;
        case 14: 
            valorAposta = "R$ 10.510,00"
            break;
        case 15: 
            valorAposta = "R$ 17.517,50"
            break;
        default:
            valorAposta = "R$ 0,00"
            break;
    }
    const divValorAposta = document.getElementById('valor');
    divValorAposta.innerHTML = "<p>valor da aposta</p><p class='valor'>" + valorAposta + "</p>";
}

function apostar() {
    for(i = 0; i < numerosApostados.length; i++) {
        if (resultado.includes(numerosApostados[i])) {
            qtdAcertos++;
        }
    }

    const divResultado = document.getElementById('resultado');
    for (i = 0; i < resultado.length; i++) {
        divResultado.innerHTML += "<div class='resultadoCircle'>" + resultado[i] +"</div>"
    }

    let divAcertos = document.getElementById('acertos');
    divAcertos.innerHTML = "<p>acertos</p><p class='valor'>" + qtdAcertos + "</p>"; 

    desabilitarTodosNumeros();

    document.getElementById('btnReiniciar').style.display = "inline";

}

function desabilitarTodosNumeros() {
    for (i = 1; i <= 60; i++){
        document.getElementById('num_' + i).disabled = true;
    }
    document.getElementById('btnApostar').disabled = true;
}

let btn = document.getElementById('btnReiniciar');
btn.addEventListener("click", function() {
    location.reload();
});

function switchTheme(e) {
    if (e.target.checked) {
      document.documentElement.setAttribute("data-theme", "dark");
      
      // Set the user's theme preference to dark
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      
      // Set the user's theme preference to light
      localStorage.setItem("theme", "light");
    }
}

