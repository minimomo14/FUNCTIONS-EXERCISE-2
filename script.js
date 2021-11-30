//hoisting/scope/closures/IIFE

(function() {
var position;
position = 0;

// Function Section
function moveForward(forward){

    position = position + forward
//    console.log("The move forward position is ", position);
    return position;
    }
    
function moveBackward(backward) {
    position = position - backward
//    console.log("The move backward postion is", position);
    return position;
}

function printLocation(position){
    console.log("The final position is ",position)
}

function moveAlong(direction,units){
    if(direction === "forward"){
        position = position + units;
    }
    else {
        position = position - units;
    }
    return position;
}

// Main Logic
moveForward(5);
moveBackward(3)
printLocation(position);
moveForward(-10);
moveBackward(-5);
printLocation(position);

position = 0;
moveAlong("forward",5);
moveAlong("backward",3);
console.log("moveAlong function gives",position);

moveAlong("forward",-10)
moveAlong("backward",-5)
console.log("moveAlong function gives ",position);

})();

