import { useState } from "react";
import ListaMensagens from "../components/ListaMensagens";

const ChatReceitas = () => {
    const [mensagens, setMensagens] = useState([
        {
            id: 1,
            text: "Olá! Sou o Chef AI, seu assistente de receitas. Como posso ajudar você hoje?",
            sender: "bot"
        },
        {
            id: 2,
            text: "frango assado",
            sender: "usuario"
        },
        {
            id: 3,
            text: `aqui está uma receita simples de frango assado:
        Ingredientes: 1 frango, 2 colheres de sopa de azeite, sal e pimenta a gosto, 1 colher de chá de alho em pó, 1 colher de chá de páprica.
        Instruções: Preaqueça o forno a 200°C. Tempere o frango com azeite, sal, pimenta, alho em pó e páprica. Coloque o frango em uma assadeira e asse por cerca de 1 hora ou até que esteja dourado e cozido por dentro. Sirva quente!
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        `,
            sender: "bot"
        },
    ]);



    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-500 via-gray-50 to-emerald-50 p-4">
            <div className="container mx-auto max-w-4xl">
                <header className="text-center mb-8">
                    <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-emerald-600 text-transparent bg-clip-text mb-2">Chef AI</h1>
                    <p className="text-gray-600 text-lg">Seja bom-vindo ao Chef AI</p>
                </header>

                <div className="bg-white-70 backdrop-blur-sm rounded-2xl">
                    <ListaMensagens mensagens={mensagens}/>
                </div>
            </div>
        </div>
    )
}

export default ChatReceitas;