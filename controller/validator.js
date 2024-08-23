
const validateData = (data) => {
    const { name, address, latitude, longitude } = data;

    // Validate required fields
    if (!name || !address || !latitude || !longitude) {
        return { valid: false, error: 'All fields are required' };
    }

    // Validate data types
    if (typeof name !== 'string' || typeof address !== 'string') {
        return { valid: false, error: 'Name and address must be strings' };
    }

  

    if (isNaN(parseFloat(latitude)) || isNaN(parseFloat(longitude))) {
        return { valid: false, error: 'Latitude and longitude must be valid numbers' };
    }

    // Validate latitude and longitude ranges
    if (latitude <= -90 || latitude >= 90) {
        return { valid: false, error: 'Latitude must be between -90 and 90' };
    }

    if (longitude <= -180 || longitude > 180) {
        return { valid: false, error: 'Longitude must be between -180 and 180' };
    }

    return { valid: true };
};

module.exports =  validateData ;
