const axios = require('axios');

module.exports.getAddressCoordinate = async(address) => {
    const apiKey = process.env.GOOGLE_MAPS_API;
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${apiKey}`;

    try {
        const response = await axios.get(url);
        if (response.data.status === 'OK'){
            const location = response.data.results[0].geometry.location;
            return {
                latitude: location.lat,
                longitude: location.lng
            };
        } else {
            throw new Error('Unable to fetch Coordinates');
        }
    } catch (error) {
        throw new Error(`Error fetching coordinates: ${error.message}`);
    }
}

module.exports.getDistanceTime = async(origin, destination) => {
    if (!origin || !destination){
        throw new Error('Origin and destination are required');
    }

    const apiKey = process.env.GOOGLE_MAPS_API;
    const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&key=${apiKey}`;

    try {
        const response = await axios.get(url);
        if (response.data.status === 'OK'){
            const duration = response.data.routes[0].legs[0].duration.text;
            const distance = response.data.routes[0].legs[0].distance.text;
            return {
                duration,
                distance
            }
        } else {
            throw new Error('Unable to fetch distance and time');
        }
    } catch (error) {
        throw new Error(`Error fetching distance and time: ${error.message}`);
    }
}
