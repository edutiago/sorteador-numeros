let numeroMaior = parseInt(document.getElementById("ate").value);
let quantidadeDeNumeros = parseInt(document.getElementById("quantidade").value);
let numeroMenor = parseInt(document.getElementById("de").value);
let numerosSorteados = [];
let numeroVerificador;

function escolherNumero(){
    return Math.floor(Math.random() * (numeroMaior - numeroMenor + 1) + numeroMenor);
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
    numeroMenor = document.getElementById("de").value;
    numeroMaior = document.getElementById("ate").value;
    quantidadeDeNumeros = document.getElementById("quantidade").value;

    // verifica inconsistencias nas escolhas dos numeros
        if ((numeroMaior == "") || (quantidadeDeNumeros == "") || (numeroMenor == "")){
        mensagem("Preencha todos os campos");
        return;
        } else { 
            //transformando as variaveis em números
            numeroMenor = parseInt(numeroMenor)
            numeroMaior = parseInt(numeroMaior)
            quantidadeDeNumeros = parseInt(quantidadeDeNumeros)

            if(numeroMenor > numeroMaior){
                mensagem("O numero escolhido no SEGUNDO CAMPO deve ser menor que o TERCEIRO CAMPO");
                return;
                } else {
                    if (numeroMaior - numeroMenor +1 < quantidadeDeNumeros){
                        mensagem("Quantidade de números sorteados maior que o quantidade total");
                        return;
                    } else {
                            // executa o sorteio após as verificações
                            for (let index = 0; index < quantidadeDeNumeros; index++) {
                                numeroVerificador = escolherNumero();
                                while (numerosSorteados.includes(numeroVerificador)){
                                    numeroVerificador = escolherNumero();
                                }
                                numerosSorteados.push(numeroVerificador);
                            } 
                                // Mensagem final
                                mensagem("Números sorteados: " + numerosSorteados.sort((a, b) => a - b));

                                // desabilita o botão de sorteio e habilita o botão de reinicio
                                desabilitarBotao("btn-sortear");
                                habilitarBotao("btn-reiniciar");                            
                            }
                    }
                }
    }

// função para reiniciar o jogo
function reiniciar() {
    document.getElementById("quantidade").value = "";
    document.getElementById("de").value = "";
    document.getElementById("ate").value = "";
    mensagem("Números sorteados:  nenhum até agora");
    numerosSorteados = [];
    desabilitarBotao("btn-reiniciar");
    habilitarBotao("btn-sortear");
}