const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());


// ================= HOME =================

app.get("/", (req, res) => {
    res.json({
        message: "Smart Sustainable City Backend is Running!"
    });
});


// ================= CITY DATA =================

app.get("/api/city", (req, res) => {
    res.json({
        city: "Greater Noida",
        energy: "4820 MWh",
        water: "312 MLD",
        waste: "78%",
        traffic: "62/100",
        airQuality: "187 AQI",
        greenCoverage: "14.2%",
        sustainabilityScore: 54
    });
});


// ================= PROBLEM DETECTION =================

app.get("/api/problems", (req, res) => {

    res.json([
        {
            id: 1,
            type: "Water",
            title: "Abnormal Water Usage",
            location: "Sector B",
            severity: "High",
            status: "Detected"
        },

        {
            id: 2,
            type: "Waste",
            title: "Waste Collection Required",
            location: "Sector B",
            severity: "Medium",
            status: "Pending"
        },

        {
            id: 3,
            type: "Traffic",
            title: "Traffic Congestion",
            location: "Main Road",
            severity: "Medium",
            status: "Detected"
        },

        {
            id: 4,
            type: "Air Quality",
            title: "Poor Air Quality",
            location: "City Center",
            severity: "High",
            status: "Detected"
        }
    ]);

});


// ================= START SERVER =================

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});