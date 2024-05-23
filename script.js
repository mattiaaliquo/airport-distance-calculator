const airports = {
    "JFK": {"name": "John F. Kennedy International Airport", "lat": 40.6413, "lon": -73.7781},
    "LAX": {"name": "Los Angeles International Airport", "lat": 33.9416, "lon": -118.4085},
    "ORD": {"name": "O'Hare International Airport", "lat": 41.9742, "lon": -87.9073},
    "ATL": {"name": "Hartsfield-Jackson Atlanta International Airport", "lat": 33.6407, "lon": -84.4277}
};

function haversine(lat1, lon1, lat2, lon2) {
    const toRadians = angle => angle * (Math.PI / 180);
    lat1 = toRadians(lat1);
    lon1 = toRadians(lon1);
    lat2 = toRadians(lat2);
    lon2 = toRadians(lon2);
    const dlat = lat2 - lat1;
    const dlon = lon2 - lon1;
    const a = Math.sin(dlat / 2) ** 2 + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dlon / 2) ** 2;
    const c = 2 * Math.asin(Math.sqrt(a));
    const R = 6371; // Radius of the Earth in km
    return c * R;
}

function calculateDistance() {
    const iata1 = document.getElementById('iata1').value.trim().toUpperCase();
    const iata2 = document.getElementById('iata2').value.trim().toUpperCase();

    if (!airports[iata1] || !airports[iata2]) {
        document.getElementById('result').innerText = 'Codice IATA non valido.';
        return;
    }

    const lat1 = airports[iata1].lat;
    const lon1 = airports[iata1].lon;
    const lat2 = airports[iata2].lat;
    const lon2 = airports[iata2].lon;

    const distance = haversine(lat1, lon1, lat2, lon2);
    document.getElementById('result').innerText = `La distanza in linea d'aria tra ${iata1} e ${iata2} è di circa ${distance.toFixed(2)} km`;
}
