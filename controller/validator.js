const { connector } = require('../dbConn');

const validateData = async (data) => {
    const { name, address, latitude, longitude } = data;

    // Validate required fields
    if (!name || !address || !latitude || !longitude) {
        console.log('Validation failed: Missing required fields');
        return { valid: false, error: 'All fields are required' };
    }

    // Validate data types
    if (typeof name !== 'string' || typeof address !== 'string') {
        console.log('Validation failed: Name and address must be strings');
        return { valid: false, error: 'Name and address must be strings' };
    }

    if (isNaN(parseFloat(latitude)) || isNaN(parseFloat(longitude))) {
        console.log('Validation failed: Latitude and longitude must be valid numbers');
        return { valid: false, error: 'Latitude and longitude must be valid numbers' };
    }

    // Validate latitude and longitude ranges
    if (latitude <= -90 || latitude >= 90) {
        console.log('Validation failed: Latitude out of range');
        return { valid: false, error: 'Latitude must be between -90 and 90' };
    }

    if (longitude <= -180 || longitude > 180) {
        console.log('Validation failed: Longitude out of range');
        return { valid: false, error: 'Longitude must be between -180 and 180' };
    }

    try {
        const [rows] = await connector.execute(
            'SELECT * FROM schools WHERE name = ?',
            [name]
        );

        if (rows.length > 0) {
            const existingSchool = rows[0];
            const epsilon = 0.000001;

            // Check if latitude and longitude are the same using an epsilon value
            if (Math.abs(parseFloat(existingSchool.latitude) - parseFloat(latitude)) < epsilon &&
                Math.abs(parseFloat(existingSchool.longitude) - parseFloat(longitude)) < epsilon) {
                return { valid: false, error: 'School with the same name and location already exists' };
            }
        }

        return { valid: true };
    } catch (error) {
        console.error('Database error:', error.message);
        return { valid: false, error: 'Database error' };
    }
};

module.exports = validateData;
