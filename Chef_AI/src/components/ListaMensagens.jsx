

// const ListaMensagens = () => {


//     return (
//         <div>
//             <h1>Lista</h1>
//         </div>
//     )
// }

// export default ListaMensagens;




// const ListaMensagens = ({ mensagens }) => {
//     return (
//         <div>
//             <h1>Lista</h1>
//             {mensagens.map((mensagem, index) => (
//                 <p key={index}>{mensagem}</p>
//             ))}
//         </div>
//     )
// }

import Mensagem from "./Mensagem";


const ListaMensagens = ({ mensagens }) => {
    return (
        <div className="flex-1 p-4 overflow-y-auto space-y-4">
            {mensagens.map((mensagem) => (
                <Mensagem key={mensagem.id} mensagem={mensagem} />
            ))}
        </div>
    )
}

export default ListaMensagens;