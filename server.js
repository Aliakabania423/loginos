const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Route für die Startseite
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Login-Route
app.post('/api/login', (req, res) => {
    const { email, password } = req.body;

    // Benutzerdaten im Terminal ausgeben
    console.log(`Email: ${email}, Passwort: ${password}`);

    return res.status(200).json({ message: 'Login erfolgreich!' });
});

// Server starten
app.listen(PORT, () => {
    console.log(`Server läuft auf http://localhost:${PORT}`);
});
