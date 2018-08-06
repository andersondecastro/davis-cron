import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import helmet from 'helmet'
import GET from './router/GET.mjs'
import POST from './router/POST.mjs'
import RouteLogger from './common/RouteLogger.mjs'

const app = express()
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(helmet())
app.use(cors())
app.use(RouteLogger)

/** Insert your routes here */
app.use(GET)
app.use(POST)

export default app
