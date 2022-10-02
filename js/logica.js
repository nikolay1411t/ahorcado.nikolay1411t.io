// variables

const empezar=document.getElementById("empezar")
const aggPalabra=document.querySelector("#aggPalabra")

const cajaDeAgg= document.getElementById("seccion-agg")
const cajaDeMenu=document.getElementById("seccion-menu")
const cajaDeAh= document.getElementById("seccion-ah")

const pizarron= document.querySelector("canvas").getContext("2d");

var palabraAletoria=["HOLA","JAVA","HTML","HALLOWE"];
var palabraSecreta="";
var letrasTecleadas=[];
var oportunidades= 8;
var letrasCorrectas= 0;

/*Sonidos*/
const botonAgg=document.querySelector(".btn-agg");
const botonAh =document.querySelector(".btn-ah");
const botonesah = document.querySelector(".btns-ah");

function sonidoBoton1(){
    empezar.innerHTML='<audio src="sonidos/SD_NAVIGATE_57.mp3" autoplay></audio>';
}
function sonidoBoton2(){
    botonAgg.innerHTML='<audio src="sonidos/SD_NAVIGATE_57.mp3" autoplay></audio>';
}
function sonidoBoton3(){
    botonAh.innerHTML='<audio src="sonidos/SD_NAVIGATE_57.mp3" autoplay></audio>';
}




//SECCION DE COMIENZO//
function añadirLetraIncorrecta(){
    oportunidades = oportunidades-1
    console.log(oportunidades);
}

function nueva_partida(){
    location.reload(false);
    comenzar();
}


function ganaste(){
    if(letrasCorrectas===palabraSecreta.length){
        const {value} =swal.fire({
            title:"Ganaste :)",
            width:"70%",
            icon:"success",
            confirmButtonText:"Jugar de nuevo",
            allowOutsideClick: false,
            allowEscapeKey: false,
            allowEnterKey: false,
            customClass: {
               //container: '...',
               //popup: '...',
               //header: '...',
               title: 'sat',
               //closeButton: '...',
               //icon: '...',
               //image: '...',
               //htmlContainer: '...',
               //input: '...',
               //inputLabel: '...',
               //validationMessage: '...',
              // actions: '...',
               //confirmButton: '...',
               //denyButton: '...',
               //cancelButton: '...',
               //loader: '...',
               //footer: '....',
               //timerProgressBar: '....',
               }}) 
            
            }
            }

function comenzar(){
    cajaDeMenu.style.display="none";
    cajaDeAh.style.display="flex";
    cajaDeAh.style.flexDirection="column";

    escogerPalabraSecreta();
    dibujarSeccionDePalabras()
    document.onkeydown=(e)=>{
        let letra = e.key.toUpperCase();
        if (CompararLetrasTecleadas(letra) && palabraSecreta.includes(letra)){
            for (let i=0; i<palabraSecreta.length; i++){
                if(palabraSecreta[i]===letra){
                    escribirLetraCorrecta(i);
                    console.log(letrasCorrectas);
                    ganaste();
                    
                } 
            }
        }else{
            añadirLetraIncorrecta(letra);
            escribirLetraIncorrecta(letra, oportunidades);
            dibujarMuñeco (oportunidades);
        }
    }
    }

function escogerPalabraSecreta(){
    let palabra= palabraAletoria[Math.floor(Math.random()*palabraAletoria.length)];
    palabraSecreta=palabra;
    console.log(palabraSecreta);
}

//SECCION AHORCADO//

function CompararLetrasTecleadas(key){
    let estado=false
    if (key>=65 && palabraSecreta.indexOf(key)||key<= 90 && palabraSecreta.indexOf(key)){
        letrasTecleadas.push(key)
        return estado
    } else {
        estado= true
        console.log(key)
        return estado
    }
}

//SECCION AGREGAR PALABRA

function agregar_palabra(){
    cajaDeMenu.style.display="none"
    cajaDeAgg.style.display="block"
}

function agregarYComenzar(){
    cajaDeMenu.style.display="none";
    cajaDeAgg.style.display="none";
    cajaDeAh.style.display="flex";
    cajaDeAh.style.flexDirection="column";
    let textarea=document.getElementById("palabraAgregada").value.toUpperCase();
    palabraAletoria.push(textarea);//push para enviar strings a un array
    textarea.value="";
    console.log(palabraAletoria);
    comenzar();
}

function volver_al_menu(){
    cajaDeMenu.style.display="flex";
    cajaDeAgg.style.display="none";
    cajaDeAh.style.display ="none";
    location.reload();
}


