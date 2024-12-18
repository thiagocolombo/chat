import React, { useState } from 'react';
import { useRouter } from 'next/router';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();

        // Autenticação simulada
        if (email === 'thiago@chatbot.com.br' && password === 'chatbot') {
            localStorage.setItem('authenticated', 'true'); // Salva a autenticação
            router.push('/chatbot'); // Redireciona para o chat
        } else {
            setError('E-mail ou senha inválidos.');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
                <h2 className="text-2xl font-bold mb-6 text-center">Acesso ao ouvidor</h2>
                <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                        <label className="block text-gray-600 mb-1">E-mail</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Digite seu e-mail"
                            className="w-full p-2 border border-gray-300 rounded focus:ring focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-600 mb-1">Senha</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Digite sua senha"
                            className="w-full p-2 border border-gray-300 rounded focus:ring focus:ring-blue-500"
                            required
                        />
                    </div>
                    {error && <p className="text-red-500 text-sm">{error}</p>}
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                    >
                        Entrar
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
