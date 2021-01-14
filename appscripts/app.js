// Tap UX gesture in Javascript
var svgns = document.getElementById('total');
var cstyle = ['cs1', 'cs2'];
var c = [];
for(var i = 0; i < 2; i++) {
    c[i] = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c[i].classList.add(cstyle[i]);
    svgns.appendChild(c[i]);
} 
    
    var control = true;
    //Velocity and easing
    var ease = 0.1;
    var tOut = 10;
     //Scale
     var rMin = [70, 50];
     var rMax = [100, 120];
     var r = [rMax[0], rMax[1]];    
     //Opacity
     var oMin = [0, 0];
     var oMax = [0.6, 0.7];
     var o = [oMin[0], oMin[1]];

function updateCircle() {
    if(r[0] != rMin[0] && control){
        decrease();
        }
    else if (r[0] != rMax[0] && !control) {
        increase();
        }
    }

function decrease() {
    var d = r[0] - rMin[0];
    for(var i = 0; i < 2; i++) {
        r[i] -= ((r[i] - rMin[i]) *ease)
        o[i] += ((oMax[i] - o[i]) * ease)
    }
    if(d < 0.1) {
        r[0] = rMin[0];
        o[0] = oMax[0];
        control = false;
    }  
    drawCircle(); 
}

function increase() {
    var d = rMax[0] - r[0];
    for(var i = 0; i < 2; i++) {
        r[i] += ((rMax[i] - r[i]) *ease)
        o[i] -= ((o[i] - oMin[i]) * ease)
    }
    if(d < 0.1) {
        for(var i = 0; i < 2; i++) {
        r[0] = rMax[0];
        o[i] = oMin[1];
        }
        location.reload();
    }
    drawCircle();
}

function drawCircle() {  
    for(var i = 0; i < 2; i++) {  
        c[i].setAttribute('cx', 250);
        c[i].setAttribute('cy', 250);
        c[i].setAttribute('r', r[i]);
        c[i].setAttribute("fill-opacity", o[i]);
        c[i].setAttribute("stroke-opacity", o[i]); 
    }
    setTimeout( function(){
        updateCircle();
    }, tOut); 
}

var gesture = document.getElementById("total");
gesture.addEventListener("click", drawCircle);
