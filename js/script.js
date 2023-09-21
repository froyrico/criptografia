function obtenerDesplazamiento(clave) {
    var suma = 0;
    for (var i = 0; i < clave.length; i++) {
        suma += clave.charCodeAt(i);
    }
    return suma % 26;  
}

function cifrar(texto, desplazamiento) {
    var textoCifrado = "";
    for (var i = 0; i < texto.length; i++) {
        var charCode = texto.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) {
            textoCifrado += String.fromCharCode(((charCode - 65 + desplazamiento) % 26) + 65);
        } else if (charCode >= 97 && charCode <= 122) {
            textoCifrado += String.fromCharCode(((charCode - 97 + desplazamiento) % 26) + 97);
        } else {
            textoCifrado += texto[i];
        }
    }
    return textoCifrado;
}

function descifrar(textoCifrado, desplazamiento) {
    return cifrar(textoCifrado, 26 - desplazamiento);  // Utilizar el desplazamiento inverso
}

function cifrarMensaje() {
    var clave = document.getElementById("clave").value.toLowerCase();
    var mensaje = document.getElementById("mensaje").value;
    var desplazamiento = obtenerDesplazamiento(clave);
    var mensajeCifrado = cifrar(mensaje, desplazamiento);
    document.getElementById("resultado").innerText = "Mensaje cifrado: " + mensajeCifrado;
}

function descifrarMensaje() {
    var clave = document.getElementById("clave").value.toLowerCase();
    var mensajeCifrado = document.getElementById("mensaje").value;
    var desplazamiento = obtenerDesplazamiento(clave);
    var mensajeDescifrado = descifrar(mensajeCifrado, desplazamiento);
    document.getElementById("resultado").innerText = "Mensaje descifrado: " + mensajeDescifrado;
}