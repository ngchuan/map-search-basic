let singapore = [1.29, 103.85]; // #1 Singapore latlng
let map = L.map('map').setView(singapore, 12); // #2 Set the center point

// setup the tile layers
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19, attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>' }).addTo(map);

// setup the tile layers
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw' //demo access token
}).addTo(map);

// create marker cluster
let markerClusterLayer = L.markerClusterGroup();

// Fetch taxi data from the API and add markers to the cluster layer
fetch("https://api.data.gov.sg/v1/transport/taxi-availability")
    .then(response => response.json())
    .then(data => {
        // Get the taxi coordinates from the response
        let taxiLocations = data.features[0].geometry.coordinates;

        // Loop through each coordinate to create a marker
        taxiLocations.forEach(coord => {
            let lat = coord[1]; // Latitude
            let lng = coord[0]; // Longitude
            let marker = L.marker([lat, lng]); // Create marker with taxi position
            
            marker.addTo(markerClusterLayer); // Add marker to the cluster layer
        });

        // Add the marker cluster layer to the map
        markerClusterLayer.addTo(map);
    })
    .catch(error => console.log("Error fetching taxi data:", error));




// for (let i = 0; i < 100; i++) {
//    let pos = getRandomLatLng(map);
//    L.marker(pos).addTo(markerClusterLayer);
// }

markerClusterLayer.addTo(map);

// let singaporeMarker = L.marker([1.29, 103.85]);
// singaporeMarker.addTo(map);
// singaporeMarker.bindPopup("<p>Singapore</p>")
// singaporeMarker.addEventListener('click', function () {
//    alert("Singapore");
// })

// let circle1 = L.circle([1.35166526, 103.773663572], {
//    color: 'red',
//    fillColor: "orange",
//    fillOpacity: 0.5,
//    radius: 500
// })

// add it to the map
// circle1.addTo(map);

// function getRandomLatLng(map) {
    // get the boundaries of the map
//    let bounds = map.getBounds();
//    let southWest = bounds.getSouthWest();
//    let northEast = bounds.getNorthEast();
//    let lngSpan = northEast.lng - southWest.lng;
//    let latSpan = northEast.lat - southWest.lat;

//    let randomLng = Math.random() * lngSpan + southWest.lng;
//    let randomLat = Math.random() * latSpan + southWest.lat;

//    return [ randomLat, randomLng,];
// }






document.addEventListener('DOMContentLoaded', function () {
    // Initialize the map
    const map = createMap('map', 1.3521, 103.8198);
});
