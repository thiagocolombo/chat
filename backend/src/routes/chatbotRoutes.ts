import { Router, Request, Response } from 'express';
import { askHuggingFace } from '../services/huggingFaceService';

//Cria um roteador Express para lidar com as requisições ao chatbot.
const router = Router();

router.post('/', async (req: Request, res: Response) => {
    
    // Extrai a mensagem do corpo da requisição
    const { message } = req.body; 
    // Valida se a mensagem foi escrita
    if (!message) {
        res.status(400).json({ error: 'A mensagem é obrigatória.' });
        return;
    }

    try { 
        console.log('📨 Recebendo mensagem do cliente:', message);
        
        // Chama o serviço que se comunica com a Hugging Face API
        const response = await askHuggingFace(message);

        console.log('✅ Resposta do chatbot:', response);
        // Retorna a resposta
        res.status(200).json({ response });
        return;
    } catch (error: any) {
        console.error('❌ Erro no servidor:', error.message);
        res.status(500).json({ error: error.message || 'Erro interno no servidor.' });
        return;
    }
});

export default router;