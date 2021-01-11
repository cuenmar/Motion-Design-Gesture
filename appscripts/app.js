var svgns = document.getElementById('total');

//Ejemplo de GESTO
//Los gestos suelen estar representados en círculos, que representan la punta de nuestros dedos
    var gest = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    gest.classList.add('gesture');
    svgns.appendChild(gest);

    var max = 250;
    var min = 50;
    var r = max;

    var control = true;
    var ease = 0.1;
    var tOut = 10;


function updateCircle() {
    if(r != min){
        var v = (r - min) * ease;
        r -= v;
        console.log(r);
        drawCircle();
    }
}

function drawCircle() {    
    gest.setAttribute('cx', 250);
    gest.setAttribute('cy', 250);
    gest.setAttribute('r', r);
    setTimeout( function(){
        updateCircle();
       }, tOut);        
}

drawCircle();