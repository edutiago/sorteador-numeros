let numeroMaior = document.getElementById("ate");
let quantidadeDeNumeros = document.getElementById("quantidade");
let numeroMenor = document.getElementById("de");
let numerosSorteados = [];
let numeroVerificador;

function escolherNumero(){
    return parseInt(Math.random()*(Number(numeroMaior.value) - Number(numeroMenor.value) + 1)) + Number(numeroMenor.value);
}

// função de desabilitar botão
function desabilitarBotao(id){
    document.getElementById(id).classList.remove("container__botao")
    document.getElementById(id).disabled = true;
    document.getElementById(id).classList.add("container__botao-desabilitado")
}

// função de habilitar botão
function habilitarBotao(id){
    document.getElementById(id).classList.add("container__botao")
    document.getElementById(id).disabled = false;
    document.getElementById(id).classList.remove("container__botao-desabilitado")
}

// funcão para alterar a mensagem
function mensagem(texto){
    document.querySelector("#resultado label").textContent = texto;
}

function sortear() {
    numeroMenor = document.getElementById("de");
    numeroMaior = document.getElementById("ate");
    quantidadeDeNumeros = document.getElementById("quantidade");

    // verifica inconsistencias nas escolhas dos numeros
        if ((Number(numeroMaior.value) == "") || (Number(quantidadeDeNumeros.value) == "") || (Number(numeroMenor.value) == "")){
        mensagem("Preencha todos os campos");
        return;
        } else { 
            if(Number(numeroMenor.value) > Number(numeroMaior.value)){
                mensagem("O numero escolhido no SEGUNDO CAMPO deve ser menor que o TERCEIRO CAMPO");
                return;
                } else {
                    if (Number(numeroMaior.value) - Number(numeroMenor.value) +1 < Number(quantidadeDeNumeros.value)){
                        mensagem("Quantidade de números sorteados maior que o quantidade total");
                        return;
                    }
                }
    }

    // executa o sorteio após as verificações
    for (let index = 0; index < quantidadeDeNumeros.value; index++) {
        numeroVerificador = escolherNumero()

        while(numerosSorteados.includes(Number(numeroVerificador))){
            numeroVerificador = escolherNumero()
        }

        numerosSorteados.push(numeroVerificador)        
    }

    // Mensagem final
    mensagem("Números sorteados: " + numerosSorteados);

    // desabilita o botão de sorteio e habilita o botão de reinicio
    desabilitarBotao("btn-sortear");
    habilitarBotao("btn-reiniciar");
}

    // função para reiniciar o jogo
function reiniciar() {
    numeroMaior.value = "";
    numeroMenor.value = "";
    quantidadeDeNumeros.value = "";
    mensagem("Números sorteados:  nenhum até agora");
    numerosSorteados = [];
    desabilitarBotao("btn-reiniciar");
    habilitarBotao("btn-sortear");
}