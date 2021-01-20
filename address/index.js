import express from 'express'
import get from './services/get.js'

const router = express.Router()
router.get('/:cep', get)

export default router
