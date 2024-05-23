const airports = {
   "JFK": {"name": "John F. Kennedy International Airport", "lat": 40.6413, "lon": -73.7781},
    "LAX": {"name": "Los Angeles International Airport", "lat": 33.9416, "lon": -118.4085},
    "ORD": {"name": "O'Hare International Airport", "lat": 41.9742, "lon": -87.9073},
    "ATL": {"name": "Hartsfield-Jackson Atlanta International Airport", "lat": 33.6407, "lon": -84.4277},
    "LHR": {"name": "London Heathrow Airport", "lat": 51.4700, "lon": -0.4543},
    "CDG": {"name": "Paris Charles de Gaulle Airport", "lat": 49.0034, "lon": 2.5674},
    "FRA": {"name": "Frankfurt Airport", "lat": 50.0333, "lon": 8.5706},
    "AMS": {"name": "Amsterdam Airport Schiphol", "lat": 52.3086, "lon": 4.7639},
    "FCO": {"name": "Leonardo da Vinci International Airport (Fiumicino)", "lat": 41.8003, "lon": 12.2389},
    "MAD": {"name": "Adolfo Suárez Madrid–Barajas Airport", "lat": 40.4940, "lon": -3.5699},
    "MUC": {"name": "Munich Airport", "lat": 48.3537, "lon": 11.7751},
    "BCN": {"name": "Barcelona–El Prat Airport", "lat": 41.2974, "lon": 2.0833},
    "ZRH": {"name": "Zurich Airport", "lat": 47.4647, "lon": 8.5492},
    "VIE": {"name": "Vienna International Airport", "lat": 48.1102, "lon": 16.5697},
    "CPH": {"name": "Copenhagen Airport", "lat": 55.6180, "lon": 12.6508},
    "ARN": {"name": "Stockholm Arlanda Airport", "lat": 59.6498, "lon": 17.9239},
    "HEL": {"name": "Helsinki-Vantaa Airport", "lat": 60.3172, "lon": 24.9633},
    "OSL": {"name": "Oslo Airport Gardermoen", "lat": 60.1939, "lon": 11.1004},
    "ATH": {"name": "Athens International Airport", "lat": 37.9364, "lon": 23.9445},
    "IST": {"name": "Istanbul Airport", "lat": 41.2755, "lon": 28.7510},
    "LIS": {"name": "Lisbon Portela Airport", "lat": 38.7742, "lon": -9.1342},
    "DUB": {"name": "Dublin Airport", "lat": 53.4264, "lon": -6.2499},
    "BRU": {"name": "Brussels Airport", "lat": 50.9028, "lon": 4.4956},
   "AHO": {"name": "Alghero-Fertilia Airport", "lat": 40.6321, "lon": 8.2908},
    "AOI": {"name": "Ancona Falconara Airport", "lat": 43.6164, "lon": 13.3623},
    "BRI": {"name": "Bari Karol Wojtyła Airport", "lat": 41.1376, "lon": 16.7592},
    "BGY": {"name": "Bergamo Orio al Serio International Airport", "lat": 45.6689, "lon": 9.7042},
    "BLQ": {"name": "Bologna Guglielmo Marconi Airport", "lat": 44.5354, "lon": 11.2887},
    "VBS": {"name": "Brescia Montichiari Airport", "lat": 45.4281, "lon": 10.3306},
    "BDS": {"name": "Brindisi – Salento Airport", "lat": 40.6576, "lon": 17.9461},
    "CAG": {"name": "Cagliari Elmas Airport", "lat": 39.2515, "lon": 9.0543},
    "CTA": {"name": "Catania–Fontanarossa Airport", "lat": 37.4669, "lon": 15.0653},
    "CIY": {"name": "Comiso Airport", "lat": 36.9969, "lon": 14.6076},
    "CRV": {"name": "Crotone Airport", "lat": 39.0823, "lon": 17.0819},
    "CUF": {"name": "Cuneo International Airport", "lat": 44.5475, "lon": 7.6232},
    "FLR": {"name": "Florence Airport", "lat": 43.8108, "lon": 11.2051},
    "FOG": {"name": "Foggia Gino Lisa Airport", "lat": 41.4339, "lon": 15.5350},
    "GOA": {"name": "Genoa Cristoforo Colombo Airport", "lat": 44.4133, "lon": 8.8375},
    "SUF": {"name": "Lamezia Terme International Airport", "lat": 38.9050, "lon": 16.2423},
    "LMP": {"name": "Lampedusa Airport", "lat": 35.4972, "lon": 12.6181},
    "LIN": {"name": "Milan Linate Airport", "lat": 45.4514, "lon": 9.2784},
    "MXP": {"name": "Milan Malpensa Airport", "lat": 45.6306, "lon": 8.7281},
    "NAP": {"name": "Naples International Airport", "lat": 40.8860, "lon": 14.2908},
    "OLB": {"name": "Olbia Costa Smeralda Airport", "lat": 40.8987, "lon": 9.5176},
    "PMO": {"name": "Palermo Airport", "lat": 38.1778, "lon": 13.0911},
    "PNL": {"name": "Pantelleria Airport", "lat": 36.8165, "lon": 11.9689},
    "PMF": {"name": "Parma Airport", "lat": 44.8222, "lon": 10.2964},
    "PEG": {"name": "Perugia San Francesco d'Assisi – Umbria International Airport", "lat": 43.0985, "lon": 12.5136},
    "PSR": {"name": "Pescara Abruzzo Airport", "lat": 42.4372, "lon": 14.1839},
    "PSA": {"name": "Pisa International Airport", "lat": 43.6839, "lon": 10.3933},
    "REG": {"name": "Reggio Calabria Airport", "lat": 38.0712, "lon": 15.6536},
    "RMI": {"name": "Rimini Miramare Airport", "lat": 44.0228, "lon": 12.6181},
    "CIA": {"name": "Rome Ciampino Airport", "lat": 41.7994, "lon": 12.5949},
    "FCO": {"name": "Leonardo da Vinci International Airport (Fiumicino)", "lat": 41.8003, "lon": 12.2389},
    "QSR": {"name": "Salerno Costa d'Amalfi Airport", "lat": 40.6204, "lon": 14.9113},
    "TAR": {"name": "Taranto-Grottaglie Marcello Arlotta Airport", "lat": 40.5177, "lon": 17.4022},
    "TRN": {"name": "Turin Airport", "lat": 45.2008, "lon": 7.6496},
    "TPS": {"name": "Trapani–Birgi Airport", "lat": 37.9113, "lon": 12.4880},
    "TSF": {"name": "Treviso Airport", "lat": 45.6508, "lon": 12.1944},
    "TRS": {"name": "Trieste – Friuli Venezia Giulia Airport", "lat": 45.8275, "lon": 13.4722},
    "VCE": {"name": "Venice Marco Polo Airport", "lat": 45.5047, "lon": 12.3387},
    "VRN": {"name": "Verona Villafranca Airport", "lat": 45.3931, "lon": 10.8885}
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
