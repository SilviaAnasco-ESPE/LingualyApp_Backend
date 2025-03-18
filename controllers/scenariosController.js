import pool from '../db/connection.js';

// Get all scenarios
const getAllScenarios = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM scenarios');
        res.json(result.rows);
    } catch (error) {
        console.error('Error fetching scenarios:', error);
        res.status(500).send('Error fetching scenarios');
    }
};

// Add a new scenario
const createScenarios = async (req, res) => {
    const { title, description } = req.body;

    if (!title || !description) {
        return res.status(400).send('Title and description are required');
    }

    try {
        const result = await pool.query(
            'INSERT INTO scenarios (title, description) VALUES ($1, $2) RETURNING *',
            [title, description]
        );
        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error('Error creating scenario:', error);
        res.status(500).send('Error creating scenario');
    }
};

export {
    getAllScenarios,
    createScenarios,
};
