import axios from 'axios';

const LLAMA_API_URL = 'https://api.llama-api.com/v1/chat';
const LLAMA_API_KEY = process.env.LLAMA_API_KEY; // Sua chave da API Llama

export const askLlamaAPI = async (message: string): Promise<string> => {
    try {
        console.log('🔄 Enviando mensagem para Llama API:', message);

        const response = await axios.post(
            LLAMA_API_URL,
            {
                messages: [{ role: 'user', content: message }],
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${LLAMA_API_KEY}`,
                },
            }
        );

        // Verifica e retorna a resposta
        const reply = response.data?.choices?.[0]?.message?.content;
        if (reply) {
            console.log('✅ Resposta da Llama API:', reply);
            return reply;
        }

        throw new Error('Resposta inválida da Llama API.');
    } catch (error: any) {
        console.error('❌ Erro ao chamar a Llama API:', error.response?.data || error.message);
        throw new Error('Erro ao se comunicar com a Llama API.');
    }
};
