// this file contains all the functions that randomly chooses a name and title from a list

function FemaleName() {
    var names = ["cupcake", "apple", "daisy", "luna", "coco", "mimi", "lulu", "pearl", "ruby", "suki", "sasha", "mocha", "pepper", "pumpkin", "jo", "nana", "winnie"];

    var name = names[Math.floor(Math.random()* names.length)]; //randomly chooses a name from array

    return name;
}

function MaleName() {
    var names = ["bob", "greg", "bowser", "max", "charlie", "cooper", "buddy", "milo", "bear", "teddy", "jax", "finn", "jack", "moose", "loki", "mickey", "clipton", "bruno"];

    var name = names[Math.floor(Math.random()* names.length)]; //randomly chooses a name from array

    return name;
}

function Titles() {
    var titles = ["mayor", "officer", "doctor", "detective", "chief", "your majesty", "your highness"];

    var title = titles[Math.floor(Math.random()* titles.length)]; //randomly chooses a name from array

    return title;
}

