import * as functions from 'firebase-functions'
import * as laptop from './controllers/laptop.controller'

const allowed: any = {
    POST: laptop.saveOrder,
}

export
const api = functions.https.onRequest(async (req, res) => {
    if(allowed.hasOwnProperty(req.method))
        await allowed[req.method](req,res)
    else
        res.status(403).send('Forbiden!')
})