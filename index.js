// Endpoint do pingowania z frontendu
app.get('/ping', (req, res) => {
  res.status(200).send('Pong! Serwer nie śpi.');
});

const express = require('express');
const cors = require('cors');

// Inicjalizacja aplikacji Express
const app = express();

// Middleware (odpala się przy każdym zapytaniu)
app.use(cors()); // Zezwala na strzały z frontendu
app.use(express.json()); // Pozwala odczytywać dane wysyłane jako JSON (np. z formularza)

// Prosty endpoint (ścieżka) testowy
app.get('/', (req, res) => {
  res.send('Backend systemu biblioteki działa!');
});

// Tutaj będziemy dodawać kolejne funkcje, np.:
app.get('/api/ksiazki', (req, res) => {
  res.json([
    { id: 1, tytul: "Wiedźmin", autor: "Andrzej Sapkowski" },
    { id: 2, tytul: "Diuna", autor: "Frank Herbert" }
  ]);
});

// Uruchomienie serwera
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Serwer wystartował na porcie http://localhost:${PORT}`);
});