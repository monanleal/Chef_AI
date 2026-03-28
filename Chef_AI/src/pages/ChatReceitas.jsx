import { useState } from "react";
import ListaMensagens from "../components/ListaMensagens";
import ChatBox from "../components/ChatBox";

const ChatReceitas = () => {
    const [loading, setLoading] = useState(false);
    const [mensagens, setMensagens] = useState([
        {
            id: 1,
            text: "Olá! Sou o Chef AI, seu assistente de receitas. Como posso ajudar você hoje?",
            sender: "bot"
        }
    ]);

 
    const onEnviarMensagem = async (mensagem) => {
        
        };


    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-400 via-gray-50 to-emerald-50 p-4">
            <div className="container mx-auto max-w-4xl">
                <header className="text-center mb-8">
                    <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-emerald-600 text-transparent bg-clip-text mb-2">Chef AI</h1>
                    <p className="text-gray-600 text-lg">Seja bom-vindo ao Chef AI</p>
                </header>

                <div className="bg-white/70 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl h-[520px] border border-gray-100 flex flex-col">
                    <ListaMensagens mensagens={mensagens}/>
                    <ChatBox onEnviarMensagem={onEnviarMensagem} desabilitado={loading}/>
                </div>
            </div>
        </div>
    )
}

export default ChatReceitas;