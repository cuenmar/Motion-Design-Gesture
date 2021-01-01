var svgns = document.getElementById('total');

//Ejemplo de GESTO
//Los gestos suelen estar representados en círculos, que representan la punta de nuestros dedos
    var gest = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    gest.classList.add('gesture');
    svgns.appendChild(gest);

    var gestMax = 150;
    var gestMin = 50;
    var gestRadius = 50;

    var amount = gestMax - gestMin;
    var counter = 0;
    var incrementer = .1;
    var step = .0035;


/*function updateCircle() {
    //Ease out (Start fast, end slow)
    if(counter <= amount) {
        gestRadius += (1 / incrementer);
        incrementer += step;
        counter++;
        drawCircle();
        } else if(counter > amount) {
            counter = 0; 
            incrementer = -.1;
            step *= -1;
            updateCircle();
        }
} */

var velocity = 1;

function updateCircle() {
    if(gestRadius != gestMax || gestRadius != gestMin) {
        gestRadius += velocity;
        console.log(gestRadius);
        counter++;
        drawCircle()
    } else if(gestRadius == gestMax || gestRadius == gestMin) {
        velocity *= -1;
        updateCircle();
    }
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