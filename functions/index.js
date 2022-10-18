import functions from 'firebase-functions'
import express from 'express'
import { createUser } from './src/users.js'

const app = express()

app.post('/users', createUser) 

app.get('/test', (req,res) => res.send('Our first cloud API works, MF!'))

export const api = functions.https.onRequest(app)




