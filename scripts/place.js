const year = document.querySelector("#currentyear");

const today = new Date();

year.innerHTML = `<span>${today.getFullYear()}</span>`;

document.getElementById("lastModified").innerHTML = `Last Modification: ${document.lastModified}`;

const temperature = -5;

const windSpeed = 5.56;

function calculateWindChill(temperature, windSpeed) {
    if (temperature <= 10 && windSpeed > 4.8) {
        return 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
    } else {
        return "N/A"
    }
}

let windChill = calculateWindChill(temperature, windSpeed);

let result = windChill.toFixed(2);

document.getElementById("windChill").innerHTML = `${result} °C`;
