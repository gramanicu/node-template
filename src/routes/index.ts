import express, { Router } from 'express'
import { BaseController } from '@controllers/base.controller'

const router: Router = express.Router()

router.use('/', BaseController.baseRoute)

export default router
