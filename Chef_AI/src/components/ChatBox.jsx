import { useState } from "react";


const ChatBox = ({onEnviarMensagem, desabilitado}) => {
const [mensagem, setMensagem] = useState("");

const handleSubmit = (event) => {
    event.preventDefault();

    onEnviarMensagem(mensagem);
    setMensagem("");

}

  return (
    <div className="border-t border-gray-200 bg-gray-50/80 p-4">
        <form className="flex space-x-3" onSubmit={handleSubmit}>
            <input 
            type="text"
            value={mensagem}
            onChange={ (e) => setMensagem(e.target.value) }
            placeholder="Digite qual receita você deseja saber"
            disabled={desabilitado}
            className="flex-1 px-5 py-3 bg-white border border-gray-300 rounded-full shadow-sm focus:ring-2 outline-none focus:ring-blue-500 focus:ring-opacity-50"/>
            <button 
                type="submit"
                disabled={desabilitado}   
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-emerald-500 text-white rounded-full shadow-md hover:from-blue-600 hover:to-emerald-600 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 disabled:from-gray-400 disabled:to-gray-300 disabled:cursor-not-allowed"
            >
                Enviar
            </button>
        </form>
    </div>
  );
}

export default ChatBox;