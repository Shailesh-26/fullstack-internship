const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

let users = [
    { id: 1, name: "Shailesh", email: "shailesh@example.com" }
];


// GET all users
app.get("/api/users", (req, res) => {
    res.status(200).json(users);
});


// GET single user
app.get("/api/users/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
});


// POST create user
app.post("/api/users", (req, res) => {
    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).json({ message: "Name and email are required" });
    }

    const newUser = {
        id: users.length + 1,
        name,
        email
    };

    users.push(newUser);

    res.status(201).json(newUser);
});


// DELETE user
app.delete("/api/users/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const userIndex = users.findIndex(u => u.id === id);

    if (userIndex === -1) {
        return res.status(404).json({ message: "User not found" });
    }

    users.splice(userIndex, 1);

    res.status(200).json({ message: "User deleted successfully" });
});


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});