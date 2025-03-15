//Considerações: O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Digite o nome de um amigo (um por vez), visualize a lista dos nomes e depois sorteie um amigo.';

//variáveis
let amigos = [];
let listaAmigosSorteados = [];

//digitar nome de cada amigo e adicionar o amigo na lista
function adicionarAmigo() {
    let nome = document.getElementById('amigo').value;
    if (campoVazio(nome)) {
        return;
    }

    amigos.push(nome);
    console.log(amigos); 
    document.getElementById('amigo').value = '';

    exibirListaAmigos();
}

//teste de verificação de campo vazio
function campoVazio(nome) {
    if (nome.trim() === "") {
        alert('Por favor, insira um nome');
        return true;
    }
    return false;
}

//exibir lista de amigos na tela
function exibirListaAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";

    amigos.forEach(amigo => {
        let item = document.createElement('li');
        item.textContent = amigo;
        lista.appendChild(item);
    });
}

//sortear um dos amigos e colocar o amigo sorteado em um lista
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Não há mais amigos na lista de Amigos");
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceSorteado];
    
    console.log("Nome sorteado:", amigoSorteado);
    console.log("Índice do nome na lista original:", indiceSorteado);

    listaAmigosSorteados.push(amigoSorteado);
    amigos.splice(indiceSorteado, 1);

    exibirResultado(amigoSorteado);
    document.getElementById('listaAmigos').style.display = 'none';
}

//exibir amigo sorteado na tela
function exibirResultado(amigoSorteado) {
    let resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = "";

    let itemResultado = document.createElement('li');
    itemResultado.textContent = 'O amigo secreto sorteado é: ' + amigoSorteado;
    resultadoElement.appendChild(itemResultado);
}



