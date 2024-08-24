// Selecciona los elementos con las clases correspondientes
const textArea = document.querySelector(".texto__entrada");
const mensaje = document.querySelector(".encriptado__mensaje");
const btnCopiar = document.querySelector(".encriptado__boton-copiar");

// Filtra los caracteres no permitidos en el textarea
textArea.addEventListener("input", () => {
    const value = textArea.value;
    const filteredValue = value.replace(/[^a-z\s]/g, ''); 
    textArea.value = filteredValue;
});

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
    btnCopiar.style.display = "block";
}

function copiar() {
    mensaje.select();
    
    try {
        document.execCommand('copy');
        alert('Texto copiado al portapapeles');
    } catch (err) {
        console.error('Error al copiar el texto:', err);
    }
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a","ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }   
    }
    return stringEncriptada;
}

function btnDesencriptar() {
    const textoEncriptado = desencriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a","ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }   
    }
    return stringDesencriptada;
}
