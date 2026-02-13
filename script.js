// script.js

// Function to calculate sensitivity
function calculateSensitivity(sensitivityValue, zoomLevel) {
    return sensitivityValue * (1 / zoomLevel);
}

// Function to convert sensitivity to different formats
function convertSensitivity(value, format) {
    switch (format) {
        case 'cm':
            return value * 2.54;
        case 'inches':
            return value * 0.393701;
        default:
            return value; // return as is for default format
    }
}

// Example usage
const sensitivity = calculateSensitivity(20, 2);
const sensitivityInCm = convertSensitivity(sensitivity, 'cm');
console.log('Sensitivity:', sensitivityInCm, 'cm');