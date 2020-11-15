import { Request,Response } from 'firebase-functions';

import {Car} from '../models/car.model'

export
const saveCar = async (req: Request,res: Response)=>{
    const body = req.body
    ///TODO: change FirestoreModel to use the class name as collection name
    const car = new Car(
        body.brand,
        body.model,
        body.year,
    )
    try{
        const id = await car.save()
        console.log(id)
        res.status(201).json({
            'data':id,
            'msg':'Car Added Successfully',
        })
    }catch(e){
        console.log(e)
        res.status(500).json({
            'msg':e,
        })
    }
}
export
const getCars = async (req: Request,res: Response)=>{
    ///TODO: change FirestoreModel to use the class name as collection name

    try{
        const cars = await Car.get()
        res.status(200).json({
            'msg':'OK',
            'data':cars
        })
    }catch(e){
        console.log(e)
        res.status(500).json({
            'msg':e,
        })
    }
}
export
const editCar = async (req: Request,res: Response)=>{
    ///TODO: change FirestoreModel to use the class name as collection name
    /// url/{id}
    const body = req.body
    const car = new Car(
        body.brand,
        body.model,
        body.year,
        req.params[0].substr(1)
    )
    try{
        await car.edit()
        res.status(200).json({
            'msg':'Car Edited Successfully',
        })
    }catch(e){
        console.log(e)
        res.status(500).json({
            'msg':e,
        })
    }
}
export
const deleteCar = async (req: Request,res: Response)=>{
    ///TODO: change FirestoreModel to use the class name as collection name
    /// url/{id}
    try{
        await Car.delete(req.params[0].substr(1))
        res.status(200).json({
            'msg':'Laptop Deleted Successfully',
        })
    }catch(e){
        console.log(e)
        res.status(500).json({
            'msg':e,
        })
    }
}