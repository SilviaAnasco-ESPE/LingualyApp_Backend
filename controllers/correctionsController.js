import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

async function getCorrection(text) {
    try {
        const response = await axios.post(
            'https://api.sapling.ai/api/v1/edits',
            {
                "key": 'ZLM3B5KBEXRAJFNC7JMUKV16NZPGRYJN', // replace with your API key
                "session_id": 'test session',
                text,
                auto_apply: true,
            },
        );
        const {status, data} = response;
        
        if (data && data.applied_text) {
            const applied_text = data.applied_text;
            console.log("Texto corregido:", applied_text);
            return applied_text; // Retorna únicamente el texto corregido
        } else {
            throw new Error("applied_text no está presente en la respuesta");
        }

    } catch (err) {
        const { msg } = err.response.data;
        console.log({err: msg});
        throw err;
    }
}

async function getScore(text) {
    try {
        const response = await axios.post(
            'https://api.sapling.ai/api/v1/statistics',
            {
                "key": 'ZLM3B5KBEXRAJFNC7JMUKV16NZPGRYJN',
                text,
            },
        );
        const {status, data} = response;
        const score = data.readability;

        console.log({status});
        console.log(JSON.stringify(data, null, 4));

        return score;

    } catch (err) {
        const { msg } = err.response.data;
        console.log({err: msg});
        throw err;
    }
}

async function getTone(text) {
    try {
        const response = await axios.post(
            'https://api.sapling.ai/api/v1/tone',
            {
                key: 'ZLM3B5KBEXRAJFNC7JMUKV16NZPGRYJN',
                text,
            },
        );
        const {status, data} = response;
        const tones = data.overall.map(item => item[1]);

        return tones;
    } catch (err) {
        const { msg } = err.response.data;
        console.log({err: msg});
        throw err;
    }
}

export { 
    getCorrection,
    getScore,
    getTone,
};