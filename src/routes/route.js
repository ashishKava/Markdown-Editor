import express from 'express';
import { marked } from 'marked';

const router = express.Router();

router.post('/convert', (req, res) => {
    const { markdown } = req.body;
    const html = marked.parse(markdown || '');
    res.json({ html });
});

export default router;
