 // ==========================================
// SMART SUSTAINABLE CITY
// FRONTEND + BACKEND CONNECTION
// ==========================================


// Backend API URL

const API_URL = "http://localhost:5000/api/city";


// ==========================================
// LOAD CITY DATA
// ==========================================

async function loadCityData() {

    try {

        // Request data from backend

        const response = await fetch(API_URL);


        // Check if response is OK

        if (!response.ok) {

            throw new Error(
                "Backend server returned an error"
            );

        }


        // Convert response into JSON

        const data = await response.json();


        // Show data in console

        console.log("City Data:", data);



        // ==========================================
        // UPDATE DASHBOARD
        // ==========================================


        // Energy

        document.getElementById("energy").textContent =
            data.energy;



        // Water

        document.getElementById("water").textContent =
            data.water;



        // Waste

        document.getElementById("waste").textContent =
            data.waste;



        // Traffic

        document.getElementById("traffic").textContent =
            data.traffic;



        // Air Quality

        document.getElementById("airQuality").textContent =
            data.airQuality;



        // Green Coverage

        document.getElementById("greenCoverage").textContent =
            data.greenCoverage;



        // Sustainability Score

        document.getElementById("sustainabilityScore").innerHTML =
            data.sustainabilityScore + "<span>/100</span>";


    }

    catch (error) {

        console.error(
            "Backend connection failed:",
            error
        );


        // Show error on dashboard

        document.getElementById("energy").textContent =
            "Error";

        document.getElementById("water").textContent =
            "Error";

        document.getElementById("waste").textContent =
            "Error";

        document.getElementById("traffic").textContent =
            "Error";

        document.getElementById("airQuality").textContent =
            "Error";

        document.getElementById("greenCoverage").textContent =
            "Error";

        document.getElementById("sustainabilityScore").textContent =
            "Error";

    }

}



// ==========================================
// START APPLICATION
// ==========================================

loadCityData();