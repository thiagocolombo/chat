# Projeto Chatbot com autenticação e integração com um modelo de IA.

Este é um projeto de **Chatbot** foi desenvolvido com **Next.js** e **TypeScript** no front-end e **Node.js** e **Express** no back-end. 
A autenticação é simulada no frontend usando **localStorage** para armazenar o estado de login.

---

## **Tecnologias Utilizadas**

- **Next.js**
- **TypeScript**
- **Tailwind CSS** 
- **LocalStorage**
- **Node.js**
- **Express**

---

## **Funcionalidades**

1. **Login**:
   - O usuário insere e-mail e senha.
   - As credenciais são validadas localmente.

2. **Proteção de Rotas**:
   - A rota do chatbot (`/chat`) está protegida.
   - Se o usuário não estiver autenticado, ele é redirecionado para a página de login.

3. **Chatbot**:
   - Interface simples que simula o envio de mensagens e respostas através de um modelo de IA.

4. **Armazenamento Local**:
   - O estado de autenticação é salvo no **localStorage**, permitindo persistência da sessão até o logout.

---

## **Pré-requisitos**

- **Node.js** (v17 ou superior)
- **npm** (gerenciador de pacotes)

---


