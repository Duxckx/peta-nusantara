var map = L.map('map').setView([-2.5, 118], 5);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Peta oleh OpenStreetMap',
  maxZoom: 18,
}).addTo(map);

fetch('data.json')
  .then(response => response.json())
  .then(data => {
    data.forEach(poin => {
      var isi = `<h3>${poin.judul}</h3>
                 <p>${poin.cerita}</p>
                 <h4>Kosakata:</h4><ul>`;
      poin.kosakata.forEach(kata => {
        isi += `<li><b>${kata.kata}</b>: ${kata.arti}</li>`;
      });
      isi += '</ul>';

      L.marker(poin.koordinat)
        .addTo(map)
        .bindPopup(isi);
    });
  });
