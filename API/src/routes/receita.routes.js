import express from 'express'
import { perguntarReceita } from '../controllers/receitas.controllers.js'

const router = express.Router()

router.post('/perguntar', perguntarReceita)

export default router
