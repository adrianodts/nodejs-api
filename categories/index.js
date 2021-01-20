import express from 'express' 
import all from './services/all.js'
import create from './services/create.js'

const router = express.Router()

router.get('/', all)
router.post('/', create)

export default router