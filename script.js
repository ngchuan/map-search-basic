let singapore = [1.29, 103.85]; // #1 Singapore latlng
let map = L.map('map').setView(singapore, 13); // #2 Set the center point

// setup the tile layers
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19, attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>' }).addTo(map);

let singaporeMarker = L.marker([1.29, 103.85]);
singaporeMarker.addTo(map);
singaporeMarker.bindPopup("<p>Singapore</p>")
singaporeMarker.addEventListener('click', function () {
    alert("Singapore");
})

let circle1 = L.circle([1.35166526, 103.773663572], {
    color: 'red',
    fillColor: "orange",
    fillOpacity: 0.5,
    radius: 500
})

// add it to the map
circle1.addTo(map);

// Singapore Mandai Zoo
let circle2 = L.circle([1.4050, 103.7905], {
    color: 'blue',
    fillColor: "orange",
    fillOpacity: 0.5,
    radius: 500
})

// add it to the map
circle2.addTo(map);

// Singapore Discovery Center
let circle3 = L.circle([1.3327, 103.6789], {
    color: 'blue',
    fillColor: "orange",
    fillOpacity: 0.5,
    radius: 500
})

// add it to the map
circle3.addTo(map);


// Jurong Bird Park
let circle4 = L.circle([1.3187, 103.7064], {
    color: 'blue',
    fillColor: "orange",
    fillOpacity: 0.5,
    radius: 500
})

// add it to the map
circle4.addTo(map);


document.addEventListener('DOMContentLoaded', function () {
    // Initialize the map
    const map = createMap('map', 1.3521, 103.8198);
});
