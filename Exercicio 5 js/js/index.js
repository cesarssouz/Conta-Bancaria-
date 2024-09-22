
var saldoconta = 100
var extrato = []


function usuario() {
    var user = prompt("Ola usuario, qual o seu nome?")
    if (!isNaN(user) || user === "") {
        alert("Porfavor, Insira seu nome")
        usuario()
    } else {
        alert("Bem vindo(a) " + user)
        inicio()
    }

}
function inicio() {

    var escolha = parseInt(prompt('Selecione uma opção 1) Saldo | 2)  Extrato | 3) Depósito  | 4) Saque | 5) Transferencia | 6) Sair '));

    switch (escolha) {
        case 1:
            senha();
            ver_saldo()
            break;
        case 2:
            senha()
            ver_extrato()
            break;
        case 3:
            senha()
            fazer_deposito()
            break;
        case 4:
            senha()
            fazer_saque()
            break;
        case 5:
            senha()
            transferencia()
            break;
        case 6:
            sair()
        default:
            erro()
            break
    }
}

function ver_saldo() {
    alert('Seu saldo atual é: ' + saldoconta);
    inicio();
}
function senha() {
    var senha = parseInt(prompt("Olá, por favor insira sua senha"))
    if (senha === 3589) {
        alert("Acesso concecido")
    } else {
        alert("Senha incorreta ")
        inicio()
    }
}

function fazer_deposito() {
    var deposito = parseFloat(prompt('Qual o valor para depósito?'));
    if (isNaN(deposito) || deposito === '') {
        alert('Por favor, informe um número:');
        fazer_deposito();
    } else {
        saldoconta += deposito;
        ver_saldo();
    }
}

function fazer_saque() {
    var saque = parseFloat(prompt('Qual o valor para saque? seu saldo atual é ' +saldoconta));
    if (isNaN(saque) || saque === '') {
        alert('Por favor, informe um valor:');
        fazer_saque();
    } else if (saque <= saldoconta) {
        saldoconta -= saque;
        extrato.push(`Saque de R$ ${saque.toFixed(2)}`)
        ver_saldo()
    } else if (saque <= 0) {
        alert("Saque não autorizado")
        fazer_saque()
    } else {
        alert("Saque não autorizado")
        fazer_saque()
    }

}
function ver_extrato() {
    if (extrato.length === 0) {
        alert("Nenhuma transação registrada.");
    } else {
        alert("Extrato:\n" + extrato.join('\n'));
    }
    inicio();

}
function transferencia() {
    var numcontas = parseInt(prompt("Insira a conta que você quer transferir | 1) Mãe | 2) Pai | 3) Parceiro "))

    if (numcontas === 1 || numcontas === 2 || numcontas === 3) {
        var transferir = parseFloat(prompt("Sucesso! Quanto você quer transfeir? seu saldo é " + saldoconta.toFixed(2)))
        if (isNaN(transferir) || transferir === "" || transferir <= 0) {
            alert("Operação não autorizada")
            inicio()
        } else if (transferir > saldoconta) {
            alert("Operação não autorizada")
            inicio()
        } else {
            saldoconta -= transferir
            extrato.push(`Transferência de R$ ${transferir.toFixed(2)}`);
            alert(`Transferência de R$ ${transferir.toFixed(2)} realizada com sucesso!`);
            ver_saldo();
        }
    } else {
        alert("Operação não autorizada")
        inicio()
    }


}

function erro() {
    alert('Por favor, informe um número entre 1 e 6');
    inicio();
}

function sair() {
    var confirma = confirm('Você deseja sair?');
    if (confirma) {
        window.close();
    }
}
usuario()