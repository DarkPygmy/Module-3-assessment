
function alertColor(evt) {
	evt.preventDefault();
        alert("My favorite color is Blue")
}

function alertPlace (evt) {
	evt.preventDefault();
        alert("My favorite place is heaven")
}

function alertRitual(evt) {
	evt.preventDefault();
        alert("Praying at night.")
}
let button1 = document.querySelector("#color")
let button2 = document.querySelector("#place")
let button3 = document.querySelector("#ritual")
button1.addEventListener('click', alertColor)
button2.addEventListener('click', alertPlace)
button3.addEventListener('click', alertRitual)
// I know there's a easier way of doing this, just finishing the assignment.