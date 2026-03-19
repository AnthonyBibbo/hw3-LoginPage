const express = require('express');
const bcrypt = require('bcrypt');
const cors = require('cors');
const path = require('path')

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, '../client')));

const PORT = 3000;

// Fake in-memory user (for demo)
let user = {
    username: "admin",
    passwordHash: bcrypt.hashSync("password123", 10)
};

// Login route
app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    if (username !== user.username) {
        return res.status(401).send("Invalid credentials");
    }

    const match = await bcrypt.compare(password, user.passwordHash);

    if (match) {
        res.send("Login successful");
    } else {
        res.status(401).send("Invalid credentials");
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});