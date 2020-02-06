// this file contains all the functions that randomly chooses a name and title from a list

function FemaleName() {
    var names = ["anne", "cupcake", "apple"];

    var name = names[Math.floor(Math.random()* names.length)]; //randomly chooses a name from array

    return name;
}

function MaleName() {
    var names = ["bob", "greg", "bowser"];

    var name = names[Math.floor(Math.random()* names.length)]; //randomly chooses a name from array

    return name;
}

function Titles() {
    var titles = ["mayor", "officer", "doctor", "detective"];

    var title = titles[Math.floor(Math.random()* titles.length)]; //randomly chooses a name from array

    return title;
}

