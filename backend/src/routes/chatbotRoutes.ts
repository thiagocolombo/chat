import { Router, Request, Response } from 'express';
import { askGPT } from '../services/openaiService';

const router = Router();

// Rota POST para o chatbot
router.post('/', async (req: Request, res: Response) => {
    const { message } = req.body;

    // Validação de entrada
    if (!message) {
        res.status(400).json({ error: 'A mensagem é obrigatória.' });
        return;
    }

    try {
        console.log('📨 Mensagem recebida:', message);
        const response = await askGPT(message);
        console.log('✅ Resposta do serviço GPT:', response);
        res.status(200).json({ response });
    } catch (error: any) {
        console.error('Erro ao chamar a API do OpenAI:', error);
        console.error('❌ Erro interno no servidor:', error.message, error.stack);
        res.status(500).json({ error: 'Erro interno no servidor ao processar a solicitação.' });
    }
    
});


export default router;
