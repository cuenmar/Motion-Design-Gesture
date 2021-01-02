var svgns = document.getElementById('total');

//Ejemplo de GESTO
//Los gestos suelen estar representados en círculos, que representan la punta de nuestros dedos
    var gest = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    gest.classList.add('gesture');
    svgns.appendChild(gest);

    var gestMax = 250;
    var gestMin = 50;
    var gestRadius = gestMax;

    var control = true;
    var incrementer = .1;
    var step = .0035;


function updateCircle() {
    //Ease out (Start fast, end slow)
    if((gestRadius >= gestMin) && control) {        
        control = true;
        decrease();
        } else if((gestRadius <= gestMax) && !control) {
            control = false;
            increase();
        }
}

function decrease() {
    gestRadius -= (1 / incrementer);
    incrementer -= step;
    console.log("decrementar");
    drawCircle();
}

function increase() {
    gestRadius += (1 / incrementer);
    incrementer += step;
    console.log("incrementar");
    drawCircle();
}

function drawCircle() {    
    gest.setAttribute('cx', 250);
    gest.setAttribute('cy', 250);
    gest.setAttribute('r', gestRadius);
    setTimeout( function(){
        updateCircle();
       }, 10);        
}

drawCircle();