import React, { useState } from 'react';
import axios from 'axios';

const Chatbot: React.FC = () => {
    const [messages, setMessages] = useState<{ user: string; bot: string }[]>([]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false); // Indicador de carregamento
    const [error, setError] = useState<string | null>(null); // Tratamento de erro

    const sendMessage = async () => {
        if (!input.trim()) return;

        const userMessage = { user: input, bot: '' };
        setMessages((prev) => [...prev, userMessage]);
        setLoading(true);
        setError(null);

        try {
            // Requisição para o backend
            const response = await axios.post('http://localhost:5000/api/chatbot', {
                message: input,
            });

            // Adiciona a resposta do bot
            const botMessage = { user: '', bot: response.data.response || 'Resposta inválida do servidor.' };
            setMessages((prev) => [...prev, botMessage]);
        } catch (err) {
            console.error('Erro ao se comunicar com o backend:', err);
            setError('Erro ao enviar mensagem. Tente novamente.');
        } finally {
            setLoading(false);
            setInput('');
        }
    };

    return (
        <div className="p-6 max-w-md mx-auto font-sans">
            <h1 className="text-2xl font-bold mb-4 text-center">Chatbot</h1>
            <div className="border border-gray-300 rounded-lg p-4 h-80 overflow-y-auto mb-4 bg-white shadow">
                {messages.map((msg, idx) => (
                    <div key={idx} className="mb-3">
                        {msg.user && <div className="text-blue-500"><strong>Você:</strong> {msg.user}</div>}
                        {msg.bot && <div className="text-green-500"><strong>Bot:</strong> {msg.bot}</div>}
                    </div>
                ))}
                {loading && <div className="text-gray-500">Carregando...</div>}
            </div>
            {error && <div className="text-red-500 mb-4">{error}</div>}
            <div className="flex gap-2">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Digite sua mensagem"
                    className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    onClick={sendMessage}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                    disabled={loading}
                >
                    Enviar
                </button>
            </div>
        </div>
    );
};

export default Chatbot;
