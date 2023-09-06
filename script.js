const convertCtoFButton = document.getElementById("convertCtoF");
const celsiusInput = document.getElementById("celsius");
const resultCtoFElement = document.getElementById("resultCtoF");

const convertFtoCButton = document.getElementById("convertFtoC");
const fahrenheitInput = document.getElementById("fahrenheit");
const resultFtoCElement = document.getElementById("resultFtoC");

convertCtoFButton.addEventListener("click", () => {
    const celsius = parseFloat(celsiusInput.value);
    if (!isNaN(celsius)) {
        const fahrenheit = celsiusToFahrenheit(celsius);
        resultCtoFElement.textContent = `${celsius}°C is ${fahrenheit.toFixed(2)}°F`;
    } else {
        resultCtoFElement.textContent = "Please enter a valid temperature in Celsius.";
    }
});

convertFtoCButton.addEventListener("click", () => {
    const fahrenheit = parseFloat(fahrenheitInput.value);
    if (!isNaN(fahrenheit)) {
        const celsius = fahrenheitToCelsius(fahrenheit);
        resultFtoCElement.textContent = `${fahrenheit}°F is ${celsius.toFixed(2)}°C`;
    } else {
        resultFtoCElement.textContent = "Please enter a valid temperature in Fahrenheit.";
    }
});

function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}
