


const Mensagem = ({ mensagem }) => {
    const isBot = mensagem.sender === 'bot';

    return (
        <div className={`flex ${isBot ? 'justify-start' : 'justify-end'} mb-4`}>
            <div className={`max-w-xs lg:max-w-md px-5 py-4 rounded-2xl shadow-2xl hover:shadow-xl cursor-pointer 
                ${isBot ? 'bg-gray-50 text-gray-800 rounded-bl-none border border-gray-300'
                    : 'bg-blue-500 text-white'}
                `}>
                <p className="text-sm whitespace-pre-line">{mensagem.text}</p>
            </div>
        </div>
    )
}

export default Mensagem;