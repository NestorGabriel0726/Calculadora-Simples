function somar(numero1, numero2){
    return numero1 + numero2
};

function subtrair(numero1, numero2){
    return numero1 - numero2
};

function multiplicar(numero1, numero2){
    return numero1 * numero2
};

function dividir(numero1, numero2){
    return numero1 / numero2
};

function showSucessMessage(result, operation, num1, num2){
    resultado.textContent = `O resultado da ${operation} entre ${num1} e ${num2} é igual a ${result}`;
    resultado.classList.remove('error');
    resultado.classList.add('success');
    resultado.style.display = 'block';
};

let num1Input = document.getElementsByClassName('numeroOne')[0];
let num2Input = document.getElementsByClassName('numeroTwo')[0];
let op = document.getElementById('ope');

let btnC = document.getElementById('btn__C');
let btnL = document.getElementById('btn__L')

var resultado = document.getElementById('result');

btnC.addEventListener('click', function(){
    let num1 = parseFloat(num1Input.value);
    let num2 = parseFloat(num2Input.value);
    let operation = op.value;

    if (isNaN(num1) || isNaN(num2)) {
        resultado.textContent = 'Por favor insira números válidos';
        resultado.classList.remove('success');
        resultado.classList.add('error');
        resultado.style.display = 'block';
        return;
    };

    let result;

    switch (operation) {
        case 'S':
            result = somar(num1, num2);
            showSucessMessage(result, 'soma', num1, num2);
            break;
        case 'Sub':
            result = subtrair(num1, num2);
            showSucessMessage(result, 'subtração', num1, num2);
            break; 
        case 'Multi':
            result = multiplicar(num1, num2);
            showSucessMessage(result, 'multiplicação', num1, num2);
            break;       
        case 'Divi':
            if (num2 !== 0) {
                result = dividir(num1, num2);
                showSucessMessage(result, 'divisão', num1, num2);
            } else {
                resultado.textContent = `Erro: Não existe divisão por zero`;
                resultado.classList.remove('success');
                resultado.classList.add('error');
                resultado.style.display = 'block';
            };
            break;   

        default:
            resultado.textContent = `Erro: Operação inválida`;
            resultado.classList.remove('success');
            resultado.classList.add('error');
            resultado.style.display = 'block';
            break;    
    };
});

btnL.addEventListener('click', function(){
    num1Input.value = ' ';
    num2Input.value = ' ';
    op.value = 'N';
    resultado.style.display = 'none';
});