import * as functions from 'firebase-functions'
import * as car from '../controllers/car.controller'

const allowed: any = {
    POST: car.saveCar,
    GET: car.getCars,
    DELETE: car.deleteCar,
    PUT: car.editCar
}

///@req(POST: laptop.saveLaptop, GET: laptop.getLaptops, default: laptop.)
export
const api = functions.https.onRequest(async (req, res) => {
    if(allowed.hasOwnProperty(req.method))
        await allowed[req.method](req,res)
    else
        res.status(403).send('Forbiden!')
})