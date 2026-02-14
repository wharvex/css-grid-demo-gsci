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

function toggleNav(event) {
    var sidebar = document.getElementById("primary-nav-sidebar");
    var toggleButton = event.currentTarget;
    var isToggleButtonShowingNav = toggleButton.textContent.trim() === "Hide Nav";
    
    if (isToggleButtonShowingNav) {
        addClass(sidebar, "hidden");
        toggleButton.textContent = "Show Nav";
    } else {
        removeClass(sidebar, "hidden");
        toggleButton.textContent = "Hide Nav";
    }
}

console.log("Script loaded");
var toggleButton = document.getElementById("primary-nav-sidebar-button");
toggleButton.addEventListener("click", toggleNav);