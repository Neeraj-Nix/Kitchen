const express = require('express');
const nodemailer = require('nodemailer');
const fs = require('fs');
const app = express();

app.use(express.json());
app.use(express.static('public'));

// Endpoint to sign up a user
app.post('/signup', (req, res) => {
    // Logic to save user and send email
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
