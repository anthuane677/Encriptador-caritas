// dependiendo la opcion a escoger, se ejecutara una accion
import { encriptar, desencriptar, btnCopiar } from './funciones.js';

const primertexto = document.getElementById("tex1");
const segundotexto = document.getElementById("textnuevo");

window.btnEncriptar = function() {
    const textoEncriptado = encriptar(primertexto.value);
    segundotexto.value = textoEncriptado;
    primertexto.value = "";
}

window.btnDesencriptar = function() {
    const textoDesencriptado = desencriptar(primertexto.value);
    segundotexto.value = textoDesencriptado;
    primertexto.value = "";
}

window.btnCopiar = function() {
    btnCopiar(segundotexto);
}
