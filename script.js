const textArea=document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const botonEncriptar=document.querySelector(".btn-encriptar");
const botonDesencriptar=document.querySelector(".btn-desencriptar");
const botonCopiar=document.querySelector(".copiar");


/* La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat" */

function btnEncriptar(){
    const cadenaEncriptada = encriptar(textArea.value);
    mensaje.value=cadenaEncriptada;
    textArea.value="";
    mensaje.style.backgroundImage="none";
    botonDesencriptar.style.background="#D8DFE8";
    botonDesencriptar.style.color="#0A3871"
    botonEncriptar.style.background="#0A3871";    
    botonEncriptar.style.color="white";
    botonCopiar.style.background="#D8DFE8";
    botonCopiar.style.color="#0A3871";    
    
}

function btnDesencriptar(){
    const cadenaDesencriptada = desencriptar(textArea.value);
    mensaje.value=cadenaDesencriptada;
    textArea.value="";
    botonDesencriptar.style.background="#0A3871";
    botonDesencriptar.style.color="white";
    botonEncriptar.style.background="#D8DFE8";
    botonCopiar.style.background="#D8DFE8";
    botonEncriptar.style.color="#0A3871";
    botonCopiar.style.color="#0A3871";
}

function btnCopiar(){
    textArea.value = mensaje.value;
    mensaje.value = "";
    botonDesencriptar.style.background="#D8DFE8";
    botonDesencriptar.style.color="#0A3871"
    botonEncriptar.style.background="#D8DFE8";    
    botonEncriptar.style.color="#0A3871";
    botonCopiar.style.background="#0A3871";
    botonCopiar.style.color="white";
}

function encriptar(cadenaEncriptar){

    let arregloLlaves=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];

    cadenaEncriptar = cadenaEncriptar.toLowerCase();

    for(let i=0;i<arregloLlaves.length;i++){
        if(cadenaEncriptar.includes(arregloLlaves[i][0])){
            cadenaEncriptar=cadenaEncriptar.replaceAll(arregloLlaves[i][0],arregloLlaves[i][1]);
        }
    }
    return cadenaEncriptar;

}

function desencriptar(cadenaDesencriptar){

    let arregloLlaves=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];

    cadenaDesencriptar = cadenaDesencriptar.toLowerCase();

    for(let i=0;i<arregloLlaves.length;i++){
        if(cadenaDesencriptar.includes(arregloLlaves[i][1])){
            cadenaDesencriptar=cadenaDesencriptar.replaceAll(arregloLlaves[i][1],arregloLlaves[i][0]);
        }
    }
    return cadenaDesencriptar;

}
