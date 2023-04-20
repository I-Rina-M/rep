
//display greeting
let welcomeEl = document.getElementById('welcome-el')
welcomeEl.innerText = "Welcome, friend"
welcomeEl.innerText += " :)"

let count = 0 // intialize the count as 0

let countEl = document.getElementById("count-el") //allows javaScript to change elements in HTML
// increment the count variable when the button is clicked (log it out)
function increment() {
	count += 1
	//console.log(count)
	countEl.innerText = count // change the count-el in the HTML to reflect the new count
}

let saveEl = document.getElementById('save-el')
function save() {
	let countStr = count + ' - '
	saveEl.textContent += countStr
	count = 0
	countEl.innerText = 0
}

function rset() {
	saveEl.innerText = 'Previous entries: '
	count = 0
}
