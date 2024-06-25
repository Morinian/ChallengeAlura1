//codificação
function codificaTexto(dedTexto) {
    let textoCodificado = dedTexto.split('').map(char => String.fromCharCode(char.charCodeAt(0) + 1)).join('');
    return textoCodificado;
}

//decodificação
function decodificaTexto(codTexto) {
    let textoDecodificado = codTexto.split('').map(char => String.fromCharCode(char.charCodeAt(0) - 1)).join('');
    return textoDecodificado;
}

//----------------
//Funções dos botões

function pegarTexto() {
    let textoDoInput = document.querySelector('textarea').value;
    let codTexto = codificaTexto(textoDoInput);
    atualizarInterface(codTexto);
}
function pegarTextoCod() {
    let textoDoInput = document.querySelector('textarea').value;
    let deCodTexto = decodificaTexto(textoDoInput);
    atualizarInterface(deCodTexto);
}

//----------------
//Mostrar resultado
function atualizarInterface(texto) {
    let campo = document.querySelector('h3');
    campo.innerHTML = "";

    let result = document.querySelector('p');
    result.innerHTML = texto;

    let img = document.querySelector('.resultado img');
    img.style.display = "none"; 

    let copyButton = document.getElementById('copyButton');
    copyButton.style.display = "block";
}

//----------------
// Copiar texto
function copiarTexto() {
    let textoParaCopiar = document.querySelector('.resultado p').innerText;
    navigator.clipboard.writeText(textoParaCopiar).then(() => {
        alert("Texto copiado!");
    }).catch(err => {
        console.error("Erro ao copiar texto: ", err);
    });
}