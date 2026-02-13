// Complete sensitivity calculation logic and form handling

function calculateSensitivity(input) {
    // Example calculation logic for sensitivity
document.getElementById('sensitivityResult').innerText = 'Calculated Sensitivity: ' + (input * 2);  // Dummy calculation
}

function handleFormSubmit(event) {
    event.preventDefault();
    const input = document.getElementById('sensitivityInput').value;
    calculateSensitivity(input);
}

document.getElementById('sensitivityForm').addEventListener('submit', handleFormSubmit);