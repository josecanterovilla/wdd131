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



const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
const headerhtml = document.querySelector('.headerhtml');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
    headerhtml.classList.toggle('open');
});

const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
      templeName: "Concepción Chile",
      location: "Concepción, Chile",
      dedicated: "2018, October, 28",
      area: 23095,
      imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/concepcion-chile-temple/concepcion-chile-temple-273-main.jpg"
    },
    {
      templeName: "Kyiv Ukraine",
      location: "Kyiv, Ukraine",
      dedicated: "2010, August, 29",
      area: 22184,
      imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/_temp/134-Kyiv-Ukraine-Temple.jpg"
    },
    {
      templeName: "Madrid Spain",
      location: "Madrid, Spain",
      dedicated: "1999, March, 19-21",
      area: 45800,
      imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/_temp/056-Madrid-Spain-Temple.jpg"
    }
];

const container = document.querySelector(".container");

// Display all temples by default
displayTemples(temples);

function displayTemples(filteredTemples) {
  container.innerHTML = ""; // Clear previous results
  filteredTemples.forEach(temple => {
    const templeCard = document.createElement("div");
    templeCard.classList.add("temple-card");

    templeCard.innerHTML = `
      <h2>${temple.templeName}</h2>
      <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
      <p><strong>Location:</strong> ${temple.location}</p>
      <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
      <p><strong>Area:</strong> ${temple.area} sq ft</p>
    `;

    container.appendChild(templeCard);
  });
}

// Event listeners for navigation items
document.getElementById("home").addEventListener("click", () => {
  displayTemples(temples); // Show all temples
});

document.getElementById("old").addEventListener("click", () => {
  const oldTemples = temples.filter(temple => {
    const year = new Date(temple.dedicated).getFullYear();
    return year < 1900;
  });
  displayTemples(oldTemples); // Show temples built before 1900
});

document.getElementById("new").addEventListener("click", () => {
  const newTemples = temples.filter(temple => {
    const year = new Date(temple.dedicated).getFullYear();
    return year > 2000;
  });
  displayTemples(newTemples); // Show temples built after 2000
});

document.getElementById("large").addEventListener("click", () => {
  const largeTemples = temples.filter(temple => temple.area > 90000);
  displayTemples(largeTemples); // Show temples larger than 90,000 sq ft
});

document.getElementById("small").addEventListener("click", () => {
  const smallTemples = temples.filter(temple => temple.area < 10000);
  displayTemples(smallTemples); // Show temples smaller than 10,000 sq ft
});
