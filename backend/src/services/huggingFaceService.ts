import axios from 'axios';
import translate from 'translate';
import https from 'https';

// URL da Hugging Face API
const HUGGING_FACE_API_URL = 'https://api-inference.huggingface.co/models/facebook/blenderbot-400M-distill';
const HUGGING_FACE_API_KEY = process.env.HUGGING_FACE_API_KEY;

if (!HUGGING_FACE_API_KEY) {
    throw new Error('❌ A chave HUGGING_FACE_API_KEY não está definida no arquivo .env.');
}

// Configura a biblioteca translate 
translate.engine = 'google'; // Define o motor do Google Translate
translate.key = ''; // Opcional: para uso sem chave de API Google

// Configuração para ignorar SSL temporariamente
const httpsAgent = new https.Agent({
    rejectUnauthorized: false, // ⚠️ NÃO USAR EM PRODUÇÃO
});

export const askHuggingFace = async (message: string): Promise<string> => {
    try {
        console.log('🔄 Enviando mensagem para a Hugging Face API:', message);

        // Chamada para a API Hugging Face
        const response = await axios.post(
            HUGGING_FACE_API_URL,
            { inputs: message },
            {
                headers: {
                    Authorization: `Bearer ${HUGGING_FACE_API_KEY}`,
                    'Content-Type': 'application/json',
                },
                httpsAgent,
            }
        );

        // Extrai a resposta gerada pelo modelo
        const reply = response.data?.[0]?.generated_text || 'Resposta não disponível.';
        console.log('✅ Resposta da Hugging Face (Inglês):', reply);

        // 2. Traduz a resposta para Português usando a biblioteca `translate` do Google
        console.log('🔄 Traduzindo resposta para Português...');
        const translatedText = await translate(reply, { from: 'en', to: 'pt' });

        console.log('✅ Resposta traduzida para Português:', translatedText);
        return translatedText;

    } catch (error: any) {
        console.error('❌ Erro no serviço Hugging Face ou tradução:', error.message);
        throw new Error('Erro ao processar a solicitação.');
    }
};