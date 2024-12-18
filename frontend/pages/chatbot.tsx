import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Chatbot from '../components/Chatbot';

const ChatbotPage: React.FC = () => {
    const router = useRouter();

    useEffect(() => {
        const isAuthenticated = localStorage.getItem('authenticated');
        // Se não estiver autenticado, redireciona para a página de login
        if (!isAuthenticated) {
            router.push('/login');
        }
    }, [router]);

    return (
        <div className="min-h-screen flex items-center justify-center">
            <Chatbot />
        </div>
    );
};

export default ChatbotPage;
