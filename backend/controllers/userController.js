const User = require("../models/User");

exports.getAllUsers = async (req, res) => {
    const users = await User.find();
    res.status(200).json(users);
};

exports.getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json(user);
    } catch {
        res.status(400).json({ message: "Invalid ID" });
    }
};

exports.createUser = async (req, res) => {
    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).json({ message: "Name and email required" });
    }

    const newUser = new User({ name, email });

    await newUser.save();

    res.status(201).json(newUser);
};

exports.deleteUser = async (req, res) => {
    const user = await User.findByIdAndDelete(req.params.id);

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User deleted" });
};