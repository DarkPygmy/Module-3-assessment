console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("Form submitted successfully");
}

function mouseOverButton(evt) {
	evt.preventDefault();
	
	alert("Always do the best you can!");
}

let form = document.querySelector('#contact');
let button = document.querySelector('#button')

button.addEventListener('mouseover', mouseOverButton)
form.addEventListener('submit', handleSubmit);