import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY, // Verifique que a chave está carregando
});

console.log('🔑 OPENAI_API_KEY:', process.env.OPENAI_API_KEY);

export const askGPT = async (message: string): Promise<string> => {
    try {
        console.log('🔄 Enviando mensagem para a OpenAI:', message);

        const response = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [{ role: 'user', content: message }],
            max_tokens: 150,
            temperature: 0.7,
        });

        console.log('✅ Resposta da OpenAI:', response);
        return response.choices[0]?.message?.content || 'Sem resposta do modelo.';
    } catch (error: any) {
        console.error('❌ Erro ao chamar a OpenAI:', error.response?.data || error.message);
        throw new Error('Erro ao se comunicar com a OpenAI.');
    }
};
