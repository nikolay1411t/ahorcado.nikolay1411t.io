// EJERCICIO
function dibujarPalo(X,Y,x,y){
    pizarron.fillStyle= "black";
    pizarron.beginPath();
    pizarron.fillRect(X,Y,x,y);
}

function dibujarCabeza(X,Y,radio,color){
    pizarron.fillStyle=color;
    pizarron.beginPath();
    pizarron.arc(X,Y,radio,0,2*3.14)
    pizarron.fill();
}
function dibujarPies(){
    dibujarPalo(175,280,-10,10)
    dibujarPalo(165,290,-10,10)
    dibujarPalo(155,300,-10,10)
    dibujarPalo(185,280,10,10)
    dibujarPalo(195,290,10,10)
    dibujarPalo(205,300,10,10)
}

function dibujarMuñeco (pasos){
     if (pasos === 7){
        dibujarPalo(75,350,10,-250)
     } if ( pasos === 6){
        dibujarPalo(75,100,100,10)
     } if(pasos ===5){
        dibujarPalo(175,100,10,40)
     } if(pasos ===4){
        dibujarCabeza(180,170,40,"black")
        dibujarCabeza(180,170,35,"#00cbe6")
     } if(pasos ===3){
        dibujarPalo(175,210,10,70)
     } if(pasos ===2){
        dibujarPalo(175,240,45,10)
     } if(pasos ===1){
        dibujarPalo(175,240,-35,10)
     } if(pasos ===0){
        dibujarPies()
        swal.fire({
         title:"Perdiste :(",
         width:"70%",
         icon:"error",
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
          }
     })
     } 
    /*
    dibujarPalo(75,350,10,-250)
    dibujarPalo(75,100,100,10)
    dibujarPalo(175,100,10,40)
    dibujarCabeza(180,170,40,"black")
    dibujarCabeza(180,170,35,"#00cbe6")
    dibujarPalo(175,210,10,70)
    dibujarPalo(175,240,70,10)
    dibujarPalo(175,240,-70,10)
    dibujarPalo(175,280,-70,10)*/
}

 

//Dibujar SECCION DE PALABRAS

function dibujarSeccionDePalabras(){
    pizarron.lineWidth= 5; //para el grosor de las lineas
    pizarron.lineCap="round";
    pizarron.lineJoin="round";
    pizarron.fillStyle="black";
    pizarron.strokeStyle="black";

    dibujarPalo(75,350,200,10)
    let anchura = 350/palabraSecreta.length;
    for (let i=0; i<palabraSecreta.length;i++){
        pizarron.moveTo(10 +(anchura*i), 450)
        pizarron.lineTo(50 +(anchura*i), 450)
    }
    pizarron.stroke();
    pizarron.closePath(); 
}

function escribirLetraCorrecta(i){
    pizarron.font="bold 63px Rubik";
    pizarron.lineWidth= 5; //para el grosor de las lineas
    pizarron.lineCap="round";
    pizarron.lineJoin="round";
    pizarron.fillStyle="black";
    pizarron.strokeStyle="black";

    let anchura = 350/palabraSecreta.length;
    pizarron.fillText(palabraSecreta[i], 10 + (anchura*i),420, 50);
    pizarron.stroke();
    letrasCorrectas= letrasCorrectas+1;
}

function escribirLetraIncorrecta(letra, oportunidades){
    pizarron.font="bold 35px Rubik";
    pizarron.lineWidth= 5; //para el grosor de las lineas
    pizarron.lineCap="round";
    pizarron.lineJoin="round";
    pizarron.fillStyle="black";
    pizarron.strokeStyle="black";
    pizarron.fillText(letra,0 + (35*(9-oportunidades)), 500, 35);
    pizarron.stroke();
}

