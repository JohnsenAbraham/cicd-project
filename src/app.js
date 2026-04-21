const express = require('express');
const app = express();

app.use(express.json());

// Root route
app.get('/', (req, res) => {
    res.status(200).json({ message: "CI/CD Pipeline Working" });
});

// Health check
app.get('/health', (req, res) => {
    res.status(200).json({ status: "OK" });
});

module.exports = app;
