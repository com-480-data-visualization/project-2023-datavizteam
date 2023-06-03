// Initialize the map
const map = L.map('map').setView([0, 0], 2);

// Create a TileLayer for the map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
    maxZoom: 18
}).addTo(map);

// Define a random color generator function
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {   
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Fetch the GeoJSON data for the world countries
fetch('https://raw.githubusercontent.com/johan/world.geo.json/master/countries.geo.json')
  .then(response => response.json())
  .then(data => {
    // Generate random colors for each country
    const countryColors = {};
    data.features.forEach(feature => {
      countryColors[feature.properties.name] = getRandomColor();
    });

    // Create the GeoJSON layer with the assigned colors
    const geojsonLayer = L.geoJSON(data, {
      style: function(feature) {
        return {
          fillColor: countryColors[feature.properties.name],
          weight: 1,
          opacity: 1,
          color: 'white',
          fillOpacity: 0.7
        };
      }
    }).addTo(map);

    // Fit the map bounds to the GeoJSON layer
    map.fitBounds(geojsonLayer.getBounds());
  });
