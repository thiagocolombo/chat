import axios from 'axios';

export const askAIMLAPI = async (message: string): Promise<string> => {
    try {
        console.log('🔄 Enviando mensagem para API gratuita:', message);

        // Chama uma API pública gratuita
        const response = await axios.get('https://api.chucknorris.io/jokes/random');

        // Usa a resposta da API como resposta do chatbot
        return response.data.value || 'Sem resposta disponível.';
    } catch (error: any) {
        console.error('❌ Erro ao chamar API gratuita:', error.message);
        return 'Desculpe, ocorreu um erro ao processar sua solicitação.';
    }
};
