const districtCoordinates = {
    "Ampara": { lat: 7.3085, lng: 81.6743 },
    "Anuradhapura": { lat: 8.3114, lng: 80.4037 },
    "Badulla": { lat: 6.9925, lng: 81.0557 },
    "Batticaloa": { lat: 7.7102, lng: 81.6924 },
    "Colombo": { lat: 6.9271, lng: 79.8612 },
    "Galle": { lat: 6.0535, lng: 80.2209 },
    "Gampaha": { lat: 7.0873, lng: 80.0148 },
    "Hambantota": { lat: 6.1249, lng: 81.1187 },
    "Jaffna": { lat: 9.6615, lng: 80.0255 },
    "Kalutara": { lat: 6.5854, lng: 79.9607 },
    "Kandy": { lat: 7.2906, lng: 80.6337 },
    "Kegalle": { lat: 7.2514, lng: 80.3464 },
    "Kilinochchi": { lat: 9.4004, lng: 80.3999 },
    "Kurunegala": { lat: 7.4805, lng: 80.3548 },
    "Mannar": { lat: 8.9762, lng: 79.9030 },
    "Matara": { lat: 5.9487, lng: 80.5350 },
    "Matale": { lat: 7.4675, lng: 80.6234 },
    "Monaragala": { lat: 6.8711, lng: 81.3515 },
    "Mullaitivu": { lat: 9.2677, lng: 80.8149 },
    "Nuwara Eliya": { lat: 6.9749, lng: 80.7893 },
    "Polonnaruwa": { lat: 7.9403, lng: 81.0188 },
    "Puttalam": { lat: 8.0330, lng: 79.8262 },
    "Ratnapura": { lat: 6.7050, lng: 80.3847 },
    "Trincomalee": { lat: 8.5872, lng: 81.2152 },
    "Vavuniya": { lat: 8.7517, lng: 80.4989 }
  };
  
const mongoose = require('mongoose');
const WeatherData = require('./src/models/weatherData');

mongoose.connect('mongodb+srv://admin:admin123@cluster0.fyc2lpb.mongodb.net/weather', { useNewUrlParser: true, useUnifiedTopology: true });

(async () => {
  try {
    let id = 1; 
    const districts = await WeatherData.find({}); 

    for (const district of districts) {
      if (districts && district.district in districtCoordinates) {
        const { lat, lng } = districtCoordinates[district.district]; 

        // Update id, lat, and lng fields for the district
        await WeatherData.findByIdAndUpdate(district._id, {
          id: id++,
          lat: lat,
          lng: lng
        });
      }
    }

    console.log(`${id - 1} Sri Lankan districts updated successfully.`);
  } catch (error) {
    console.error('Error updating documents:', error);
  } finally {
    mongoose.disconnect();
  }
})();
