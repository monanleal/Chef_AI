import express from 'express'
import receitasRoutes from './src/routes/receita.routes.js'

const app = express()
const PORT = 3005

app.use(express.json())

app.use('/api/receitas', receitasRoutes)

app.listen(PORT, () => {
    console.log(`Servidor está rodando na porta ${PORT}`)
})