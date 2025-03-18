import express from 'express';
import pool from '../db/connection.js';
import { getCorrection, getScore, getTone } from '../controllers/correctionsController.js';
const router = express.Router();

// Submit user answer and get correction
router.post('/', async (req, res) => {
    const { userId, scenarioId, userAnswer } = req.body;
    
    try {
        const correction = await getCorrection(userAnswer);
        const score = await getScore(userAnswer);
        const tone = await getTone(userAnswer);

        const result = await pool.query(
            `INSERT INTO user_answers (user_id, scenario_id, user_answer, corrected_answer, readability_score, tones)
                VALUES ($1, $2, $3, $4, $5, $6)
                ON CONFLICT (user_id, scenario_id) DO UPDATE SET
                    user_answer = EXCLUDED.user_answer,
                    corrected_answer = EXCLUDED.corrected_answer,
                    readability_score = EXCLUDED.readability_score,
                    tones = EXCLUDED.tones
                RETURNING *`,
            [userId, scenarioId, userAnswer, correction, score, tone]
        );

        res.status(201).json({
            message: 'Answer processed successfully',
            data: result.rows[0]
        });
    } catch (error) {
        console.error('Error in user answers endpoint:', error);
        res.status(500).json({
            message: 'Error processing user answer',
            error: error.message
        });
    }
});

router.get('/', async (req, res) => {
    // En un GET, los parámetros vienen en req.query, no en req.body
    const { userId, scenarioId } = req.query;

    // Validación de parámetros
    if (!userId || !scenarioId) {
        return res.status(400).json({
            message: 'userId and scenarioId are required'
        });
    }

    try {
        const result = await pool.query(
            'SELECT user_answer, corrected_answer, readability_score, tones FROM user_answers WHERE user_id = $1 AND scenario_id = $2',
            [userId, scenarioId]
        );

        // Si no se encuentra ningún registro
        if (result.rows.length === 0) {
            return res.status(404).json({
                message: 'No answer found for this user and scenario'
            });
        }

        // Devolver el registro encontrado
        res.json(result.rows[0]);
    } catch (error) {
        console.error('Error fetching user answers:', error);
        res.status(500).json({
            message: 'Error fetching user answers',
            error: error.message
        });
    }
});

export default router;
