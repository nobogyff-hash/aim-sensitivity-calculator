// Complete JavaScript code with sensitivity calculation logic

// Function to calculate sensitivity
function calculateSensitivity(dpi, screenSize, touchSpeed, gameStyle) {
    // Sensitivity calculation logic based on input parameters
    const sensitivity = (dpi / screenSize) * touchSpeed; // example logic
    return sensitivity * (gameStyle === 'high' ? 2 : 1); // adjust for game style
}

// Form submission handler
document.getElementById('sensitivityForm').addEventListener('submit', function(event) {
    event.preventDefault(); // prevent default form submission
    const dpi = parseFloat(document.getElementById('dpiInput').value);
    const screenSize = parseFloat(document.getElementById('screenSizeInput').value);
    const touchSpeed = parseFloat(document.getElementById('touchSpeedInput').value);
    const gameStyle = document.querySelector('input[name="gameStyle"]:checked').value;

    const sensitivity = calculateSensitivity(dpi, screenSize, touchSpeed, gameStyle);
    document.getElementById('result').innerText = `Calculated Sensitivity: ${sensitivity}`;
    document.getElementById('resultsSection').style.display = 'block'; // display results section
});

// Reset function
document.getElementById('resetButton').addEventListener('click', function() {
    document.getElementById('sensitivityForm').reset();
    document.getElementById('resultsSection').style.display = 'none'; // hide results section
});