import * as functions from 'firebase-functions'
import * as laptop from '../controllers/laptop.controller'

const allowed: any = {
    POST: laptop.saveLaptop,
    GET: laptop.getLaptops,
    DELETE: laptop.deleteLaptop,
    PUT: laptop.editLaptop
}

///@req(POST: laptop.saveLaptop, GET: laptop.getLaptops, default: laptop.)
export
const api = functions.https.onRequest(async (req, res) => {
    if(allowed.hasOwnProperty(req.method))
        await allowed[req.method](req,res)
    else
        res.status(403).send('Forbiden!')
})