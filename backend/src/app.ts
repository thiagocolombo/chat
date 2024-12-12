import 'dotenv/config'; 
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import chatbotRoutes from './routes/chatbotRoutes';

const app = express();
const PORT = 5000;
console.log('🔑 AIMLAPI_API_KEY:', process.env.AIMLAPI_API_KEY);
app.use(cors());
app.use(bodyParser.json());

// Importa as rotas do chatbot
app.use('/api/chatbot', chatbotRoutes);

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
    //console.log('OPENAI_API_KEY:', process.env.OPENAI_API_KEY);
});
