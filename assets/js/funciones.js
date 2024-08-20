// segun la opcion se desarrolla las siguientes
import { codigo } from './codigo.js';

export function encriptar(stringEncriptado) {
    stringEncriptado = stringEncriptado.toLowerCase();
    for (let i = 0; i < codigo.length; i++) {
        if (stringEncriptado.includes(codigo[i][0])) {
            stringEncriptado = stringEncriptado.replaceAll(codigo[i][0], codigo[i][1]);
        }
    }
    return stringEncriptado;
}

export function desencriptar(stringDesencriptado) {
    stringDesencriptado = stringDesencriptado.toLowerCase();
    for (let i = 0; i < codigo.length; i++) {
        if (stringDesencriptado.includes(codigo[i][1])) {
            stringDesencriptado = stringDesencriptado.replaceAll(codigo[i][1], codigo[i][0]);
        }
    }
    return stringDesencriptado;
}

export function btnCopiar(segundotexto) {
    const textocopiado = segundotexto.value;
    navigator.clipboard.writeText(textocopiado);
}
