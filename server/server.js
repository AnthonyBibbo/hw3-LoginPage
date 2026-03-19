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
    email: "admin@gmail.com",
    passwordHash: bcrypt.hashSync("password123", 10)
};

// Login route
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    
    if (email !== user.email) {
        return res.status(401).send(`Incorrect Email: ${email}`);
    }

    const match = await bcrypt.compare(password, user.passwordHash);

    if (match) {
        res.send("Login successful");
    } else {
        res.status(401).send("Incorrect Password")
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});