import { Router } from 'express'
import { getHTMLOnWire, postHTMLOnWire } from '../controllers/users.controller.js'

const router = Router()

router.get('/', getHTMLOnWire)
router.post('/', postHTMLOnWire)

export default router