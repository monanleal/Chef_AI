import { use, useEffect, useRef } from "react";
import Mensagem from "./Mensagem";


const ListaMensagens = ({ mensagens, loading }) => { 
    const mensagemRef = useRef();
    
    const scrollToBottom = () => {
            mensagemRef.current.scrollIntoView({ behavior: 'smooth' });
        }

        useEffect(() => {
            scrollToBottom();
        }, [mensagens]);
    
       
    return (
        <div className="flex-1 p-4 overflow-y-auto space-y-4">
            {mensagens.map((mensagem) => (
                <Mensagem key={mensagem.id} mensagem={mensagem} />
            ))}

            {loading &&
                <div className="flex justify-start">
                    <div className="bg-gray-50 rounded-2xl rounded-bl-none shadow-md border-gray-200">
                        <div className="flex space-x-2">
                            <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                            <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse delay-100"></div>
                            <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse delay-200"></div>
                        </div>
                    </div>
                </div> 
            }

            <div ref={mensagemRef}></div>
        
        </div>

    )
}

export default ListaMensagens;