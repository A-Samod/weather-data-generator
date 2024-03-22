# Weather Data Generator

This project is a weather data generator designed to produce synthetic weather data at regular intervals. It utilizes Node.js along with MongoDB for data storage. The generator is scheduled using cron jobs to run periodically, allowing for the continuous generation of weather data.

## Features

- **Automatic Data Generation**: Utilizes cron jobs to automatically generate weather data at specified intervals.
- **Customizable Settings**: Easily configurable to adjust the frequency and content of generated weather data.
- **MongoDB Integration**: Stores generated weather data in a MongoDB database for future analysis and retrieval.

## How to Use

1. Clone the repository to your local machine.
2. Set up environment variables, including MongoDB URI, as specified in the `.env` file.
3. Install dependencies using `npm install`.
4. Run the application using `npm start`.
5. Monitor the console for logs indicating the generation of weather data.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Cron

## Developed by

- [Avishka Samod](https://github.com/A-Samod) 


