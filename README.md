# T40


T40 Ride Query Web Application

Project Overview
This project is a one-page web application designed to help users intending to travel query available rides based on their selected departure and destination cities, as well as specific travel dates. The application adheres to the provided Figma design specifications and integrates with T40’s APIs to fetch ride data.

Features

User Interaction:
1. Query dialog for selecting:
2. Departure city
3. Destination city
4. Travel date(s)
5. Displays available rides for selected parameters.

API Integration:
1. Fetches ride data using T40’s APIs.
2. Handles error states gracefully.

Design Adherence:
1. Matches the provided Figma design.
2. References live implementation on IntercityNG for functionality.

Responsiveness:
1. Fully responsive across devices.

Technologies Used
1. Frontend: React.js
2. Styling: CSS and Figma for design adherence
3. API Integration: Fetch API for HTTP requests
3. Deployment: Netlify

Setup Instructions

Follow the steps below to set up the project locally:

Prerequisites
Node.js (v16 or higher)
npm
API Key from T40 

1. Clone the Repository: git clone(https://github.com/VisionForge-Solutions/T40.git)
2. cd (repository folder)
3. Install Dependencies: npm install
4. Create Environment File: Create a .env file in the root directory and add the public key
5. Run the Application Locally: npm start

Deployment: The application is deployed on Netlify. Access the live version <>

Challenges and Solutions
API Authorization Issue: During development, the API requests consistently returned a 401 Unauthorized error. Testing with Postman confirmed the issue, returning the response:
{
  "message": "Invalid key",
  "status": "error",
  "status_code": 401
}

Attempts to resolve this included:
1. Verifying the API key and ensuring it matched the key provided by T40.
2. Confirming that the API key was correctly set in the .env file.
3. Checking the API endpoint URL for accuracy.

Despite these steps, the issue persists, and further clarification from T40’s support team is required to proceed.