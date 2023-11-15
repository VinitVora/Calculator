let displayValue = '0';

function updateDisplay() {
    document.getElementById('display').textContent = displayValue;
}

function appendToDisplay(value) {
    if (displayValue === '0') {
        displayValue = value;
    } else {
        displayValue += value;
    }
    updateDisplay();
}

function clearDisplay() {
    displayValue = '0';
    updateDisplay();
}

function calculateResult() {
    try {
        displayValue = eval(displayValue).toString();
    } catch (error) {
        displayValue = 'Error';
    }
    updateDisplay();
}

// Handle keyboard input
document.addEventListener('keydown', function (event) {
    const key = event.key;

    if (!isNaN(key) || key === '/' || key === '*' || key === '-' || key === '+' || key === '.') {
        appendToDisplay(key);
    } else if (key === 'Enter') {
        calculateResult();
    } else if (key === 'Escape') {
        clearDisplay();
    }
});

// Update display on initial load
updateDisplay();
