document.getElementById('convertButton').addEventListener('click', function() {
    const inputValue = parseFloat(document.getElementById('inputValue').value);
    const inputUnit = document.getElementById('inputUnit').value;
    const outputUnit = document.getElementById('outputUnit').value;
    let result;

    if (isNaN(inputValue)) {
        alert("Please enter a valid number");
        return;
    }

    // Conversion logic
    if (inputUnit === outputUnit) {
        result = inputValue;
    } else {
        if (inputUnit === '°C') {
            if (outputUnit === '°F') {
                result = (inputValue * 9/5) + 32;
            } else if (outputUnit === 'K') {
                result = inputValue + 273.15;
            }
        } else if (inputUnit === '°F') {
            if (outputUnit === '°C') {
                result = (inputValue - 32) * 5/9;
            } else if (outputUnit === 'K') {
                result = ((inputValue - 32) * 5/9) + 273.15;
            }
        } else if (inputUnit === 'K') {
            if (outputUnit === '°C') {
                result = inputValue - 273.15;
            } else if (outputUnit === '°F') {
                result = ((inputValue - 273.15) * 9/5) + 32;
            }
        }
    }

    document.getElementById('result').textContent = `${inputValue}${inputUnit} equals to ${result.toFixed(2)}${outputUnit}`;
});
