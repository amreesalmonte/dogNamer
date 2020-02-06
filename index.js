function moveDog() {
    // animates the dog and restarts it at position once it reaches end of page
    var dog = document.getElementById("dog");
    var dogWidth = dog.clientWidth;
    var position = 0;
    var change = 0;
    setInterval(function() {
        //variable keeps track when the dog should reset at start of page
        rightEdge = window.innerWidth; //100 is the size of the dog
        if (change == 0) {
            position++;
            dog.style.left = position + "px";
            if (position == rightEdge) {
                change = 1;
            }
        } else if (change == 1) {
            position = -dogWidth;   //resets image back to left edge of screen
            dog.style.left = position + "px";
            change = 0;
        }
    }, 30);
}

function readFiles () {
    // reads text files that contain the names and titles of dogs
    var fs = require('fs');
    var array = fs.readFileSync('files/gNames.txt').toString().split("\n");
    for(i in array) {
        console.log(array[i]);
}
}

window.onload = function() {
    moveDog();
    readFiles();
};