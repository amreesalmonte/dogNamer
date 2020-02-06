function moveDog() {
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

window.onload = function() {moveDog();};