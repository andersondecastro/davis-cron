import express from 'express'
import Responder from '../common/Responder.mjs'
import SaveHelloWorld from '../business/usecase/SaveHelloWorld.mjs'


const router = express.Router()
router.post('/helloworlds', (req, res, next) => {
    const responder = new Responder(req, res, next)
    const saveHelloWorld = new SaveHelloWorld()
    saveHelloWorld.execute(req.body, responder)
})

export default router
