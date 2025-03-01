const express = require("express")
const dotenv = require("dotenv").config();
const cors = require("cors");
const dbConnect = require("./config/dbConnection");

dbConnect();
const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("API is running...");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});