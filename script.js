const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

//Aqui hacemos un arreglo con su 

function bencriptar(){
    const Encriptado = encriptar(textArea.value)
    mensaje.value = Encriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}

function encriptar(textEncriptar){
    let llaves = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
    textEncriptar = textEncriptar.toLowerCase()

    for (let i=0; i < llaves.length; i++){
          if (textEncriptar.includes(llaves[i][0])){
            textEncriptar = textEncriptar.replaceAll(llaves[i][0], llaves[i][1])
        }

    }
    return textEncriptar
}

function bdesencriptar(){
    const Encriptado = desencriptar(textArea.value)
    mensaje.value = Encriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}

function desencriptar(textDesencriptar){
    let llaves = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
    textDesencriptar = textDesencriptar.toLowerCase()

    for (let i=0; i < llaves.length; i++){
          if (textDesencriptar.includes(llaves[i][1])){
            textDesencriptar = textDesencriptar.replaceAll(llaves[i][1], llaves[i][0])
        }

    }
    return textDesencriptar
}

function copiar(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = "";
}
