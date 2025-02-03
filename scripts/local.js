
document.getElementById('currentyear').textContent = new Date().getFullYear();


function formatDate(date) {
    const options = {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,  
    };
    
    return date.toLocaleString('en-US', options);  
}


document.getElementById('lastModified').textContent = formatDate(new Date(document.lastModified));


const temperatureElement = document.querySelector(".weather-card .data-item:nth-child(3)");
const windSpeedElement = document.querySelector(".weather-card .data-item:nth-child(5)");


const temperature = parseFloat(temperatureElement.textContent.match(/-?\d+/)[0]); 
const windSpeed = parseFloat(windSpeedElement.textContent.match(/-?\d+/)[0]);


const weatherCard = document.querySelector(".weather-card");


function calculateWindChill(tempC, windSpeedKmH) {
    
    const tempF = tempC * 9 / 5 + 32;
    const windSpeedMph = windSpeedKmH / 1.609;

    if (tempC <= 10 && windSpeedKmH > 4.8) {
        const windChillF = 35.74 + 0.6215 * tempF - 35.75 * Math.pow(windSpeedMph, 0.16) + 0.4275 * tempF * Math.pow(windSpeedMph, 0.16);
        const windChillC = ((windChillF - 32) * 5) / 9;
        return windChillC.toFixed(1) + "°C";
    } else {
        return "N/A";
    }
}


const windChillValue = calculateWindChill(temperature, windSpeed);


const windChillItem = document.createElement("div");
windChillItem.className = "data-item";
windChillItem.innerHTML = `<span class="data-label">Wind Chill:</span> ${windChillValue}`;
weatherCard.appendChild(windChillItem);

