

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




const ListaMensagens = ({ mensagens }) => {
    return (
        <div>
            <h1>Lista</h1>
            {mensagens.map((mensagem) => (
                <p key={mensagem.id}>{mensagem.text}</p>
            ))}
        </div>
    )
}

export default ListaMensagens;