function addClass(element, add) {
    if (element.className === "") {
        element.className = add;
    } else {
        element.className += " " + add;
    }
}

// Adapted from https://stackoverflow.com/a/6976865
function removeClass(element, remove) {
    var newClassName = "";
    var i;
    var classes = element.className.split(" ");
    for (i = 0; i < classes.length; i++) {
        if (classes[i] !== remove) {
            newClassName += classes[i] + " ";
        }
    }
    element.className = newClassName;
}

console.log("Script loaded");

