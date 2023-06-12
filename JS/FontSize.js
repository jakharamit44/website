// Set the minimum and maximum font size you want to allow
const minFontSize = 16; // Change this value to your desired minimum font size
const maxFontSize = 30; // Change this value to your desired maximum font size

// Get the increase font icon element
var increaseFontIcon = document.getElementById("increase-font");

// Add an event listener to the increase font icon
increaseFontIcon.addEventListener("click", function () {
    // Get the elements you want to increase the font size of
    var elementsToIncrease = document.querySelectorAll(".AmitNavbar, .logo, .tabcontrol, div, body, h1, h2, h3, h4, h5, h6, button, p, span");

    // Loop through the elements and increase the font size
    elementsToIncrease.forEach(function (element) {
        var computedFontSize = window.getComputedStyle(element).getPropertyValue("font-size");
        var currentFontSize = parseFloat(computedFontSize);
        var newFontSize = currentFontSize + 2;

        if (newFontSize <= maxFontSize) {
            element.style.fontSize = newFontSize + "px";
        }
    });
});

// Get the decrease font icon element
var decreaseFontIcon = document.getElementById("decrease-font");

// Add an event listener to the decrease font icon
decreaseFontIcon.addEventListener("click", function () {
    // Get the elements you want to decrease the font size of
    var elementsToDecrease = document.querySelectorAll(".AmitNavbar, .logo, .tabcontrol, div, body, h1, h2, h3, h4, h5, h6, button, p, span");

    // Loop through the elements and decrease the font size
    elementsToDecrease.forEach(function (element) {
        var computedFontSize = window.getComputedStyle(element).getPropertyValue("font-size");
        var currentFontSize = parseFloat(computedFontSize);
        var newFontSize = currentFontSize - 2;

        if (newFontSize >= minFontSize) {
            element.style.fontSize = newFontSize + "px";
        }
    });
});
