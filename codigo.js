// Seleciona todos os elementos HTML com a classe "formula" e os armazena em uma variável.
const botoes = document.querySelectorAll(".formula");

// Seleciona o elemento HTML com o id "put-in" e o armazena em uma variável.
const tela = document.getElementById("put-in");

// Seleciona todos os elementos HTML com a classe "icone" e os armazena em uma variável.
const icones = document.querySelectorAll(".icone");

// Seleciona o botão com o id "apaga" e o armazena em uma variável.
const btnC = document.getElementById("apaga");

// Seleciona o botão com o id "del" e o armazena em uma variável.
const btndel = document.getElementById("del");

// Seleciona o botão com o id "igual" e o armazena em uma variável.
const btnigual = document.getElementById("igual");



// Função para inserir o texto do botão clicado no visor da calculadora.
function inserir(num) {
    tela.value += num; // Concatena o texto do botão clicado ao texto atual do visor.
}

// Função para limpar o visor da calculadora.
function limpar() {
    tela.value = ""; // Define o valor do visor como uma string vazia.
}

// Função para deletar o último caractere do visor da calculadora.
function deletar() {
    tela.value = tela.value.slice(0, - 1); // Remove o último caractere do texto do visor.
}

// Função para calcular a expressão presente no visor da calculadora e exibir o resultado.
function calculo() {
    tela.value = eval(tela.value); // Avalia a expressão presente no visor e exibe o resultado.
    // Observação: O uso de eval() pode ser arriscado em ambientes não confiáveis devido a problemas de segurança.
}

// Adiciona um evento de clique a cada botão com a classe "formula".
botoes.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (btn.innerText === "." && tela.value.includes(".")){
            return;
        }
        inserir(btn.innerText); // Ao clicar em um botão, seu texto é inserido no visor.
    });
});

// Adiciona um evento de clique a cada ícone com a classe "icone".
icones.forEach((icon) => {
    icon.addEventListener("click", () => {
        inserir(icon.innerText); // Ao clicar em um ícone, seu texto é inserido no visor.
    });
});

// Adiciona um evento de clique ao botão de limpar.
btnC.addEventListener("click", () => {
    limpar(); // Ao clicar no botão de limpar, o visor é limpo.
});

// Adiciona um evento de clique ao botão de deletar.
btndel.addEventListener("click", () => {
    deletar(); // Ao clicar no botão de deletar, o último caractere do visor é removido.
});

// Adiciona um evento de clique ao botão de igual.
btnigual.addEventListener("click", () => {
    calculo(); // Ao clicar no botão de igual, a expressão presente no visor é calculada e exibida.
});


