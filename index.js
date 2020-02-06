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

function validate() {
    // validates if the user enters an empty form
    var gender = document.getElementById("form").elements.namedItem("gender").value;
    var haveTitle = document.getElementById("form").elements.namedItem("haveTitle").value;

    if (gender == "" || haveTitle == "") {
        document.getElementById("result").innerHTML = "you forgot to choose options :("
    } else {
        generateName(gender, haveTitle);
    }
}

function generateName(gender, haveTitle) {  
    // generateName generates the random dog name
    if (gender == "male") {
        var name = MaleName();
    } else {
        var name = FemaleName();
    }

    if (haveTitle == "yes") {
        var title = Titles();
    } else {
        var title = "";
    }

    var dogName = title + " " + name;
    document.getElementById("result").innerHTML = dogName;
}

window.onload = function() {
    moveDog();
};