const display = document.querySelector("#display");

const addButtonValue = (value) => {
	display.value += value
}

const clearDisplay = () => {
    display.value = "";
}

const calculate = () => {
	let result = eval(display.value);
	if (isNaN(result)) {
		alert("Erreur : Calcul impossible");
        display.value = "";
        return;
	}
	else if (result == Infinity || result == -Infinity) {
		alert("Erreur : Division par zéro");
        display.value = "";
        return;
	}
	else {
		display.value = result
	}
}

const deleteLastValue = () => {
	display.value = display.value.slice(0, -1);
}