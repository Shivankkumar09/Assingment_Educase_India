const  {connector} = require('../dbConn');
const haversine = require('haversine-distance');
const validateData = require('./validator')

// Add School
const addSchool = async (req, res) => {


    const { name, address, latitude, longitude } = req.body;

     const validation = validateData(req.body);

    if (!validation.valid) {
        return res.status(400).json({ error: validation.error });
    }

    try {
        const [result] = await connector.query('INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)', [name, address, latitude, longitude]);
        res.status(201).json({ message: 'School added successfully', schoolId: result.insertId });
    } catch (err) {
        res.status(500).json({ error: 'Database error', details: err.message });
    }
};

// List Schools
const listSchools = async (req, res) => {
    const { latitude, longitude } = req.query;

    if (!latitude || !longitude) {
        return res.status(400).json({ error: 'Latitude and longitude are required' });
    }

    try {
        const [schools] = await connector.query('SELECT * FROM schools');

        const userLocation = { latitude: parseFloat(latitude), longitude: parseFloat(longitude) };
        schools.forEach(school => {
            school.distance = haversine(userLocation, { latitude: school.latitude, longitude: school.longitude });
        });

        schools.sort((a, b) => a.distance - b.distance);

        res.json(schools);
    } catch (err) {
        res.status(500).json({ error: 'Database error', details: err.message });
    }
};


module.exports = {addSchool, listSchools};