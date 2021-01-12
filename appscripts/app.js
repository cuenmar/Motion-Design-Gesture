var svgns = document.getElementById('total');

//Ejemplo de GESTO
//Los gestos suelen estar representados en círculos, que representan la punta de nuestros dedos
    var c1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c1.classList.add('cs1');
    svgns.appendChild(c1);

    var c2 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c2.classList.add('cs2');
    svgns.appendChild(c2);   
    
    //Scale
    var r1Min = 70;
    var r1Max = 100;
    var r2Max = 120;
    var r1 = r1Max;
    var r2 = r2Max;
    //Opacity
    var o1Min = 0.3;
    var o1Max = 0.6;
    var o1 = o1Min;

    var control = true;
    //Velocity and easing
    var ease = 0.1;
    var tOut = 10;


function updateCircle() {
    if(r1 != r1Min && control){
        decrease();
        }
    else if (r1 != r1Max && !control) {
        increase();
        }
    }

function decrease() {
    var d = r1 - r1Min;
    var v =  d * ease;
    r1 -= v;
    var t = (o1Max - o1) * ease;
    o1 += t;
    r2 = r2 * 0.9;
    if(d < 0.1) {
        r1 = r1Min;
        r2 = r1Min;
        o1 = o1Max;
        control = false;
    }
    drawCircle();
}

function increase() {
    var d = r1Max - r1;
    var v = d * ease;
    r1 += v;
    var t = (o1 - o1Min) * ease;
    o1 -= t;
    if(d < 0.1) {
        r1 = r1Max;
        o1 = o1Min;
    }
    drawCircle();
}



function drawCircle() {    
    c1.setAttribute('cx', 250);
    c1.setAttribute('cy', 250);
    c1.setAttribute('r', r1);
    c1.setAttribute("fill-opacity", o1);
    c2.setAttribute('cx', 250);
    c2.setAttribute('cy', 250);
    c2.setAttribute('r', r2);
    c2.setAttribute("stroke-opacity", o1);
    console.log(r1);
    setTimeout( function(){
        updateCircle();
       }, tOut);        
}


drawCircle();