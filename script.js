// Initialize the map
var map = L.map('map').setView([40.7831, -73.9712], 13);

// Add the tile layer (map tiles from OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
}).addTo(map);

// Add markers for Manhattan Restrooms

//downtown
var marker1 = L.marker([40.718840, -73.993030]).addTo(map);
var marker2 = L.marker([40.711600, -73.994270]).addTo(map);
var marker3 = L.marker([40.716800, -73.994057]).addTo(map);
var marker4 = L.marker([40.713950, -73.989390]).addTo(map);
var marker5 = L.marker([40.716190, -73.987010]).addTo(map);
var marker6 = L.marker([40.729430, -73.989130]).addTo(map);
var marker7 = L.marker([40.730030, -73.989800]).addTo(map);
var marker8 = L.marker([40.731110, -73.993310]).addTo(map);
var marker9 = L.marker([40.702560, -74.009560]).addTo(map);
var marker11 = L.marker([40.711300, 74.010980]).addTo(map);
var marker12 = L.marker([40.714530, -74.011260]).addTo(map);
var marker13 = L.marker([40.714619, -74.006371]).addTo(map);
var marker14 = L.marker([40.715172, -74.010918]).addTo(map);
var marker15 = L.marker([40.725750, -73.996567]).addTo(map);
var marker16 = L.marker([40.727520, -73.997320]).addTo(map);
var marker17 = L.marker([40.722660, -73.997460]).addTo(map);
var marker18 = L.marker([40.722370, -73.997870]).addTo(map);
var marker19 = L.marker([40.725020, -73.996500]).addTo(map);
var marker20 = L.marker([40.718710, -74.002060]).addTo(map);
var marker21 = L.marker([40.718510, -74.001160]).addTo(map);
var marker22 = L.marker([40.716020, -73.997580]).addTo(map);
var marker23 = L.marker([40.718930, -73.994970]).addTo(map);
var marker24 = L.marker([40.719740, -73.999130]).addTo(map);
var marker25 = L.marker([40.721809, -74.000458]).addTo(map);
var marker26 = L.marker([40.715930, -73.999370]).addTo(map);
var marker27 = L.marker([40.733750, 74.006280]).addTo(map);
var marker28 = L.marker([40.739310, -74.004120]).addTo(map);
var marker29 = L.marker([40.731580, -74.009550]).addTo(map);
var marker30 = L.marker([40.706450, -74.004090]).addTo(map);
var marker31 = L.marker([40.706680, 74.007248]).addTo(map);
var marker32 = L.marker([40.709980, -74.006910]).addTo(map);
var marker33 = L.marker([40.706470, -74.003738]).addTo(map);
var marker34 = L.marker([40.7107804, -74.0167165]).addTo(map);
var marker35 = L.marker([40.7139294, -74.0154359]).addTo(map);
//midtown
var marker36 = L.marker([]).addTo(map);
var marker37 = L.marker([]).addTo(map);
var marker38 = L.marker([]).addTo(map);
var marker39 = L.marker([]).addTo(map);
var marker40 = L.marker([]).addTo(map);
var marker41 = L.marker([]).addTo(map);
var marker42 = L.marker([]).addTo(map);
var marker43 = L.marker([]).addTo(map);
var marker44 = L.marker([]).addTo(map);
var marker45 = L.marker([]).addTo(map);
var marker46 = L.marker([]).addTo(map);
var marker47 = L.marker([]).addTo(map);
var marker48 = L.marker([]).addTo(map);
var marker49 = L.marker([]).addTo(map);
var marker50 = L.marker([]).addTo(map);
var marker51 = L.marker([]).addTo(map);
var marker52 = L.marker([]).addTo(map);
var marker53 = L.marker([]).addTo(map);
var marker54 = L.marker([]).addTo(map);
var marker55 = L.marker([]).addTo(map);
var marker56 = L.marker([]).addTo(map);
//uptown

// Add a popup to the markers

//downtown
marker1.bindPopup("<b>Sara D. Roosevelt Park</b>").openPopup();
marker2.bindPopup("<b>Coleman Playground</b>").openPopup();
marker3.bindPopup("<b>Hester St. Playground</b>").openPopup();
marker4.bindPopup("<b>Seward Park</b>").openPopup();
marker5.bindPopup("<b>Target</b>").openPopup();
marker6.bindPopup("<b>Tompkins Square Park</b>").openPopup();
marker7.bindPopup("<b>Shake Shack</b>").openPopup();
marker8.bindPopup("<b>Chipotle Mexican Grill</b>").openPopup();
marker9.bindPopup("<b>Chipotle Mexican Grill</b>").openPopup();
marker11.bindPopup("<b>World Trade Center Oculus</b>").openPopup();
marker12.bindPopup("<b>Target</b>").openPopup();
marker13.bindPopup("<b>Chipotle Mexican Grill</b>").openPopup();
marker14.bindPopup("<b>Chipotle Mexican Grill</b>").openPopup();
marker15.bindPopup("<b>Crates & Barrel</b>").openPopup();
marker16.bindPopup("<b>Washington Square Park</b>").openPopup();
marker17.bindPopup("<b>Chipotle Mexican Grill</b>").openPopup();
marker18.bindPopup("<b>Starbucks</b>").openPopup()
marker19.bindPopup("<b>Target</b>").openPopup();
marker20.bindPopup("<b>Chipotle Mexican Grill</b>").openPopup();
marker21.bindPopup("<b>McDonald's</b>").openPopup();
marker22.bindPopup("<b>Elizabeth Center Gift Shops</b>").openPopup();
marker23.bindPopup("<b>Kyuramen</b>").openPopup();
marker24.bindPopup("<b>Starbucks</b>").openPopup();
marker25.bindPopup("<b>T.J.Maxx</b>").openPopup();
marker26.bindPopup("<b>Columbus Park</b>").openPopup();
marker27.bindPopup("<b>Bleecker Playground</b>").openPopup();
marker28.bindPopup("<b>Corporal John A. Seravalli Playground</b>").openPopup();
marker29.bindPopup("<b>Pier 40</b>").openPopup();
marker30.bindPopup("<b>Imagination Playground</b>").openPopup();
marker31.bindPopup("<b>Chipotle Mexican Grill</b>").openPopup();
marker32.bindPopup("<b>Chipotle Mexican Grill</b>").openPopup();
marker33.bindPopup("<b>Pier 17</b>").openPopup();
marker34.bindPopup("<b>Chipotle Mexican Grill</b>").openPopup();
marker35.bindPopup("<b>Brookfield Place</b>").openPopup();
//midtown
//uptown
