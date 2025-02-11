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
let index = 0; 


displayNextTemple(temples);


function displayNextTemple(filteredTemples) {
  if (index >= filteredTemples.length) return; 

  const temple = filteredTemples[index];
  const templeCard = document.createElement("div");
  templeCard.classList.add("temple-card");

  templeCard.innerHTML = `
    <h2>${temple.templeName}</h2>
    <img class="lazy-image" data-src="${temple.imageUrl}" alt="${temple.templeName}">
    <p><strong>Location:</strong> ${temple.location}</p>
    <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
    <p><strong>Area:</strong> ${temple.area} sq ft</p>
  `;

  container.appendChild(templeCard);
  index++;

  lazyLoadImages();
  observeLastTemple(filteredTemples); 
}


function lazyLoadImages() {
  const images = document.querySelectorAll(".lazy-image");

  const imgObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src; 
        img.classList.remove("lazy-image");
        observer.unobserve(img); 
      }
    });
  });

  images.forEach(img => imgObserver.observe(img));
}

// Detectar el último templo y cargar más cuando aparece en pantalla
function observeLastTemple(filteredTemples) {
  const lastTemple = document.querySelector(".container .temple-card:last-child");

  if (lastTemple) {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        displayNextTemple(filteredTemples); // Cargar el siguiente templo
      }
    }, { root: null, threshold: 0.5 });

    observer.observe(lastTemple);
  }
}


document.getElementById("home").addEventListener("click", () => {
  resetDisplay(temples); 
});

document.getElementById("old").addEventListener("click", () => {
  const oldTemples = temples.filter(t => new Date(t.dedicated).getFullYear() < 1900);
  resetDisplay(oldTemples);
});

document.getElementById("new").addEventListener("click", () => {
  const newTemples = temples.filter(t => new Date(t.dedicated).getFullYear() > 2000);
  resetDisplay(newTemples); 
});

document.getElementById("large").addEventListener("click", () => {
  const largeTemples = temples.filter(t => t.area > 90000);
  resetDisplay(largeTemples); 
});

document.getElementById("small").addEventListener("click", () => {
  const smallTemples = temples.filter(t => t.area < 10000);
  resetDisplay(smallTemples); 
});


function resetDisplay(filteredTemples) {
  container.innerHTML = "";
  index = 0; 
  displayNextTemple(filteredTemples); 
}
