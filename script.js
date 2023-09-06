const convertCtoFButton = document.getElementById("convertCtoF");
const celsiusInput = document.getElementById("celsius");
const resultCtoFElement = document.getElementById("resultCtoF");

const convertFtoCButton = document.getElementById("convertFtoC");
const fahrenheitInput = document.getElementById("fahrenheit");
const resultFtoCElement = document.getElementById("resultFtoC");

const convertKtoFButton = document.getElementById("convertKtoF");
const kelvinInput = document.getElementById("kelvin");
const resultKtoFElement = document.getElementById("resultKtoF");

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

convertKtoFButton.addEventListener("click", () => {
    const kelvin = parseFloat(kelvinInput.value);
    if (!isNaN(kelvin)) {
        const fahrenheit = kelvinToFahrenheit(kelvin);
        resultKtoFElement.textContent = `${kelvin}°C is ${fahrenheit.toFixed(2)}°F`;
    } else {
        resultKtoFElement.textContent = "Please enter a valid temperature in Kelvin.";
    }
});

function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

function kelvinToFahrenheit(kelvin) {
    return (kelvin-273.15) * 9/5 + 32;
}
