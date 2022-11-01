console.log ("maps.js is connected");

// *** MAIN MAP ***
let mapMain = L.map('main-map').setView({lon: 0, lat: 0}, 2);

      // add the OpenStreetMap tiles
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'
      }).addTo(mapMain);

      // show the scale bar on the lower left corner
      L.control.scale({imperial: true, metric: true}).addTo(mapMain);

      // show a marker on the map
      L.marker({lon: 0, lat: 0}).bindPopup('The center of the world').addTo(mapMain);

      document.getElementById('main-map').appendChild = mapMain;