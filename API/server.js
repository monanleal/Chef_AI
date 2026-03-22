import express from 'express'

const app = express()
const PORT = 3005

app.listen(PORT, () => {
    console.log(`Servidor está rodando na porta ${PORT}`)
})
