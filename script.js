const display = document.querySelector("#display");

const addButtonValue = (value) => {
	display.value += value
}

const clearDisplay = () => {
    display.value = "";
}

const calculate = () => {
	display.value = eval(display.value);
}