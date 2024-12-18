import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Home: React.FC = () => {
    const router = useRouter();

    useEffect(() => {
        // Redireciona automaticamente para a página de login
        router.push('/login');
    }, [router]);

    return null; // Não renderiza nada nesta página
};

export default Home;