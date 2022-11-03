console.log ("maps.js is connected");

// *** MAIN MAP ***
// initialize Leaflet
let mapMain = L.map('main-map').setView({lon: -77.036873, lat: 38.907192}, 5);

function mapMainReturn() {

  console.log("function button worked");
  // add the OpenStreetMap tiles
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'
  }).addTo(mapMain);

  // show the scale bar on the lower left corner
  L.control.scale({imperial: true, metric: true}).addTo(mapMain);

  // show a marker on the map
  L.marker({lon: -72.519852, lat: 42.373222}).bindPopup('Amherst, MA').addTo(mapMain);
  L.marker({lon: -72.673363, lat: 41.765770}).bindPopup('<a href="./../pages/main-map/hartford.html">Hartford, CT</a>').addTo(mapMain);
  L.marker({lon: -75.165222, lat: 39.952583}).bindPopup('<a href="./../pages/main-map/philadelphia.html">Phihladelphia, PA</a>').addTo(mapMain);
  L.marker({lon: -77.036873, lat: 38.907192}).bindPopup('<a href="./../pages/main-map/washington-dc.html">Washington, DC</a>').addTo(mapMain);
  L.marker({lon: -77.436050, lat: 37.540726}).bindPopup('<a href="./../pages/main-map/richmond.html">Richmond, VA</a>').addTo(mapMain);
  L.marker({lon: 76.6090128, lat: 36.0579196}).bindPopup('<a href="./../pages/main-map/edenton.html">Edenton, NC</a>').addTo(mapMain);
  L.marker({lon: -76.6108732, lat: 36.0583529}).bindPopup('6 W. King St.').addTo(mapMain);

}



