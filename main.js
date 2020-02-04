function moveDog() {
    var dog = document.getElementById("dog");
    var position = 0;

    setInterval(function() {
        rightEdge = window.innerWidth - 100; //100 is the size of the dog
        if (position <= rightEdge) {
            position++;
            dog.style.left = position + "px";
        }
    }, 1);

}

window.onload = function() {moveDog();};